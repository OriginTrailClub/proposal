import * as React from 'react';
import { createPortal } from 'react-dom';

import { useTooltipTriggerState } from '@react-stately/tooltip';
import { useTooltipTrigger, useTooltip } from '@react-aria/tooltip';
import { useOverlayPosition, OverlayContainer } from '@react-aria/overlays'
import { FocusableProvider } from '@react-aria/focus';

import { styled } from 'stitches.config';

function Trigger(props) {
  let state = useTooltipTriggerState(props);
  let triggerRef = React.useRef();
  let overlayRef = React.useRef();

  let [trigger, tooltip] = React.Children.toArray(props.children);

  let { triggerProps, tooltipProps } = useTooltipTrigger(props, state, triggerRef);

  let { overlayProps, arrowProps, placement } = useOverlayPosition({
    placement: 'top',
    targetRef: triggerRef,
    overlayRef,
    offset: 10,
    isOpen: state.isOpen
  });

  return (
    <FocusableProvider
      {...triggerProps}
      ref={triggerRef}
    >
      {trigger}
      {state.isOpen ? (
        <OverlayContainer>
          {React.cloneElement(tooltip, {
            ...tooltipProps,
            arrowProps,
            placement,
            style: overlayProps.style,
            state,
            ref: overlayRef
          })}
        </OverlayContainer>) : null}
    </FocusableProvider>
  );
}

const TooltipContainer = styled('div', {
  display: 'flex',
  p: '$x-small',
  backgroundColor: '$gray-900',
})

const TooltipContent = styled('span', {
  display: 'flex',
  textStyle: '$body-secondary',
  color: 'white',
  fontWeight: "$semi-bold",

  '@bp1': {
    textStyle: '$body-compact',
    color: 'white',
    fontWeight: "$semi-bold",      
  }
})

const TooltipTip = styled('span', {
  position: 'absolute',
  top: '100%',
  height: 0,
  width: 0,
  borderStyle: 'solid',
  borderColor: 'transparent',
  borderTopColor: '$gray-900',
  borderWidth: 6,
  transform: 'translateX(-50%)',
});

const Tooltip = React.forwardRef(function Tooltip({ state, ...props }, ref) {
  const { label, style, arrowProps } = props;

  let { tooltipProps } = useTooltip(props, state);

  return createPortal(
    <TooltipContainer {...tooltipProps} style={style} ref={ref}>
      <TooltipContent>{label}</TooltipContent>
      <TooltipTip {...arrowProps} />
    </TooltipContainer>,
    document.body
  );
});

Tooltip.Trigger = Trigger;

export default Tooltip;
