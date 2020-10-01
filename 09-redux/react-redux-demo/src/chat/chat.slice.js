/**
 * RTK Slice - container actions - to manage the { chat: {... } }
 */
 
import { createSlice } from '@reduxjs/toolkit';

export const chatSlice = createSlice({
	name: 'chat',
	initialState: {
		message: 'initial message'
	},
	reducers: {
		setMessage: (state, action) => {
			state.message = action.payload;
		}
	}
})