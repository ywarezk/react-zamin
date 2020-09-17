import React from 'react';
import ParentFormRP from '../../render-props/ParentFormRP';

// controlled

// component that wraps the login
// generic - i can use it in every component with form
// the generic component should have the handleChange

// <Login />
export default class Login extends React.Component {
	handleSubmit = (event) => {
		console.log(this.props.values);
		event.preventDefault();
	}
	
	render() {
		return (
			<ParentFormRP initialState={ {email: '', password: ''} } >				
				{
					(changeCb, values) => {
						return (
							<form onSubmit={this.handleSubmit}>
								<h1>{this.props.title}</h1>
								<input
									value={values.email}
									onChange={changeCb}
									type="email"
									placeholder="Enter Email..."
									name="email"
								/>
								<input
									value={values.password}
									onChange={changeCb}
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
			</ParentFormRP>
		)
		
		
		
		
		
	}
}

