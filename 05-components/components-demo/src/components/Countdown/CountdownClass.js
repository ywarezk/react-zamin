import React from 'react';

export default class Countdown extends React.Component {
	state = {
		countdown: 5
	}
	
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
	
	componentDidUpdate() {
		if (this.state.countdown === 0) {
			this.props.destroyCb(false);
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