import React, {useContext} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import JwtContext from '../contexts/jwt.context';

const loginFormSchema = Yup.object().shape({
	email: Yup.string()
		.min(2, 'Enter more characters')
		.max(100, 'Too long')
		.required('This field is required')		
		.email('Invalid email format'),	
	password: Yup.string()
		.min(2, 'Enter more characters')
		.max(100, 'Too long')
		.required('This field is required')
})

export default function Login() {
	const {setToken} = useContext(JwtContext);
	
	const handleSubmit = async (values) => {
		console.log(values);
		
		const response = await fetch(
			'https://academeez-login-ex.herokuapp.com/api/users/login',
			{
				method: 'POST',
				body: JSON.stringify(values),
				headers: {
					'Content-Type': 'application/json'
				}
			}
		)
		const json = await response.json();
		const token = json.token;
		setToken(token);
	}
	
	return (
		<Formik  
			initialValues={ {email: '', password: ''} } 
			onSubmit={handleSubmit}
			validationSchema={loginFormSchema}
		>
			<Form>
				<div className="form-group">
					<label>
						Enter your email:
					</label>
					<Field 
						type="email" 
						name="email"
						className="form-control"
						placeholder="Enter your email..." />
					<ErrorMessage component="div" name="email" className="alert alert-danger" />
				</div>
				<div className="form-group">
					<label>
						Enter your password:
					</label>
					<Field 
						type="password" 
						name="password"
						className="form-control"
						placeholder="Enter your password..." />
					<ErrorMessage component="div" name="password" className="alert alert-danger" />
				</div>
				<div className="form-group">
					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</div>
			</Form>
		</Formik>
	)
	
	
	
}