import React, { Component } from "react";

// export default class Button extends Component {
//   render() {
//     return <button className="text-white text-lg bg-stone-800 rounded-md p-2">{this.props.label}</button>;
//   }
// }

class Button extends Component {
  render() {
    return (
      <button className="text-white text-lg bg-stone-800 rounded-md p-2">
        {this.props.label}
      </button>
    );
  }
}

class Button2 extends Component {
  render() {
    return (
      <button className="text-white text-lg bg-stone-800 rounded-md p-2">
        {this.props.label}
      </button>
    );
  }
}

export { Button, Button2 };
