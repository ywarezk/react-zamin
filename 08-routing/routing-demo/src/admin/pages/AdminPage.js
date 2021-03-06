import React from 'react';
import { useHistory } from 'react-router-dom';

export default function AdminPage() {
	const history = useHistory()
	
	const navigateToAdmin = () => {
		history.push('/');
	}
	
	return (
		<>
			<h1>
				I 'm in the admin page {process.env.REACT_APP_SOMETHING}
			</h1>
			<button onClick={navigateToAdmin}>
				go to admin page
			</button>
		</>
	)
}