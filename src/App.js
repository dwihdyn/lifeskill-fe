import React from "react";
import Button from "./components/button";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  state = {
    count: 0
  };

  handleSubmitButton = event => {
    console.log(event);
    axios
      .post("http://localhost:5000/api/v1/students/update")
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log("ERROR: ", error);
      });
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
        <input
          type="submit"
          placeholder="hit breakpoint"
          onClick={this.handleSubmitButton}
        />
      </div>
    );
  }
}
export default App;
