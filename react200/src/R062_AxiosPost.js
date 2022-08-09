import React, { Component } from "react";
import axios from "axios";

class R062_AxiosPost extends Component {
  componentDidMount() {
    axios
      .post("http://date.jsontest.com/", {
        a: "react",
        b: 200,
      })
      .then((response) => {
        alert(response.data.date);
      });
  }

  render() {
    return <h1>axios get</h1>;
  }
}

export default R062_AxiosPost;
