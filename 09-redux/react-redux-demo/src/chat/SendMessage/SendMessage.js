/**
 * this component has a form with input to send message to another component
 */
 
import React from 'react';
import { Formik, Form, Field} from 'formik';
import { useDispatch } from 'react-redux';
import { chatSlice } from '../chat.slice';

export function SendMessage() {
	const dispatch = useDispatch();
	
	const handleSubmit = (values) => {
		dispatch(chatSlice.actions.setMessage(values.message));
	}
	
	return (
		<Formik
			initialValues={ {message: 'initial message'} }
			onSubmit={handleSubmit}
		>
			<Form>
				<Field type="text" name="message" />
				
				<button type="submit">Send message</button>
			</Form>
		</Formik>
	)
}