import React from 'react';
import './App.css';
// import NameForm from './components/NameForm/NameFormClass';
import NameForm from './components/NameForm/NameFormFinal';
// import NameForm from './components/NameFormUncontrolled/NameFormClass';
// import Login from './components/Login/LoginClass';

function App() {
  return (
    <div className="App">
		  {/* <Login title="Login Form" url="https://nztodo..." description="asdfasdf" /> */}
		<div className="container mt-5">
			<div className="row justify-content-center">
				<div className="col-6">
					< NameForm / >
				</div>
			</div>
		</div>
		
    </div>
  );
}

export default App;
