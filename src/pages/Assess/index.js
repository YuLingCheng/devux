import React, { Component, Fragment } from 'react';
import { Card } from 'antd';

import {
  AssessContainer,
  LevelsContainer,
  LevelContainer,
  CTA
} from './Assess.Style';
import Header from '../../components/Header';
import { H1, H2, Background } from '../../components/Styleguide';

import Cup from '../../assets/decorations/Cup';
import Pencil from '../../assets/decorations/Pencil';

class Assess extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <AssessContainer>
          <Card>
            <H1>Define where you are standing now and where you want to go</H1>
            <LevelsContainer>
              <LevelContainer>
              <p>Very siloed situation?</p>
              <p>Don’t get along?</p>
              <Card title={<H2>Level 1: <span role="img" aria-label="communication">🤝</span> Basics</H2>}>
                <p>Delivery process is clear</p>
                <p>Centralize mock-ups and assets in a design handoff tool</p>
              </Card>
              </LevelContainer>
              <LevelContainer>
              <p>Delays?</p>
              <p>Lot's of back and forth?</p>
              <Card title={<H2>Level 2: <span role="img" aria-label="efficiency">🙌</span> Efficiency</H2>}>
                <p>Design with real data and use cases in mind</p>
                <p>Hand off design direction with a styleguide and userflows</p>
              </Card>
              </LevelContainer>
              <LevelContainer>
              <p>High UX/UI expectations?</p>
              <p>Wanna have fun?</p>
              <Card title={<H2>Level 3: <span role="img" aria-label="symbiosis">🚀</span> Symbiosis</H2>}>
                <p>Involve everyone in the product design</p>
                <p>Share common patterns on both dev and designer side</p>
              </Card>
              </LevelContainer>
            </LevelsContainer>
            <CTA style={{margin: 'auto'}} to="toolbox">Start improving your collaboration</CTA>
          </Card>
        </AssessContainer>
        <Background>
          <Cup cupSize="305" sizeUnit="px" x="30px" y="40px" style={{opacity: 0.5}}>
            <Cup.Handle cupSize="305" sizeUnit="px" />
          </Cup>
          <Pencil.Shadow style={{opacity: 0.5}} top="-70vh" rotate="-200"><Pencil /></Pencil.Shadow>
        </Background>
      </Fragment>
    );
  }
};

export default Assess;
