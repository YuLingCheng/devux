import React from 'react';
import styled from 'styled-components';
import { Card } from 'antd';
import { H2 } from './Styleguide';

export const SlideContent = styled.div`
  &:not(:last-of-type) { margin-bottom: 40px; }
  text-align: center;
`;

SlideContent.Img = styled.img`
  width: 100%;
  height: auto;
`;
SlideContent.P = styled.p`
  margin-top: 10px;
`;

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

export default Slide;