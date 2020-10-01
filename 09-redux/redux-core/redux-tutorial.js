console.log('hello world');

document.getElementById('change-name').addEventListener('click', () => {
	// we want to send an action that will change the state
	
	
	// store.dispatch( { type: '...' } ) // this will trigger a data change
	
	store.dispatch( setFirstName('Pigletshvily ' + Math.random()) );
})