import React from 'react';

export default class Counter extends React.Component {
	state = {
		counter: 0,
		
		msg: 'hello',
		
		user: {
			firstName: 'Yariv',
			lastName: 'Katz'
		}
	}
	
	incCounter = () => {
		// this.state.counter++
		
		// this === undefined
		// error
		this.setState({
			counter: this.state.counter + 1
		})	
	}
	
	render() {
		return (
			<>
				<h1>{this.state.counter}</h1>
				<button onClick={this.incCounter}>
					Increment
				</button>
			</>
		)
	}
}