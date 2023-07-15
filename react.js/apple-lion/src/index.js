import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import clayful from "clayful/client-js";
import axios from "axios";
import "./css/auth.css";

clayful.config({
  client:
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjBkZTBlMGFhNDU1MzZhNzFkOTZlMGU1NDQwZWJmMDkwZDUzNDVjMWQyZTdkMWQzOGYwMWFjZGZiYzlhNmEzN2EiLCJyb2xlIjoiY2xpZW50IiwiaWF0IjoxNjQxMDY5ODI4LCJzdG9yZSI6IkJVTFpRQzRENEg5WS5HOEtNWlVSNkJaTjgiLCJzdWIiOiJUS0JQTExVREJTRUUifQ.yvSdhxGsmmDFkKTjYz_evG3tQOBf5z45oj10t06vuoM",
});

clayful.install("request", require("clayful/plugins/request-axios")(axios));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
