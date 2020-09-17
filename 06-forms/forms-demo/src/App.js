import React from 'react';
import './App.css';
// import NameForm from './components/NameForm/NameFormClass';
// import NameFormFunc from './components/NameForm/NameForm';
// import NameForm from './components/NameFormUncontrolled/NameFormClass';
import Login from './components/Login/LoginClass';

function App() {
  return (
    <div className="App">
		  <Login title="Login Form" url="https://nztodo..." description="asdfasdf" />
    </div>
  );
}

export default App;
