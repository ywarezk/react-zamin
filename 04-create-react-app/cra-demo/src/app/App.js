import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Child from './components/Child';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="App">
		<h1>
			hello from app
		</h1>	
		
		  <Button color="primary">Click me</Button>
		
		{/* <img src="logo192.png" /> */}
		{/* <img src={logo} /> */}
		
		<Child />
    </div>
  );
}

export default App;
