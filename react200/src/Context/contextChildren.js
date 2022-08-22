import React from "react";
import Children2 from "./contextChildren2"

const {Provider, Consumer} = React.createContext()
export {Consumer}

class contextChildren extends React.Component {
  
  render() {
    return (
     <Provider value='React200'>
      <Children2 />
     </Provider>
    );
  }
}

export default contextChildren;
