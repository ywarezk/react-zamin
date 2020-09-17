/**
class component
with a form
contains input to enter the name
binding - catch what the user typed in the input
 */
 
// uncontrolled

 
import React, {createRef} from 'react';

export default class NameForm extends React.Component {
	constructor(props) {
		super(props);
		
		// { current: HtmlInputElement }
		this.firstNameInput /*: RefObject<HtmlInputElement>*/ = createRef();
		this.lastNameInput = createRef();
		
	}
	
	handleSubmit = (event) => {
		console.log(this.firstNameInput.current.value);
		console.log(this.lastNameInput.current.value);
		event.preventDefault();
	}
	
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label htmlFor="firstName">First Name</label>
				<input 	
					ref={this.firstNameInput}				
					id="firstName"
					type="text" 
					name="firstName"
					placeholder="Enter your first name" 
				/>
				<label htmlFor="lastName">Last Name</label>
				<input	
					ref={this.lastNameInput}				
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