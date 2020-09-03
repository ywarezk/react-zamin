/**
put js expressions inside our jsx
 */
 
const randomNumber = Math.random();
 
const p = <p>{ randomNumber }</p>
const p1 = <p>{Math.random()}</p>

// this apply between the regular html tags
// the expressions should return one of the following:
// - number
// - string
// - boolean
// - null / undefined
// - ReactElement
// - array

const p2 = <p>{
	[10, 'hello', true, null, p]
}</p>

// <p style="background-color: red; color: blue">
const p = <p id={Math.random().toString()} style={ {backgroundColor: 'red', color: 'red'} }> </p>