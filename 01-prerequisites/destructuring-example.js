// destructuring pull from array/object to variable 

const myNum = [10, 100];

const [ten, oneHundered] = myNum

// const oneHundered = myNum[1]

const a= {
	hello: 'world',
	foo: 'bar'
}

const { hello, foo } = a;

// spread operator

const b = {...a, stam: 'hello', foo: 'Yariv'};

const newArray = [...myNum, 200, 1000];