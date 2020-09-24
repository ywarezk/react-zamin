import React, { useEffect, lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Link, useHistory, useLocation } from 'react-router-dom';
// import AdminPage from './admin/pages/AdminPage';
import QuestionPage from './questions/pages/QuestionPage';

const AdminPageLazy = lazy(function() {
	return import('./admin/pages/AdminPage');
})

function App() {
	const history = useHistory();
	const location = useLocation();
	
	useEffect(() => {
		
	}, [location])
	
	
	const navigateToAdmin = () => {
		history.push('/admin');
	}
	
  	return (
		
			<div className="App">
				<nav>
					<ul>
						<li>
							<Link to="/">
								Homepage
							</Link>
						</li>
						<li>
							<Link to="/about">
								about page
							</Link>
						</li>
						<li>
							<Link to="/admin">
								admin page
							</Link>
						</li>
					</ul>
				</nav>
			
				<Suspense fallback={<h1>loading...</h1>}>
					<Switch>
						<Route path="/" exact>
							<>
								<h1>Home page</h1>
								<button onClick={navigateToAdmin}>
									go to admin page
								</button>
							</>
						</Route>
						{/* /about/foo/bar */}
						<Route path="/about">
							<h1>About page</h1>
						</Route>
						<Route path="/admin">
							<AdminPageLazy />
						</Route>
						
						<Route path="/questions/:questionId/:questionTitle">
							<QuestionPage />
						</Route>
						
						<Route>
							<h1>404</h1>
						</Route>
					</Switch>
				</Suspense>
				
			</div>
	);
}

export default App;
