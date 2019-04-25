import React, { Component } from 'react';
import styled from 'styled-components';

import ListMenu from './ListMenu';
import Cup from '../assets/decorations/Cup';

const HeaderContainer = styled.header`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
`

class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <Cup.Icon cupSize="32" sizeUnit="px" top="-3px">
          <Cup.Handle cupSize="32" sizeUnit="px" />
        </Cup.Icon>
        <ListMenu />
      </HeaderContainer>
    );
  }
};

export default Header;