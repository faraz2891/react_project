import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log("Counters - rendered");
    const {
      onReset,
      counters,
      onIncrement,
      onDelete,
      onDecrement
    } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
            key={counter.id}
            counters={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
