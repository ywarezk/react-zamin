import React from 'react';

// props => { name: 'Yariv', clickCb: () => ...  }
export default function Hello(props) {
	return (
		<>
			<h1>
				Hello world {props.name}
			</h1>
			<button onClick={() => props.clickCb('hello')}>
				click me
			</button>
		</>
		
	)
}