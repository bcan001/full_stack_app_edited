import React, { Component } from "react";
import SquareTitle from './SquareTitle';

class Square extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
			squareTitle: 'THIS IS A COUNTING SQUARE!'
		};

		this.increase = this.increase.bind(this);
	}

	increase(e) {
		this.setState({
			count: this.state.count + 1
		})
	}

 
  // -------------------------------------------------------------------------------

	// ALL LIFECYCLE METHOD EXAMPLES:
	//========== ON INITIAL RENDER ==========
	// 1. defaultProps : (called outside scope of component.) : ex. Square.defaultProps = {count: 1}
	// 2. this.state (called within the constructor)
	// 3. 
	componentWillMount() {
		// console.log(this.state.count)
		// console.log(this.props.cardClickCount)
	}
	// 4. render() function is called
	// 5.
	componentDidMount() {
	}


	//========== ON STATE CHANGE ==========
	// 1.
	shouldComponentUpdate(newProps, newState) {
		console.log("shouldComponentUpdate");
		console.log(newProps);
		console.log(newState);
		if (this.state.count < 5) {
			return true
		} else {
			return false
		}
	}
	// 2. 
	componentWillUpdate(newProps, newState) {
		// can't call setState within this function
		console.log("componentWillUpdate");
		console.log(newProps);
		console.log(newState);
	}
	// 3. render() function is called
	// 4.
	componentDidUpdate(prevProps, prevState) {
		console.log("componentDidUpdate");
		console.log(prevProps);
		console.log(prevState);
	}



	//========== ON PROPS CHANGE ==========
	// 1.
	componentWillReceiveProps(newProps) {
		// console.log("componentWillReceiveProps");
		// console.log(newProps);
		// Props can change when a component's parent renders the component again with different properties. I think this is mostly an optimization so that no new component needs to be instantiated. SEE TITLE COMPONENT FOR BETTER EXAMPLE
	}
	// Rest of props change has same lifecycle method order as 'ON STATE CHANGE'



	//========== ON COMPONENT UNMOUNT ==========
	// 1.
	componentWillUnmount() {
		// when component will be removed from dom. RARELY USED
	}




  // -------------------------------------------------------------------------------




  render() {
  	var squareStyle = {
  		height: 250,
  		width: 250,
  		padding: 0,
  		backgroundColor: 'red'
  	}
    return (
    	<div style={squareStyle}>
    		<SquareTitle squareTitle={this.state.squareTitle}/>
    		<p>{this.props.cardClickCount}</p>
    		<h1>{this.state.count}</h1>
    		<button onClick={this.increase}>Increase Count +</button>
    	</div>
    );
  }
}

export default Square	;






