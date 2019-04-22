import React, { Component } from "react";

// bring in Firestore Component with DB connectivity
import firestore from "./Firestore";


class Users extends Component {
	constructor(props) {
		super(props);

		this.state = {
			users: []
		};

	}

	componentDidMount() {
		firestore.firestore().collection("users").get().then((querySnapshot) => {
		  querySnapshot.forEach((doc) => {
		  	// console.log(doc.id);
		    // console.log(doc.data());
		    this.setState({
		    	users: this.state.users.concat(Object.assign(doc.data(),{id: doc.id}))
		    })
		    // console.log(this.state.users);
		  });
		});
	}

  render() {
    return (
    	<div>
	    	{this.state.users.map((usr, index) => (
	        <p key={usr.id}>{usr.id}: {usr.username}</p>
	      ))}
      </div>
    );
  }
}




export default Users	;







