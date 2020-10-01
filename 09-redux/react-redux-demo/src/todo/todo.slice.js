import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';

const tasksEntityAdapter = createEntityAdapter();



export const fetchTasks = createAsyncThunk(
	'todo/fetchTasks',

	/**
	 * @returns {Promise<data>}
	 */
	async (_arg, thunkApi) => {
		try {
			const response = await fetch('https://nztodo.herokuapp.com/api/tasks/?format=json');
			const todoList = await response.json();
			return todoList;
		} catch(err) {
			throw new Error('something happened')
		}
	}
)

export const todoSlice = createSlice({
	name: 'todo',
	
	/**
	{
		// The unique IDs of each item. Must be strings or numbers
		ids: [10, 100]
		// A lookup table mapping entity IDs to the corresponding entity objects
		entities: {
			10: {id: 10, title: '...'},
			100: {...}
		}
	}
	 */
	initialState: tasksEntityAdapter.getInitialState({
		isLoading: false,
		error: null
	}),
	// initialState: {
	// 	tasks: [],
	// 	isLoading: false,
	// 	error: null
	// },
	reducers: {
		setTasks: (state, action) => {
			tasksEntityAdapter.setAll(state, action.payload)
		}
	},
	extraReducers: {
		[fetchTasks.pending]: (state) => {
			state.isLoading = true;
		},
		[fetchTasks.fulfilled]: (state, action) => {
			state.isLoading = false;
			tasksEntityAdapter.setAll(state, action.payload)
		},
		[fetchTasks.rejected]: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		}
	}
})

// action creator
// redux-thunk
// send action which is a function
// export function fetchTasks() {
// 	return async function(dispatch) {
// 		const response = await fetch('https://nztodo.herokuapp.com/api/tasks/?format=json');
// 		const todoList = await response.json();
// 		dispatch(todoSlice.actions.setTasks(todoList))
// 	}
// }

export const selectors = tasksEntityAdapter.getSelectors()
