

// jsx
// const p = <h1><span><u>Hello world with React with underline</u></span></h1>

// h1: ReactElement
// const h1 = React.createElement(
// 	'h1', 
// 	null, 
// 	React.createElement(
// 		'span', 
// 		null, 
// 		React.createElement(
// 			'u', 
// 			null, 'Hello world with React with underline'
// 		)
// 	)
// )

// const h1 = (
// 	<h1>
// 		<span>
// 			<u>Hello world with React with underline + JSX</u>
// 		</span>
// 	</h1>
// )

// component
// component is a part of our ui
function Hello() {
	return (
		<h1>
			<span>
				<u>Hello world with React with underline + JSX</u>
			</span>
		</h1>
	)
}

function App() {
	return (
		<div className="container">
			<Hello />
			<p>
				created with React
			</p>
		</div>
	)
}

// const div = (
// 	<div>
// 		<Hello />
// 	</div>
// )



// const brother = React.createElement()


// 'Hello world with React'
const container = document.getElementById('container');
ReactDOM.render(<App />, container);