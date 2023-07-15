import React, { Component } from "react";

class R070_onMouseOut extends Component {
  onMouseOut(tag) {
    console.log("TAG : " + tag);
  }

  render() {
    return (
      <>
        <div onMouseOut={e => this.onMouseOut("div")}>
          <h3>DIV onMouseOut</h3>
        </div>
        <input type="text" onMouseOut={e => this.onMouseOut("input")}/>
        <select onMouseOut={e => this.onMouseOut("select")}>
          <option value="react">react</option>
          <option value="200">200</option>
        </select>
      </>
    );
  }
}

export default R070_onMouseOut;
