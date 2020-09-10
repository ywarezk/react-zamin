/**
 * complete this file to create the following components
 */
 
 
function Button() {
	const handleClick = () => {
		alert('hello world');
	}
	
	return (
		<button onClick={handleClick}>
			Click me
		</button>
	)
}

function WinLoose() {
	const randomNumber = Math.random(); // 0-1
	
	return (
		<h1>
			{
				randomNumber > 0.5 ? 'Win' : 'Lose'
			}
		</h1>
	)
}

function TodoList() {
	const todo = [
		'Walk Piglet and Sweetness',
		'Play with Piglet and Sweetness',
		'Feed Piglet and Sweetness',
	]
	
	return (
		<ul>
			{
				todo.map((todoStr, index) => {
					return (
						<li key={index}>
							{
								todoStr
							}
						</li>
					)
				})
			}
		</ul>
	)
}


function App() {
	return (
		<div>
			<Button />
			<WinLoose />
			<TodoList />
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));