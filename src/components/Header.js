import PropTypes from 'prop-types';
import React from 'react';
import Headroom from 'react-headroom';
import { Flex, Image, Text } from 'rebass';
import styled from 'styled-components';
import { SectionLinks } from 'react-scroll-section';
import Rotate from 'react-reveal/Rotate';
import AnchorLink from './AnchorLink';
import RouteLink from './RouteLink';
import Logo from './Logo/icon.png';

const capitalize = s => s && s[0].toUpperCase() + s.slice(1);

const HeaderContainer = styled(Headroom)`
  .headroom--pinned {
    background: ${props => props.theme.colors.primaryDark};
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

const NavLink = ({ to, children }) => (
  <Text ml={[2, 3]}>
    <RouteLink to={to} uppercase>
      {children}
    </RouteLink>
  </Text>
);
NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const Header = () => (
  <HeaderContainer>
    <Rotate top left duration={400}>
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
                <Image src={Logo} width="40px" alt="DevUx Logo" mr={3} />
                <RouteLink to="/">DevUx</RouteLink>
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
                  <NavLink to="/manifest">Manifest</NavLink>
                  <NavLink to="/toolbox">Toolbox</NavLink>
                </Flex>
              </>
            );
          }}
        </SectionLinks>
      </Flex>
    </Rotate>
  </HeaderContainer>
);

export default Header;
