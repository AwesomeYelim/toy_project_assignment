import React, { Component } from "react";
import cookie from "react-cookies";

class R085_cookieSave extends Component {
  componentDidMount() {
    const expires = new Date();
    expires.setMinutes(expires.getMinutes() + 60);
    cookie.save("userid", "react200", {
      path: "/",
      expires,
      // secure: true,
      // httpOnly: true,
    });
  }

  render() {
    return (
      <>
        <h3>react-cookies Save</h3>
      </>
    );
  }
}

export default R085_cookieSave;
