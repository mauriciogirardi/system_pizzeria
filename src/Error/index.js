import { PureComponent } from "react";

class ErrorBoundary extends PureComponent {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("error:", error.message);
    console.log("info:", info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return <h1> Ocorreu um Error! </h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
