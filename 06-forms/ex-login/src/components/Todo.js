/**
<Todo token={jwtToken} />
 */

import React, { useContext, useEffect, useState } from 'react';
import JwtContext from '../contexts/jwt.context';
import useTodo from '../hooks/todo.hook';

export default function Todo() {
	const {token} = useContext(JwtContext);
	const todos = useTodo(token);
	
	return (
		<ul className="list-group">
			{
				todos.map((todo) => {
					return (
						<li key={todo.id} className="list-group-item">
							<h1>
								{todo.title} 
							</h1>
							<p>
								{todo.description} 
							</p>
						</li>
					)
				})
			}
		</ul>
	)
}