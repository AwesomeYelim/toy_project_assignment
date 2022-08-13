/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

class R066_onClick extends Component {
  
    buttonClick = (param) => {
      if(typeof param != 'string') param = 'Click a'
      console.log("parma : " + param);
    }

  render() {
    return (
    <>
    <button onClick={e => this.buttonClick("Click button")}>
      Click button
    </button>
    <div onClick={e => this.buttonClick("Click div")}>
      Click div
    </div>
    <a href="javascript: " onClick={this.buttonClick('click a')}>Click a</a>
    </>
    );
  }
}



export default R066_onClick;
