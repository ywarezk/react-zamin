
import React, {useState, useEffect} from 'react';
// import { FC } from 'react';
import { func, number } from 'prop-types';

// <Countdown destroyCb={} countdown={3} />
// const Countdown: FC<CountdownProps> = () => { ...}
export default function Countdown({ destroyCb, countdown }) {
	const [ countdownState, setCountdownState ] = useState(countdown);
	
	const decrementCountdown = () => {
		setCountdownState(countdownState - 1);
	}
	
	// the function will run after each render
	// componentDidMount + componentDidUpdate
	// componentWillUnmount + componentDidUpdateUnmount
	useEffect(() => {
		const intervalId = setInterval(() => {
			setCountdownState((updatedCountdown) => {
				return updatedCountdown - 1;
			});
		}, 1000);
		
		return function cleanup() {
			clearInterval(intervalId);
		}
		
		// setTimeout(() => {
		// 	setCountdownState((updatedCountdown) => {
		// 		return updatedCountdown - 1;
		// 	});
		// }, 1000)
		
		
	});
	// [...]
	
	useEffect(() => {
		if (countdownState === 0) {
			destroyCb(false)
		}
	// props, countdownStatePrev === countdownStateNow
	}, [countdownState]);
	
	useEffect(() => {
		setCountdownState(countdown);
	}, [countdown])
	
	return (
		<>
			<h1>
				{countdownState}
			</h1>
			<button onClick={decrementCountdown}>
				decrement countdown
			</button>
		</>
	)
}

Countdown.propTypes = {
	destroyCb: func.isRequired,
	countdown: number
}

Countdown.defaultProps = {
	countdown: 5
}