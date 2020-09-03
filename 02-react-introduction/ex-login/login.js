/**
 * complete this file to create the login page
 * you can use bootstrap css classes to design the page
 * in react class turns to className
 */
 
function Header() {
	return (
		<header>
			<nav>
				<h1>
					this is the header
				</h1>
			</nav>
		</header>
	)
}

function Login() {
	return (
		<form>
			<div className="form-group">
				<label htmlFor="id" >Email</label>
				<input id="email" type="email" className="form-control" />
			</div>
			<div className="form-group">
				<label>Password</label>
				<input type="password" className="form-control" />
			</div>
			<div className="form-group">
				<button type="submit" className="btn btn-primary">
					Login
				</button>
			</div>
		</form>
	)
}
 
function Footer() {
	return (
		<footer>
			<h1>
				I'm the footer
			</h1>
		</footer>
	)
}
 
function App() {
	return (
		<div className="container-fluid h-100">
			<div className="row h-100">
				<div className="col-12 d-flex flex-column justify-content-between">
				
					<Header />
					
					<div className="d-flex justify-content-center">
						<div className="col-6">
							<Login />
						</div>
					</div>
					
					<Footer />
				
				</div>
			</div>
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));