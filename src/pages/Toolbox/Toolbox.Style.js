import React from 'react';
import styled, { withTheme } from 'styled-components';

import { P, ButtonLink } from '../../components/Styleguide';
import BackgroundBase from '../../assets/decorations/BackgroundBase';

export const ToolboxContainer = styled.div`
  background-color: ${props => props.theme.colors.blue_transparent};
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 0 20px;s
`;
export const ToolboxContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  & > .ant-card {
    max-width: 800px;
    width: 100%;
  }

  & > div {
    margin-bottom: 40px;
  }
`;

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

export const Handoff = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
Handoff.Pictures = styled.div``;
Handoff.Picture = styled.img`
  height: 50px;
`;
Handoff.Text = styled.div`
  padding: 30px;
`;
