import React from 'react';
import styled from 'styled-components';
import { A } from './Styleguide';

const Menu = styled.nav`
  margin: 0;
  padding: 0;
  font-weight: 900;

  &  > :not(:last-child) {
    margin-right: 2.5rem;
  }

  @media screen and (max-width: 425px) {
    padding: 0 1rem;

    &  > :not(:last-child) {
      margin-right: 1.5rem;
    }
  }
`
const MenuLink = styled(A)`
  text-transform: uppercase;
  font-size: 0.75rem;
`;

const ListMenu = () => (
  <Menu>
    <MenuLink to="/">Home</MenuLink>
    <MenuLink to="/about">About</MenuLink>
    <MenuLink to="/assess">Assess</MenuLink>
    <MenuLink to="/toolbox">Toolbox</MenuLink>
  </Menu>
);

export default ListMenu;
