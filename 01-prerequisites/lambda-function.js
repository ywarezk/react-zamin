"use strict"

const anonymous = function() {
	console.log(this); // window or undefined
	// this.hello = 'world';
}


const sayHello = (arg1, arg2, arg3) => {
	console.log('hello world');
	console.log(this)
}

const sayHello1 = arg1 => {
	console.log('hello world');
}

const sayHello2 = arg1 => 42


// anonymous();

// const a = {hello: anonymous}
// a['hello']()

sayHello();