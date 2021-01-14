import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/Landing/LandingPage";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const THEME = createMuiTheme({
  typography: {
    fontFamily: `"Oswald", sans-serif;`,
    fontSize: 14,
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={THEME}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={LandingPage} />
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
