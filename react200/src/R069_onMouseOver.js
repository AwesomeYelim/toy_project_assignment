import React, { Component } from "react";

class R069_onMouseOver extends Component {
  onMouseOver(tag) {
    console.log("TAG : " + tag);
  }

  render() {
    return (
      <>
        <div onMouseOver={e => this.onMouseOver("div")}>
          <h3>DIV onMouseOver</h3>
        </div>
        <input type="text" onMouseOver={e => this.onMouseOver("input")}/>
        <select onMouseOver={e => this.onMouseOver("select")}>
          <option value="react">react</option>
          <option value="200">200</option>
        </select>
      </>
    );
  }
}

export default R069_onMouseOver;
