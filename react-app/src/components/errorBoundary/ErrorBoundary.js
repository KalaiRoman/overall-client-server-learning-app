import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hashError: false,
      error: "",
    };
  }

  static getDerivedStateFromError() {
    return { hashError: true, error: error };
  }

  componentDidMount(error, isError) {
    console.log(error, "isError");
  }
  render() {
    if (this.state.hashError) {
      return (
        <div>
          <div>{this.state.error.toString()}</div>
          <h1>Somoehting Went Wrong</h1>
        </div>
      );
    }
    return this.props.children;
  }
}
