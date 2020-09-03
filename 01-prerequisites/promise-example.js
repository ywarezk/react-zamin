/**

 ----------------------------->
 ------------0--|------------->
 ------------X---------------->
 */
 
const timerPromise = new Promise((resolve) => {
	setTimeout(() => {
		resolve('hello world');
	}, 1000)
});

timerPromise.then(
	(msg) => {
		console.log(msg);	
	}
)

timerPromise.then(
	(msg) => {
		console.log(msg);
	}
)

timerPromise.then(
	(msg) => {
		console.log(msg);
	}
)

// const itayPromise = Promise.resolve('hello itay');

// itayPromise.then(
// 	() => {
	
// 	}
// )



