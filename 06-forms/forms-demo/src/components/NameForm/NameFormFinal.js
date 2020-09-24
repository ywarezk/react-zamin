import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const nameFormSchema = Yup.object().shape({
	fullName: Yup.string()
		.min(2, 'Enter more characters')
		.max(100, 'Too long')
		.required('This field is required')
})

export default function NameForm() {
	const handleSubmit = (values) => {
		console.log(values);
	}
	
	return (
		<Formik  
			initialValues={ {fullName: 'Yariv'} } 
			onSubmit={handleSubmit}
			validationSchema={nameFormSchema}
		>
			<Form>
				<div className="form-group">
					<label>
						Enter your name:
					</label>
					<Field 
						type="text" 
						name="fullName"
						className="form-control"
						placeholder="Enter your name..." />
					<ErrorMessage component="div" name="fullName" className="alert alert-danger" />
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