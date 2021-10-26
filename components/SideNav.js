import { styled } from 'stitches.config';

const SideNavItemContainer = styled('li', {
  textStyle: '$table-cell',
  color: '$body-subtle'
})

const SideNavItemLink = styled('a', {
  textStyle: '$table-cell',
  color: '$body-subtle',
  lineHeight: '$body-intro',
  textDecoration: 'none',
})

function SideNavItem({ href, label }) {
  return (
    <SideNavItemContainer>
      <SideNavItemLink href={href}>
        {label}
      </SideNavItemLink>
    </SideNavItemContainer>
  )
}

const SideNavTitle = styled('span', {
  textStyle: '$header-4',
  marginBottom: '$regular'
});

const SideNavList = styled('ul', {
  display: 'grid',
  flexDirection: 'column',
  gridGap: '$regular',
  listStyle: 'none',
  padding: 0,
  margin: 0,

})
const SideNavContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  listStyle: 'none',
  padding: 0,
  margin: 0,
});

function SideNav({ title, children }) {
  return (
    <SideNavContainer>
      <SideNavTitle>
        {title}
      </SideNavTitle>
      <SideNavList>
        {children}
      </SideNavList>
    </SideNavContainer>
  )
}

SideNav.Item = SideNavItem;

export default SideNav;
