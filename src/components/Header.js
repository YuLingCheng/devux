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

const LogoContainer = styled(Flex)`
  @media screen and (max-width: 425px) {
    display: none;
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

const NavLink = ({ currentPath, to, children }) => (
  <Text ml={[2, 3]}>
    <RouteLink selected={currentPath === to} to={to} uppercase>
      {children}
    </RouteLink>
  </Text>
);
NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  currentPath: PropTypes.string,
};

const Header = ({ currentPath }) => (
  <HeaderContainer>
    <Fade>
      <Flex
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        p={3}
      >
        <SectionLinks>
          {props => {
            const { links } = formatLinks(props.allLinks);

            const homeLink = (
              <>
                <Link to="/" title="Home">
                  <HomeLogo height="30px" />
                </Link>
              </>
            );
            const navLinks = links.map(({ name, value }) => (
              <AnchorLink
                key={name}
                onClick={value.onClick}
                selected={value.selected}
                uppercase
              >
                {name}
              </AnchorLink>
            ));

            return (
              <>
                <LogoContainer alignItems="center">{homeLink}</LogoContainer>
                <Flex alignItems="center">
                  {navLinks}
                  {navLinks.length === 0 && <NavLink to="/">Home</NavLink>}
                  {navLinks.length === 0 && (
                    <NavLink to="/#spark">Spark</NavLink>
                  )}
                  {navLinks.length === 0 && (
                    <NavLink to="/#about">About</NavLink>
                  )}
                  <NavLink currentPath={currentPath} to="/manifest">
                    Manifest
                  </NavLink>
                  <NavLink currentPath={currentPath} to="/toolbox">
                    Toolbox
                  </NavLink>
                </Flex>
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
