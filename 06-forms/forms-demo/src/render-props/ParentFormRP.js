/**
	<Login />
	
	
	

 */
 
import React from 'react';

export default class ParentFormRP extends React.Component {
	constructor(props) {
		super(props);
		this.state = props.initialState;
	}
	
	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	
	render() {
		return this.props.children(this.handleChange, this.state);
	}
}