/**

We are not allowed to place reserved words in JS
inside our JSX

 */

// reserved word class 
const h1 = <div class="container"></div> // Error
const h1 = <div className="container"></div> // Correct

// reserved word for
const label = <label for="some-label">some label</label> // Error
const label = <label htmlFor="some-label">some label</label> // Error