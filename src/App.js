import React from "react";
import Button from "./components/button";
import "./App.css";

class App extends React.Component {
  state = {
    count: 0
  };

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrementCount = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    let { count } = this.state;
    return (
      <div className="App-header">
        <h2>Count: {count}</h2>
        <Button title={"+"} task={() => this.incrementCount()} />
        <Button title={"-"} task={() => this.decrementCount()} />
      </div>
    );
  }
}
export default App;
