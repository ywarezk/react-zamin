
const handleClick = (event, msg) => {
	console.log('button clicked');
}

// onclick => onClick
// background-color => backgroundColor
// 
const button = (
	<button onClick={(event) => handleClick(event, 'hello')} >click me</button>
)