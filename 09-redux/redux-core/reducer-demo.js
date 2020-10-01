

// function userReducer(stateUser = {
// 	firstName: 'yariv',
// 	lastName: 'katz'
// }, action) {
// 	if (action.type === 'SET_FIRST_NAME') {
// 		return {
// 			...stateUser,
// 			firstName: action.payload
// 		}
// 	}
// 	return stateUser;
// }

// const userReducer = RTK.createReducer(
// 	{
// 		firstName: 'yariv',
// 		lastName: 'katz'
// 	},
// 	{
// 		'SET_FIRST_NAME': (state, action) => {
// 			return {
// 				...state,
// 				firstName: action.payload
// 			}
// 		}
// 	}
// )

// class UserService {
// 	someData = initValue;
	
// 	setFirstName = () => {}
// }

// reducer + actions relating to the user section of the state
// {reducer: (state, action) => newState, actions: {setFirstName}}
const userSlice = RTK.createSlice({
	name: 'user',
	initialState: {
		firstName: 'yariv',
		lastName: 'katz'
	},
	reducers: {
		setFirstName: (state, action) => {
			state.firstName = action.payload;
		}
	}	
});

window.setFirstName = userSlice.actions.setFirstName;

function todoReducer(state = {
	tasks: {
		10: {
			id: 10,
			title: 'do something'
		},

	}
}, action) {
	if (action.type === 'SET_TASKS') {
		// ...
	}
	return state;
}

function dashboardReducer(state = {
	isGraph: true
}, action) {
	if (action.type === 'SET_IS_GRAPH') {
		// ...
	}
	return state
}
/*
function(state, action) {
	const newState = {...state};
	newState.user = userReducer(state.user, action);
	newState.dashboard = dashboardReducer(state.dashboard, action);
	newState.todo = todoReducer(state.todo, action)
}
*/
const reducer = RTK.combineReducers(
	{
		user: userSlice.reducer,
		dashboard: dashboardReducer,
		todo: todoReducer
	}
)

window.reducer = reducer;