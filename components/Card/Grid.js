import { styled } from 'stitches.config';

const GridContainer = styled('div', {
  display: 'grid',
  gridGap: '$regular',
  gridTemplateColumns: '1fr 1fr'
});

function Grid({ children }) {
  return (
    <GridContainer>
      {children}
    </GridContainer>
  )
}

export default Grid;
