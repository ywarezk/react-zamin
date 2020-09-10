import React from 'react';

export default class Hello extends React.Component {
	render() {
		// {name: 'Haim'}
		// this.props;
		
		return (
			<h1>
				Hello {this.props.name} world from class 
			</h1>
		)
	}
}