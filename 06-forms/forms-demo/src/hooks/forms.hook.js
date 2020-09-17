/**
custom hook
will take repeating form logic
and place it in a custom hook
 */

import { useState } from "react";

 
export default function useParentForm(initialState) {
	const [formState, setFormState] = useState(initialState);
	
	const handleChange = (event) => {
		setFormState({
			...formState,
			[event.target.name]: event.target.value
		})
	}
	
	return [formState, handleChange];
}