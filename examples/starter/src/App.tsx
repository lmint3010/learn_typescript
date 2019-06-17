import React from "react";
import { IProps } from "./models/HelloProps";
// Components
import Greeting from "./components/Greeting";

interface IState {
  currentEnthusiasm: number;
}

// Stateful component with TypeScript
export default class App extends React.Component<IProps, IState> {
  state = {
    currentEnthusiasm: this.props.enthusiasmLevel || 1,
  };

  // Update enthusiasm state value
  updateEnthusiasm = (currentEnthusiasm: number) => {
    this.setState({ currentEnthusiasm })
  }

  // Handle Functions
  _onIncrease = this.updateEnthusiasm(this.state.currentEnthusiasm + 1);
  _onDecrease = this.updateEnthusiasm(this.state.currentEnthusiasm - 1);

  render() {
    const { currentEnthusiasm } = this.state;
    return <Greeting name="Thong" enthusiasmLevel={currentEnthusiasm} />;
  }
}
