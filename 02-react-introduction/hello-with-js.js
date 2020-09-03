
// <h1>hello world with js</h1>
const h1 = document.createElement('h1');
h1.innerText = 'Hello world with js';

h1.innerHtml = `
	<h1>
		${Math.random()}
	</h1>
`
const container = document.getElementById('container');
container.appendChild(h1);
