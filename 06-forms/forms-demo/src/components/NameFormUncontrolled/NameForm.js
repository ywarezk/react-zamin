import React, { createRef, useRef } from 'react';

export default function NameForm() {
	// {current: HtmlInputElement}
	const firstNameInput = useRef();
	
	const handleSubmit = (event) => {
		console.log(firstNameInput.current.value);
		event.preventDefault();
	}
	
	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="name">Name</label>
			<input
				ref={firstNameInput}
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