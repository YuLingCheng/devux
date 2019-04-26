import React, { Component, Fragment } from 'react';
import { Card, Divider } from 'antd';

import {
  HomeContainer,
  CTA,
} from './Home.Style';
import Header from '../../components/Header';
import { Background, H1, H2 } from '../../components/Styleguide';

import Cup from '../../assets/decorations/Cup';
import Pencil from '../../assets/decorations/Pencil';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <HomeContainer>
          <Card>
            <H1>Spark the DevUx culture</H1>
            <Card>
              <H2>Define where you are and where you want to go</H2>
              <CTA to="assess">Assess</CTA>
              <Divider />
              <H2>Get the starter kit to improve your collaboration</H2>
              <CTA to="toolbox">Toolbox</CTA>
            </Card>
          </Card>
        </HomeContainer>
        <Background>
          <Cup cupSize="305" sizeUnit="px" x="30px" y="40px" style={{opacity: 0.5}}>
            <Cup.Handle cupSize="305" sizeUnit="px" />
          </Cup>
          <Pencil.Shadow style={{opacity: 0.5}} top="-70vh" left="85vw" rotate="-200"><Pencil /></Pencil.Shadow>
        </Background>
      </Fragment>
    );
  }
};

export default Home;
