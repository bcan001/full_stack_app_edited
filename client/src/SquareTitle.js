import React, { Component } from "react";


class SquareTitle extends Component {

  //THIS IS ONLY CALLED IF THE PROPS OF A PARENT CHANGE, CAUSING THE PROPS OF THE CHILD (THIS COMPONENT) TO UPDATE
  componentWillReceiveProps(newProps) {
    console.log("componentWillReceiveProps");
    console.log(newProps);
  }

  shouldComponentUpdate(newProps, newState) {
    // don't update this component because it does not change in this component
    return false;
  }


  render() {
    return (
    	<div>{this.props.squareTitle}</div>
    );
  }
}

export default SquareTitle	;

