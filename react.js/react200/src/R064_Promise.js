import React, { Component } from "react";

class R064_Promise extends Component {
  componentDidMount() {
    new Promise((resolve) => {
      setTimeout(function () {
        resolve("react");
      }, 1500);
    })
      .then(function (result) {
        console.log(result);
        return result + 200;
      })
      .then((result) => {
        console.log(result);
      });
  }

  render() {
    return <h1>Promise</h1>;
  }
}

export default R064_Promise;
