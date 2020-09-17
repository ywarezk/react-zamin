import React, { useState } from 'react';

export default function NameForm() {
	const [nameValue, setNameValue] = useState('yariv');
	
	// user: {firstName: 'Yariv', lastName: 'Katz'}
	// const [user, setUser] = useState({
	// 	firstName: 'Yariv',
	// 	lastName: 'Katz'
	// })
	
	const handleNameChange = (event) => {
		setNameValue(event.target.value);
	}
	
	const handleSubmit = (event) => {
		console.log(nameValue);
		event.preventDefault();
	}
	
	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="name">Name</label>
			<input
				value={nameValue}
				onChange={handleNameChange}
				id="name"
				type="text"
				name="userName"
				placeholder="Enter your name"
			/>
			<button type="submit">
				Submit
				</button>
		</form>
	)
}