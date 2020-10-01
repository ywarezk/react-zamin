import React from 'react';
import { RecieveMessage, SendMessage } from '../../chat';
import { TodoFetch, TodoList } from '../../todo';
import './App.css';

function App() {
  return (
    <div className="App">
		<SendMessage />
		
		<RecieveMessage />
		
		<TodoFetch />
		
		<TodoList />
    </div>
  );
}

export default App;
