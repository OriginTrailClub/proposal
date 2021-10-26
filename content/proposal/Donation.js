import * as React from 'react';

import { styled } from 'stitches.config';

import Button from 'components/Button';
import Tooltip from 'components/Tooltip';

import ClipboardLineIcon from 'remixicon-react/ClipboardLineIcon';

const DonationContainer = styled('div', {
  width: '100%',
  display: 'flex',
  gap: '$x-large'
});

const DonationMeta = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$regular'
})

const DonationInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$small'
});

const DonationTitle = styled('h3', {
  margin: 0,
  textStyle: '$header-3',
});

const DonationDescription = styled('div', {
  textStyle: '$body-secondary',
});

const DonationAddress = styled('div', {
  display: 'flex',
  gap: '$small',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const DonationAdressTitle = styled('h4', {
  margin: 0,
  textStyle: '$header-4',
});

const DonationAddressHash = styled('span', {
  textStyle: '$table-cell'
});

const DonationAdressInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$small'
})

const DonationAdressCallToAction = styled('div', {

});

const DonationQR = styled('img', {
  display: 'flex',
  width: 96,
  height: 96,
  flexShrink: 0,
  flexGrow: 0,
});

const useCopyToClipboard = (text, notifyTimeout = 1000) => {
  const [copyStatus, setCopyStatus] = React.useState('inactive');

  const onCopy = React.useCallback(() => {
    navigator.clipboard.writeText(text).then(
      () => setCopyStatus('copied'),
      () => setCopyStatus('failed'),
    )
  }, [text]);

  React.useEffect(() => {
    if (copyStatus === 'inactive') {
      return;
    }

    const tID = setTimeout(() => setCopyStatus('inactive'), notifyTimeout);

    return () => clearTimeout(tID)
  }, [copyStatus, setCopyStatus, notifyTimeout]);

  return [copyStatus, onCopy];
};

function Donation({ title, description, address, qr }) {
  const [status, onCopy] = useCopyToClipboard(address);

  let tooltipLabel = 'Copy to clipboard';

  if (status === 'copied') {
    tooltipLabel = 'Copied to clipboard!';
  } else if (status === 'failed') {
    tooltipLabel = 'Failed to copy to clipboard'
  }

  return (
    <DonationContainer>
      <DonationMeta>
        <DonationInfo>
          <DonationTitle>
            {title}
          </DonationTitle>
          <DonationDescription>
            {description}
          </DonationDescription>
        </DonationInfo>

        <DonationAddress>
          <DonationAdressInfo>
            <DonationAdressTitle>
              Address
            </DonationAdressTitle>
            <DonationAddressHash>
              {address}
            </DonationAddressHash>
          </DonationAdressInfo>
          <DonationAdressCallToAction>
            <Tooltip.Trigger isOpen={status === 'copied' || status === 'failed' ? true : undefined}>
              <Button variant="secondary" Icon={ClipboardLineIcon} onPress={onCopy} label="Copy to clipboard" hideLabel />
              <Tooltip label={tooltipLabel} />
            </Tooltip.Trigger>
          </DonationAdressCallToAction>
        </DonationAddress>
      </DonationMeta>
      <DonationQR img="#todo" alt="todo" />
    </DonationContainer>
  )
}

export default Donation;
