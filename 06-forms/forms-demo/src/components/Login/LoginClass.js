import React from 'react';
import createParentForm from '../../hoc/ParentForm';

// controlled

// component that wraps the login
// generic - i can use it in every component with form
// the generic component should have the handleChange

// <Login />
class Login extends React.Component {
	handleSubmit = (event) => {
		console.log(this.props.values);
		event.preventDefault();
	}
	
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<h1>{this.props.title}</h1>
				<input
					value={this.props.values.email}
					onChange={this.props.changeCb}
					type="email"
					placeholder="Enter Email..."
					name="email"
				/>
				<input
					value={this.props.values.password}
					onChange={this.props.changeCb}
					type="password"
					placeholder="Enter Password..."
					name="password"
				/>
				<button type="submit">
					Login
				</button>
			</form>
		)
		
	}
}

export default createParentForm({
	email: '',
	password: ''
})(Login)