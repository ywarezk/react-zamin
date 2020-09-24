import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Todo from './components/Todo';
import JwtContext from './contexts/jwt.context';

function App() {
	const [token, setToken] = useState(null);
	
	// const handleTokenCb = (token) => {
	// 	setToken(token);
	// }
	
	return (
		<div className="App">
			<div className="container mt-5">
				<JwtContext.Provider value={{token, setToken}}>
					<div className="row justify-content-center">
						<div className="col-6">
							<Login />
						</div>
					</div>
					
					<div className="row justify-content-center">
						<div className="col-6">
							<Todo />
						</div>
					</div>
				</JwtContext.Provider>
			</div>
		</div>
	);
}

export default App;
