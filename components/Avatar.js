import { filterDOMProps } from '@react-aria/utils';

import { styled } from 'stitches.config';

const AvatarImage = styled('img', {
  backgroundColor: '$gray-200',
  border: 'none',
  borderRadius: 9999,
  variants: {
    size: {
      large: {
        width: 48,
        height: 48,
      },
      small: {
        width: 19,
        height: 19,
      }
    }
  }
})

function Avatar(props) {
  const {
    alt = '',
    src,
    size,
    ...otherProps
  } = props;

  const domProps = filterDOMProps(otherProps);

  return (
    <AvatarImage {...domProps} size={size} src={src} alt={alt} />
  )
}

export default Avatar;
