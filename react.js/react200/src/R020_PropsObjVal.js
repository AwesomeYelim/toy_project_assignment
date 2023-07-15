import React, { Component } from "react";
import datatype from "prop-types";

class R020_PropsObjVal extends Component {
  render() {
    let { Object_Json } = this.props;
    return (
      <div style={{padding: '0px'}}>
        {JSON.stringify(Object_Json)}
      </div>
    )
  }
}

R020_PropsObjVal.propsTypes = {
  Object_Json: datatype.shape({ 
    react: datatype.string,
    twohundred: datatype.number
  })
}


export default R020_PropsObjVal;
