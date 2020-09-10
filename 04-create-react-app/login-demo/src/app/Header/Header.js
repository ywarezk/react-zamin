import React from 'react';
import './Header.scss';
import logo from './logo.png';

export default function Header() {
	return (
		<header className="nerdeez-header">
			<div className="container-fluid">
				<div className="row">
					<div className="col-3">
						<img src={logo} />
					</div>
					<div className="col-9">
						<nav>
							<h1 className="text-white">
								Hello Guest
							</h1>
						</nav>
					</div>
				</div>
			</div>	
		</header>
	)
}