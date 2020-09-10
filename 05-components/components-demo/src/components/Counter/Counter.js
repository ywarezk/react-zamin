import React, { useState } from 'react';

export default function Counter() {
	// [1, setCounter]
	const counterArray = useState(0);
	const counter = counterArray[0];
	const setCounter = counterArray[1];
	
	const [msg, setMsg] = useState('hello');
	
	const [user, setUser] = useState({
		firstName: 'Yariv',
		lastName: 'Katz'
	});
	
	const incCounter = () => {
		setCounter(counter + 1);
		
		setMsg(`the counter was clicked ${counter + 1} times`)
	}
	
	return (
		<>
			<h1>{counter}</h1>
			<button onClick={incCounter}>
				Increment
			</button>
		</>
	)
}