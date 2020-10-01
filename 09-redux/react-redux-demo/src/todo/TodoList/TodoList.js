import React from 'react';
import { useSelector } from 'react-redux';
import { selectors } from '../todo.slice';

export function TodoList() {
	const tasks = useSelector((state) => {
		return Object.values(state.todo.entities);
	});
	
	return (
		<ul>
			{
				tasks?.map(task => (
					<li key={task.id}>
						{
							task.title
						}
					</li>
				))
			}
		</ul>
	)
}