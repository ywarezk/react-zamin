import { useEffect, useState } from "react";


export default function useTodo(token) {
	const [todos, setTodos] = useState([])

	useEffect(() => {
		// call the server and fetch the todo
		// when?

		if (!token) return;

		fetch('https://academeez-login-ex.herokuapp.com/api/tasks', {
				headers: {
					'Authorization': `Bearer ${token}`
				}
			})
			.then(
				(response) => {
					return response.json()
				}
			)
			.then((json) => {
				setTodos(json);
			})
	}, [token])
	
	return todos;
}