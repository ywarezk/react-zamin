
/**
 * @returns {Promise<number>}
 */
async function sendRequestToServer() {
	// response: Response     // fetch: Promise<Response>
	const response = await fetch('https://...');
	
	// Response.json: () => Promise<any>
	const todo = await response.json();
	return 42;
}

// sendRequestToServer().then(() => {
	
// })