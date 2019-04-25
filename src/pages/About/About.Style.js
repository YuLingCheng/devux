import React from 'react';
import styled, { withTheme } from 'styled-components';

import { P, ButtonLink } from '../../components/Styleguide';
import BackgroundBase from '../../assets/decorations/BackgroundBase';

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  min-height: 90vh;
  justify-content: center;
  align-items: center;

  & > .ant-card { max-width: 800px; }

  & > :not(:last-child) {
    margin-bottom: 40px;
  }
`;

export const Background = styled(BackgroundBase)`
  border-top: 100vh solid ${props => props.theme.colors.mainBackground};
  border-left: 0 solid transparent;
  border-right: 10vw solid transparent;
  height: 0;
  width: 55vw;
  min-width: 30rem;

  @media screen and (max-width: 425px) {
    border: none;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.colors.mainBackground};
  }
`;

export const Profile = styled.img`
  border-radius: 50%;
  border: 4px solid white;
  width: 100px;
`;

export const CTA = styled(ButtonLink)`
  margin-top: 0.5rem;
`;

export const Contact = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
Contact.Pictures = styled.div``;
Contact.Text = styled.div`
  padding: 30px;
`;
