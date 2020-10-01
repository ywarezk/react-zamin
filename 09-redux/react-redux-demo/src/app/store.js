/**
 * We will create a new redux store
 */
 
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { chatSlice } from '../chat';
import { todoSlice } from '../todo';

/*
{
	chat: {
		message: ''
	},
	todo: {
		tasks: []
	}
}
*/

// {type: '..', payload: any}
// async function someAction(dispatch) {}

export const store = configureStore({
	reducer: combineReducers({
		chat: chatSlice.reducer,
		todo: todoSlice.reducer
		// user: userSlice.reducer,
		// setting: settingsSliceReducer
	})
});
