import React, { useState } from 'react';
import useParentForm from '../../hooks/forms.hook';

export default function Login() {
	const [values, handleChange] = useParentForm({
		email: '',
		password: ''
	})
	
	return (
		<form>
			<input
				value={values.email}
				onChange={handleChange}
				type="email"
				placeholder="Enter Email..."
				name="email"
			/>
			<input
				value={values.password}
				onChange={handleChange}
				type="password"
				placeholder="Enter Password..."
				name="password"
			/>
			<button type="submit">
				Login
			</button>
		</form>
	)
}