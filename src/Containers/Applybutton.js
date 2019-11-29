import React, {Component} from 'react';


class Applybutton extends Component{
  state = {
    count:0
  }

  incrementMe = () => {
    // console.log("Give likes")
    let newCount = this.state.count + 1
    this.setState({
    count: newCount
  })
}

  render(){
  return (
      <div>
    <div>
      <button onClick={this.incrementMe}> Apply: {this.state.count} </button>
    </div>
        <div>
        <button onClick={this.incrementMe}> Apply: {this.state.count} </button>
      </div>
          <div>
          <button onClick={this.incrementMe}> Apply: {this.state.count} </button>
        </div>
            <div>
            <button onClick={this.incrementMe}> Apply: {this.state.count} </button>
          </div>
      </div>
  );
}
}

export default Applybutton;



