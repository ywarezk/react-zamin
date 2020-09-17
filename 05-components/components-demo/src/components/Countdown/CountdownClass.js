import React from 'react';
import { func, number } from 'prop-types';

/**
 interface ICountdownProps {
	 destroyCb: () => void;
	 countdown: number
 }
 
 interface IState {
	 countdown: number
 }
 */


// { condition && <Countdown destroyCb={} countdown={3} />}
// export default class Countdown extends React.Component<ICountdownProps, IState> {}
export default class Countdown extends React.Component {
	static propTypes = {
		destroyCb: func.isRequired,
		countdown: number
	}
	
	static defaultProps = {
		countdown: 5
	}
	
	// state = {
	// 	countdown: 5
	// }
	
	constructor(props) {
		super(props);
		
		// anti pattern
		this.state = {
			countdown: props.countdown,
			seventeenProps: {
				
			}
		}
	}
	
	// how many times will it run? on init and every update
	// what do I place in it? if props change change the state according to the props change
	// static getDerivedStateFromProps(props, state) {
	// 	// if (!state.countdown) {
	// 		// return {
	// 		// 	countdown: props.countdown
	// 		// }	
	// 	// }
	// }
	
	
	
	// how many times will it run? will run once
	// when will it run? on init
	// what do I place in it? complex initialization, 
	componentDidMount() {
		this.intervalId = setInterval(() => {
			this.setState({
				countdown: this.state.countdown - 1
			});
		}, 1000);
	}
	
	componentWillUnmount() {
		clearInterval(this.intervalId);
	}
	
	
	
	decrementCountdown = () => {
		this.setState({
			countdown: this.state.countdown - 1
		});
	}
	
	// 
	componentDidUpdate(prevProps, prevState) {
		if (this.state.countdown === 0) {
			this.props.destroyCb(false);
		}
		
		if (prevProps.countdown !== this.props.countdown) {
			this.setState({
				countdown: this.props.countdown
			});
		}
	}
	
	render() {
		return (
			<>
				<h1>
					{this.state.countdown}
				</h1>
				<button onClick={this.decrementCountdown}>
					decrement countdown
				</button>
			</>
		)
	}
}