import PropTypes from 'prop-types';
import React from 'react';
import Headroom from 'react-headroom';
import { Flex } from 'rebass';
import styled from 'styled-components';
import { SectionLinks } from 'react-scroll-section';
import Fade from 'react-reveal/Fade';
import { Link } from 'gatsby';
import AnchorLink from './AnchorLink';
import RouteLink from './RouteLink';
import { Text } from './Typography';
import HomeLogo from './Logo/HomeLogo';

const capitalize = s => s && s[0].toUpperCase() + s.slice(1);

const HeaderContainer = styled(Headroom)`
  .headroom--pinned {
    background: ${props => props.theme.colors.background};
  }

  position: absolute;
  width: 100%;
`;

const MobileNav = styled(Flex)`
  width: 100%;

  nav > :not(:last-child) {
    margin-bottom: 16px;
  }
  @media screen and (min-width: 425px) {
    display: none;
  }
`;

const DesktopNav = styled(Flex)`
  width: 100%;
  nav > :not(:last-child) {
    margin-right: 32px;
  }
  @media screen and (max-width: 425px) {
    display: none;
  }
`;

const BurgerBar = styled.div`
  width: 22px;
  height: 2px;
  background: ${props => props.theme.colors.primaryText};
`;
const BurgerToggle = styled.input`
  display: none;
  ~ nav {
    height: 0;
    > * {
      opacity: 0;
    }
    > :first-child {
      margin-top: 16px;
    }
  }
  &:checked ~ nav {
    height: auto;
    transition: 0.5s;
    > * {
      opacity: 1;
      transition: 0.5s;
    }
  }
  + label {
    > :not(:last-of-type) {
      margin-bottom: 8px;
    }
  }
  &:checked + label {
    > :nth-child(2) {
      transition: 100ms;
      opacity: 0;
    }
    > :nth-child(1) {
      transition: 200ms;
      transform: translate(0, 10px) rotate(45deg);
    }
    > :nth-child(3) {
      transition: 200ms;
      transform: translate(0, -10px) rotate(-45deg);
    }
  }
`;

const formatLinks = allLinks =>
  Object.entries(allLinks).reduce(
    (acc, [key, value]) => {
      if (key === 'undefined') return acc;
      return {
        ...acc,
        links: [...acc.links, { name: capitalize(key), value }],
      };
    },
    { links: [] },
  );

const NavItem = ({ children }) => (
  <Text as="span" letterSpacing="1px" fontSize={[1, 2]} color="primaryText">
    {children}
  </Text>
);
NavItem.propTypes = {
  children: PropTypes.node.isRequired,
};

const NavLink = ({ currentPath, to, children }) => (
  <RouteLink selected={currentPath === to} to={to}>
    <NavItem>{children}</NavItem>
  </RouteLink>
);
NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  currentPath: PropTypes.string,
};

const getNavigation = (navLinks, currentPath) => (
  <>
    {navLinks}
    {navLinks.length === 0 && <NavLink to="/">Home</NavLink>}
    {navLinks.length === 0 && <NavLink to="/#spark">Spark</NavLink>}
    {navLinks.length === 0 && <NavLink to="/#about">About</NavLink>}
    <NavLink currentPath={currentPath} to="/manifest">
      Manifest
    </NavLink>
    <NavLink currentPath={currentPath} to="/toolbox">
      Toolbox
    </NavLink>
  </>
);

const Header = ({ currentPath }) => (
  <HeaderContainer>
    <Fade>
      <Flex
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        py={['1.3em', '32px']}
        px={['1.5em', '40px']}
        backgroundColor="background"
      >
        <SectionLinks>
          {props => {
            const { links } = formatLinks(props.allLinks);

            const homeLink = (
              <Flex alignItems="center">
                <Link to="/" title="Home">
                  <HomeLogo height="30px" />
                </Link>
              </Flex>
            );
            const navLinks = links.map(({ name, value }) => (
              <AnchorLink
                key={name}
                onClick={value.onClick}
                selected={value.selected}
              >
                <NavItem>{name}</NavItem>
              </AnchorLink>
            ));
            const navigation = getNavigation(navLinks, currentPath);

            return (
              <>
                <DesktopNav alignItems="center" justifyContent="space-between">
                  {homeLink}
                  <Flex as="nav">{navigation}</Flex>
                </DesktopNav>
                <MobileNav
                  alignItems="flex-start"
                  justifyContent="space-between"
                >
                  {homeLink}
                  <Flex
                    flexDirection="column"
                    alignItems="flex-end"
                    justifyContent="center"
                    mt="6px"
                  >
                    <BurgerToggle id="burger" type="checkbox" />
                    <label htmlFor="burger">
                      <BurgerBar />
                      <BurgerBar />
                      <BurgerBar />
                    </label>
                    <Flex as="nav" flexDirection="column" alignItems="flex-end">
                      {navigation}
                    </Flex>
                  </Flex>
                </MobileNav>
              </>
            );
          }}
        </SectionLinks>
      </Flex>
    </Fade>
  </HeaderContainer>
);

Header.propTypes = {
  currentPath: PropTypes.string,
};

export default Header;
