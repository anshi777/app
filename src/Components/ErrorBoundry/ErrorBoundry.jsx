import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="d-flex flex-column justify-content-center align-items-center text-white vh-100 bg-danger">
          <div className="alert alert-danger text-center">
            <h4 className="alert-heading">Something went wrong!</h4>
            <h1 className="display-1 fw-bold">404</h1>
            <h2 className="mt-3">Page not found</h2>
            <p className="mt-3">
              Sorry, we couldn't find the page you're looking for.
            </p>
            <div className="mt-4 d-flex gap-3">
              <a href="/" className="btn btn-light fw-bold">
                Go back home
              </a>
              <a href="signup" className="btn btn-outline-light fw-bold">
                Contact support →
              </a>
            </div>
          </div>

          {this.state.error && (
            <div className="mt-3 bg-white text-danger p-3 rounded shadow-lg">
              <p className="fw-bold">Error Details:</p>
              <p>{this.state.error?.message}</p>
              <details>
                <summary className="fw-bold">Click for more details</summary>
                <p className="mt-1">{this.state.errorInfo?.componentStack}</p>
              </details>
            </div>
          )}
        </main>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
