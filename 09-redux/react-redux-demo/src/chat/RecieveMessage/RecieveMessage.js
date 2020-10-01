import React from 'react';
import { useSelector } from 'react-redux';

export function RecieveMessage() {
	const message = useSelector(state => state.chat.message);
	
	return (
		<h1>
			{
				message
			}
		</h1>
	)
}