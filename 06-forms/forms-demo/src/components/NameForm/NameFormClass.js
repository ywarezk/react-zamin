/**
class component
with a form
contains input to enter the name
binding - catch what the user typed in the input
 */
 
// controlled form

 
import React from 'react';

export default class NameForm extends React.Component {
	state = {
		firstName: '',
		lastName: ''
	}
	
	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	
	// handleFirstNameChange = (event) => {
	// 	this.setState({
	// 		firstName: event.target.value
	// 	});
	// }
	
	// handleLastNameChange = (event) => {
	// 	this.setState({
	// 		lastName: event.target.value
	// 	});
	// }
	
	handleSubmit = (event) => {
		console.log(this.state);
		event.preventDefault();
	}
	
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label htmlFor="firstName">First Name</label>
				<input 
					value={this.state.firstName}
					onChange={this.handleChange}
					id="firstName"
					type="text" 
					name="firstName"
					placeholder="Enter your first name" 
				/>
				<label htmlFor="lastName">Last Name</label>
				<input
					value={this.state.lastName}
					onChange={this.handleChange}
					id="lastName"
					type="text"
					name="lastName"
					placeholder="Enter your last name"
				/>
				<button type="submit">
					Submit
				</button>
			</form>
		)
	}
}