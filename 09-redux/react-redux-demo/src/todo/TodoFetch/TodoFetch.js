import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchTasks } from '../todo.slice';

export function TodoFetch() {
	const dispatch = useDispatch();
	
	const getAllTasks = () => {
		dispatch( fetchTasks() );
	}
	
	return (
		<button onClick={ getAllTasks }>
			Refresh tasks from server
		</button>
	)
}