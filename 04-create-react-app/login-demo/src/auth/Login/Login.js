import React from 'react';

export default function Login() {
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