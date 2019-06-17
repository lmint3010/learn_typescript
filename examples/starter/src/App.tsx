import React from "react";

// Components
import Greeting from "./components/Greeting";

// Stateful component with TypeScript
export default class App extends React.Component {
  render() {
    return <Greeting name="Thong" enthusiasmLevel={10} />;
  }
}
