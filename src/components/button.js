import React from "react";

export default class Button extends React.Component {
  render() {
    let { title, task } = this.props;
    return <button onClick={task}>{title}</button>;
  }
}
