/**
 * Create a Redux store
 */
 
const store = RTK.configureStore({
	reducer: window.reducer
})

console.log(`our state is: ${JSON.stringify(store.getState())}`);

// this will run a callback when the data changed
store.subscribe(() => {
	console.log(
		JSON.stringify(store.getState())
	);
	
	document.getElementById('display-name').innerText = store.getState().user.firstName
});

window.store = store;