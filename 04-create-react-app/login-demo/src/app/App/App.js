import React from 'react';
import './App.css';
import { Footer } from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../../auth/Login/Login';

function App() {
  return (
    <div className="App">
		<Header />
		
		<div className="container-fluid h-100">
			<div className="row h-100">
				<div className="col-12 d-flex flex-column justify-content-between">
					<div className="d-flex justify-content-center">
						<div className="col-6">
							<Login />
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<Footer />
    </div>
  );
}

export default App;
