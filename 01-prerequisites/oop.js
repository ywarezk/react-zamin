class Person {
	age = 42;
	// #_somethingprivate = 'something private';
	
	static hello() {
		
	}
	
	constructor(name) {
		this.name = name;
	}
	
	sayHello() {
		console.log(this.name);
	}
	
	sayHello1 = () => {
		console.log(this.name);
	}
}

const me = new Person('Yariv');
me.sayHello(); // yariv

const a = { foo: me.sayHello };
a['foo'](); // undefined


