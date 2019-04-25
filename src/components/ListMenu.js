import React from 'react';
import styled from 'styled-components';
import { A } from './Styleguide';

const Menu = styled.nav`
  margin: 0;
  padding: 0;
  font-weight: 900;

  & :not(:last-child) {
    margin-right: 40px;
  }
`
const Link = styled(A)`
  text-transform: uppercase;
  font-size: 0.75rem;
`;
const MenuItem = (props) => (
  <Link to={props.to}>{props.children}</Link>
);

const ListMenu = () => (
  <Menu>
    <MenuItem to="/">Home</MenuItem>
    <MenuItem to="/about">About</MenuItem>
    <MenuItem to="/assess">Assess</MenuItem>
    <MenuItem to="/toolbox">Toolbox</MenuItem>
  </Menu>
);

export default ListMenu;
