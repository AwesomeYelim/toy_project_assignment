import React from "react";
import StrAddButton from "./StrAddButton"

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <span>{this.props.store.getState().data.str}</span><br/>
      <StrAddButton store={this.props.store}/>
    </div>
  );
}
 
export default App;
