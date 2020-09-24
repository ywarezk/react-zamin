import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Todo from './components/Todo';

function App() {
	const [token, setToken] = useState(null);
	
	// const handleTokenCb = (token) => {
	// 	setToken(token);
	// }
	
	return (
		<div className="App">
			<div className="container mt-5">
				<div className="row justify-content-center">
					<div className="col-6">
						<Login tokenCb={setToken} />
					</div>
				</div>
				
				<div className="row justify-content-center">
					<div className="col-6">
						<Todo token={token} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
