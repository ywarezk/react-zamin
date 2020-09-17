import React, {useState} from 'react';
import './App.css';
import Hello from './components/Hello/Hello';
import HelloClass from './components/Hello/HelloClass';
import Counter from './components/Counter/Counter';
import Countdown from './components/Countdown/Countdown';

function App() {
	// [true, setState]
	const [isCountdownVisible, setIsCountdownVisible] = useState(true);
	
	const childClicked = (msg) => {
		console.log('somebody clicked a button in the child');
	}
	
	return (
		<div className="App">
			<Hello name={'Yariv'} clickCb={childClicked} />
			
			<HelloClass name="Haim" />
			
			<Counter />
			
			{/* if isCountdownVisible is true display the Countdown component */}
			{
				/*isCountdownVisible && <Countdown destroyCb={setIsCountdownVisible} /> */
			}
			
			{
				/*(function() {
					
					if (isCountdownVisible === true) {
						return <Countdown countdown={4} destroyCb={setIsCountdownVisible} />
					} else {
						return null
					}
					
				})()*/
			}
			
			{
				isCountdownVisible && <Countdown countdown={3} destroyCb={setIsCountdownVisible} />
			}
			
			
		</div>
	);
}


export default App;
