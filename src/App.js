import { createBrowserHistory } from "history";
import React, { Component, Fragment } from "react";
import ReactGA from 'react-ga';
import { Router, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Home from "./pages/Home";
import Toolbox from "./pages/Toolbox";
import About from "./pages/About";
import Assess from "./pages/Assess";

import "antd/dist/antd.css";

const history = createBrowserHistory();

if (process.env.NODE_ENV === "production") {
  ReactGA.initialize('UA-138978525-2');
  history.listen(location => ReactGA.pageview(location.pathname));
}

const AppRouter = () => (
  <Router history={history}>
    <Fragment>
      <Route path="/" exact component={Home} />
      <Route path="/toolbox" exact component={Toolbox} />
      <Route path="/assess" exact component={Assess} />
      <Route path="/about" exact component={About} />
    </Fragment>
  </Router>
);

const theme = {
  colors: {
    primary: "#f6b93b",
    primary_dark: "#fa983a",
    primary_light: "#d5a973",
    mainBackground: "rgba(74, 105, 189, 1.0)",
    error: "#EF5B5B",
    cocoa: "#4c3013",
    lighter: "#dad2ca",
    lightest: "#fcf9f6",
    lightest_transparent: "rgba(248,239,229, 0.75)",
    grey_dark: "#3f3a36",
    grey_light: "#A6B0B5",
    grey_shadow: "rgba(102, 102, 102, 0.3)",
    blue: "rgba(74, 105, 189, 1.0)",
    blue_transparent: "rgba(74, 105, 189, 0.3)",
    bottleGreen: "rgba(56, 173, 169,1.0)",
    bottleGreen_transparent: "rgba(56, 173, 169, 0.3)",
    green: "#78e08f",
  },
  typography: {
    fontFamily: `'Noto Sans TC', sans-serif`,
  }
};

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    );
  }
}

export default App;
