import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  state = {
    counters: [
      { id: 0, value: 0 },
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 5, value: 2 }
    ],
    // count:0
  };
  render() {
    return (
      <div style={{ display: "block" }}>
        {/* <Counter />
        <Counter />
        <Counter />
        <Counter />
        <Counter /> */}
        {this.state.counters.map(couter => (
          <Counter onClick={this.props.onDelete} key={couter.id} value={couter.value} />
        ))}
      </div>
      // <h1>Hello? </h1>
    );
  }
  
}

export default Counters;
