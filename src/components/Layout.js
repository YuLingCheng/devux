import CookieConsent from 'react-cookie-consent';
import React, { Fragment } from 'react';
import ReactGA from 'react-ga';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { ScrollingProvider } from 'react-scroll-section';
import 'react-tippy/dist/tippy.css';
import config from 'react-reveal/globals';
import colors from '../../colors';
import Helmet from './Helmet';

const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
}

body {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  font-family: Helvetica, sans-serif;
  color: ${colors.primaryText};
  overflow-x: hidden;

  .cookie-banner {
    padding: 10px;
    background-color: ${colors.primaryText};
    font-size: 13px;
    color: ${colors.white};
    position: fixed;
    bottom: 0px;
    right: 0;
    width: 187px;
    margin: 10px;
    padding: 15px;
    text-align: center;

    &__content {

    }
    &__btn {
      background: none;
      border: none;
      color: ${colors.white};
      position: relative;
      border-bottom: 2px solid ${colors.primaryLight};
      cursor: pointer;
      font-size: 13px;
      margin-top: 10px;
      padding: 0 0 5px 0;

      &:after {
        content: '';
        position: absolute;
        right: 0;
        width: 0;
        bottom: -2px;
        background: ${colors.secondary};
        height: 2px;
        transition-property: width;
        transition-duration: 0.3s;
        transition-timing-function: ease-out;
      }
    
      &:hover:after {
        left: 0;
        right: auto;
        width: 100%;
      }

      &:not(:last-of-type) {
        margin-right: 20px;
      }
    }
  }
}
`;

config({ ssrFadeout: true });

const reloadPage = () => {
  // reload to load google analytics
  document.location.reload(true);
};

const Layout = ({ children }) => (
  <Fragment>
    <GlobalStyle />
    <ThemeProvider theme={{ colors }}>
      <ScrollingProvider>
        <Helmet />
        {children}
        <CookieConsent
          cookieName="gdpr-accepted"
          buttonText="I understand"
          enableDeclineButton
          declineButtonText="No thanks"
          disableStyles
          containerClasses="cookie-banner"
          buttonClasses="cookie-banner__btn"
          declineButtonClasses="cookie-banner__btn"
          contentClasses="cookie-banner__content"
          onAccept={reloadPage}
        >
          This website was build with love and uses cookies to enhance your
          experience.
        </CookieConsent>
      </ScrollingProvider>
    </ThemeProvider>
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
