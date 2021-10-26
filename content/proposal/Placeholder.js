import { styled } from 'stitches.config';

const PlaceholderContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '$indigo-50',
  p: '$regular',
  height: 204,
  width: '100%',
});

const PlaceholderIconContainer = styled('div', {
  width: 24,
  height: 24,
  flexShrink: 0,
  flexGrow: 0,
  color: '$indigo-700',
  mr: '$regular'
});

const PlaceholderContent = styled('div', {
  display: 'flex',
  alignItems: 'center',
})

const PlaceholderLabel = styled('span', {
  textStyle: '$table-head',
  color: '$indigo-900',
})

function Placeholder({ label, Icon }) {
  return (
    <PlaceholderContainer>
      <PlaceholderContent>
        <PlaceholderIconContainer as={Icon} />
        <PlaceholderLabel>{label}</PlaceholderLabel>
      </PlaceholderContent>
    </PlaceholderContainer>
  )
}

export default Placeholder;
