import React, { Component } from "react";
import Square from './Square';

class Card extends Component {
	constructor(props) {
		super(props);

		this.state = {
			cardClickCount: 9999
		};

	}

  render() {
  	var cardStyle = {
  		height: 700,
  		width: 600,
  		padding: 0,
  		backgroundColor: 'grey'
  	}
    return (
    	<div style={cardStyle}>
    		<Square cardClickCount={this.state.cardClickCount}/>
    	</div>
    );
  }
}

export default Card	;


