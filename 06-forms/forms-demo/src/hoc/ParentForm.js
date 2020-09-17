import React from 'react';

// hoc - higher order component
// composition

export default function createParentForm(initialState) {
	
	return function(ChildForm) {
		
		return class ParentForm extends React.Component {
			state = initialState
			
			handleChange = (event) => {
				this.setState({
					[event.target.name]: event.target.value
				})
			}

			render() {
				return <ChildForm 
					{...this.props} 
					
					changeCb={this.handleChange} 
					values={this.state} 
				/>
			}
		}	
		
	}
	
	
	
}