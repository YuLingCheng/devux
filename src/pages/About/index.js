import React, { Component } from 'react';
import { Card, Icon } from 'antd';

import {
  Profile,
  Contact,
  CTA,
} from './About.Style';
import Header from '../../components/Header';
import { Background, ExternalLink, H1, P, PageContainer, PageContent } from '../../components/Styleguide';

import Cup from '../../assets/decorations/Cup';
import Pencil from '../../assets/decorations/Pencil';
import france from '../../assets/images/france_wang.jpg';
import yuling from '../../assets/images/yuling_cheng.png';

class About extends Component {
  render() {
    return (
      <PageContainer>
        <Header />
        <PageContent>
          <Card>
          <H1>Why spark the DevUx culture?</H1>
          <P>Front-end development has gotten trickier over the years.
            <br/>As new frameworks enable more complex behaviour, UX expectations have also risen.
          </P>
          <P>Yet, we still work the old way: Product defines features, designers make mock-ups, then developers integrate them.
            <br/>Side effects include: blocking dependencies, rework, misunderstanding, frustration, for everyone involved.
          </P>
          <P>As lead designer (France Wang) and lead developer (Yu Ling Cheng), we’ve experimented to increase productivity and reduce frustration on both sides.
            <br/>We've minimized back and forth on design integration by creating a DevUX culture in our companies and we want to share it.</P>
          <Contact>
            <Contact.Pictures>
              <Profile src={france} alt="France WANG" />
              <Profile src={yuling} alt="Yu Ling CHENG" />
            </Contact.Pictures>
            <Contact.Text>
              <p><ExternalLink href="https://twitter.com/wang_france"><Icon type="twitter" />@wang_france</ExternalLink></p>
              <p><ExternalLink href="https://twitter.com/yulingec"><Icon type="twitter" />@yulingec</ExternalLink></p>
            </Contact.Text>
            <Contact.Text>
              <CTA to="assess">Assess your current collaboration</CTA>
            </Contact.Text>
          </Contact>
          </Card>
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

export default About;
