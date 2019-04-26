import React, { Component } from 'react';
import { Card, Divider } from 'antd';

import {
  HomeContent,
  CTA,
} from './Home.Style';
import Header from '../../components/Header';
import { Background, H1, H2, PageContainer } from '../../components/Styleguide';

import Cup from '../../assets/decorations/Cup';
import Pencil from '../../assets/decorations/Pencil';

class Home extends Component {
  render() {
    return (
      <PageContainer>
        <Header />
        <HomeContent>
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
        </HomeContent>
        <Background>
          <Cup cupSize="305" sizeUnit="px" x="30px" y="40px">
            <Cup.Handle cupSize="305" sizeUnit="px" />
          </Cup>
          <Pencil.Shadow top="-70vh" left="85vw" rotate="-200"><Pencil /></Pencil.Shadow>
        </Background>
      </PageContainer>
    );
  }
};

export default Home;
