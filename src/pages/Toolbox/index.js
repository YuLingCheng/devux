import React, { Component, Fragment } from 'react';
import { Anchor, BackTop, Card, Divider, Row, Col } from 'antd';

import {
  ToolboxContainer,
  ToolboxContent,
  Background,
  CTA,
  SlideContent,
  Handoff,
} from './Toolbox.Style';
import Header from '../../components/Header';
import { A, H1, H2, P, ExternalLink } from '../../components/Styleguide';

import Cup from '../../assets/decorations/Cup';
import Pencil from '../../assets/decorations/Pencil';

import slide1 from '../../assets/images/slide1.png';
import slide2 from '../../assets/images/slide2.png';
import slide4 from '../../assets/images/slide4.png';
import slide5 from '../../assets/images/slide5.png';
import slide6 from '../../assets/images/slide6.png';
import slide7 from '../../assets/images/slide7.png';
import slide8 from '../../assets/images/slide8.png';
import slide9 from '../../assets/images/slide9.png';
import zeplin from '../../assets/images/zeplin.png';
import invision from '../../assets/images/invision.png';
import other_handoff from '../../assets/images/other_handoff.png';

const Slide = ({id, title, images}) => (
  <Card id={id} style={{textAlign: 'center'}}>
    <H2>{title} </H2>
    {images.map(({seq, src, alt, caption}) => (
      <SlideContent key={seq}>
      <SlideContent.Img src={src} alt={alt} />
      {caption && <SlideContent.P>{caption}</SlideContent.P>}
      </SlideContent>
    ))}
  </Card>
);

class Toolbox extends Component {
  render() {
    return (
      <ToolboxContainer>
        <Header />
        <ToolboxContent id="scrollable-content">
          <BackTop target={() => document.getElementById('root')} visibilityHeight={0} />
          <Card>
            <H1>Toolbox</H1>
            <Anchor affix={false} offsetTop="-30px">
              <Anchor.Link href='#process' title="Define a process involving the right people at the right time" />
              <Anchor.Link href='#roadmaps' title="Sync designers and developers roadmaps" />
              <Anchor.Link href='#delivery' title="Define what needs to be delivered alongside mockups" />
              <Anchor.Link href='#handoff' title="Centralise information with a design handoff tool" />
              <Anchor.Link href='#styleguide' title="Styleguide" />
              <Anchor.Link href='#userflow' title="Userflow" />
              <Anchor.Link href='#layout' title="Layout" />
            </Anchor>
          </Card>
          <Slide id="process"
            title="Define a process involving the right people at the right time"
            images={[
              {seq: 1, src: slide1, caption: 'Adapt this base process to your needs'},
            ]}
          />
          <Slide id="roadmaps"
            title="Sync designers and developers roadmaps"
            images={[
              {seq: 1, src: slide9, caption: 'This way, they can solve unanticipated edge cases together'},
            ]}
          />
          <Slide id="delivery"
            title="Define what needs to be delivered alongside mockups"
            images={[
              {seq: 1, src: slide2, caption: 'Check this list for each mockup creation'},
            ]}
          />
          <Card id="handoff">
            <H2>Centralise information with a design handoff tool</H2>
            <Handoff>
              <Handoff.Pictures>
                <Handoff.Picture src={zeplin} alt="zeplin" />
              </Handoff.Pictures>
              <Handoff.Text>
                <p><ExternalLink href="https://zeplin.io">Zeplin</ExternalLink> is our recommended tool for handoff</p>
              </Handoff.Text>
            </Handoff>
            <Handoff>
              <Handoff.Pictures>
                <Handoff.Picture src={invision} alt="invision" />
              </Handoff.Pictures>
              <Handoff.Text>
                <p>We work with <ExternalLink href="https://invisionapp.com">InVision</ExternalLink> because of their interesting free plan and prototyping app</p>
              </Handoff.Text>
            </Handoff>
            <Handoff>
              <Handoff.Pictures>
                <Handoff.Picture src={other_handoff} alt="avocode abstract marvelapp" />
              </Handoff.Pictures>
              <Handoff.Text>
                <p><ExternalLink href="https://avocode.com/">Avocode</ExternalLink>, <ExternalLink href="https://www.abstract.com/">Abstract</ExternalLink>, <ExternalLink href="https://marvelapp.com/">MarvelApp</ExternalLink> are also good alternatives</p>
              </Handoff.Text>
            </Handoff>
            <SlideContent.P>
              Our comparative article:
              <br/><ExternalLink href="https://blog.theodo.fr/2018/11/zeplin-vs-invison-design-handoff/">[DevUx] Zeplin vs InVision? The best tool for design handoff</ExternalLink>
            </SlideContent.P>
          </Card>
          <Slide id="styleguide"
            title="Define a styleguide as soon as possible on your project"
            images={[
              {seq: 1, src: slide4, caption: 'The styleguide is a UI contract between designers and developers'},
              {seq: 2, src: slide5, caption: 'The styleguide also show basic component behaviours and states'},
            ]}
          />
          <Slide id="userflow"
            title="Provide a userflow to explain complex feature navigation"
            images={[
              {seq: 1, src: slide6},
            ]}
          />
          <Slide id="layout"
            title="Provide explainations on how the layout should change on all screen sizes"
            images={[
              {seq: 1, src: slide7, caption: 'Describe sizes that should change or not'},
              {seq: 2, src: slide8},
            ]}
          />
        </ToolboxContent>
      </ToolboxContainer>
    );
  }
};

export default Toolbox;
