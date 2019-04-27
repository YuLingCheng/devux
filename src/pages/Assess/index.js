import React, { Component } from 'react';
import { Card } from 'antd';

import {
  LevelsContainer,
  LevelContainer,
  CTA
} from './Assess.Style';
import Header from '../../components/Header';
import Slide from '../../components/Slide';
import { H1, H2, Background, PageContainer, PageContent } from '../../components/Styleguide';

import Cup from '../../assets/decorations/Cup';
import Pencil from '../../assets/decorations/Pencil';
import level0 from '../../assets/images/level0.png';
import level1 from '../../assets/images/level1.png';
import level1pb from '../../assets/images/level1pb.png';
import level2 from '../../assets/images/level2.png';
import level2pb from '../../assets/images/level2pb.png';
import level3 from '../../assets/images/level3.png';

class Assess extends Component {
  render() {
    return (
      <PageContainer>
        <Header />
        <PageContent>
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
          <Slide
            title="Levels recap and the problems for each"
            images={[
              {seq: 1, src: level0},
              {seq: 2, src: level1},
              {seq: 3, src: level1pb},
              {seq: 4, src: level2},
              {seq: 5, src: level2pb},
              {seq: 6, src: level3},
            ]}
          />
        </PageContent>
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

export default Assess;
