import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
      message : "",
    };
  }

  // Catch Error
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
    render() {
        if (this.state.hasError) return <h1>product Id Not Found </h1>;
        return this.props.children;
  }
}
