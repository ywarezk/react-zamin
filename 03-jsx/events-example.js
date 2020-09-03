
const handleClick = (event, msg) => {
	console.log('button clicked');
}


const button = (
	<button onClick={(event) => handleClick(event, 'hello')} >click me</button>
)