# Redux

In this lesson we will cover global state management using Redux

## 

```
<UserContext>
	<DashboardContext>
		<TodoContext>
			
		</TodoContext>
	</DashboardContext>
</UserContext>

<DataContext value={ {
	user: {
		
	},
	dashboard: {
		
	},
	todo: {
		
	}
} }>

// performance problem
// predictability
// convention
//    - tools for common data problem

// context
// configuration
```

```
class UserService {}

class DashboardService {}

```

MVC

         Controller


View                     Model



component1               service1
c2	----------->		    s2
c3							s3
c4							s4
...							....
Cn  						Sm

## library to manage data

mobx, Redux, recoil, Apollo client

data === state

## State

```
{
	user: {
		firstName: 'yariv',
		lastName: 'katz'
	},
	dashboard: {
		isGraph: true
	},
	todo: {
		/*tasks: [
			{id: 1, title: 'hello'}
		] */
		tasks: {
			10: {id:10. ,,},
			
		}
	}
}
```

state in Redux is immutable

## best practices

- split state to chunks - by separation of concerns
- Data should be serializable
- no derived data
- consider arrays as objects

```
const tasks = {...state.tasks}
delete tasks[100];
```

## Store

- the store will hold our data
- 1 store
- holds all the data
- the state object is "private"

## Action

describes something that happened in our app
event, server, websocket, timer...

```
{
	type: 'unique string of the action that happened',
	
	type: 'BUTTON_CLICKED',
	payload?: any
}

{
	type: 'SET_FIRST_NAME',
	payload: 'Pigletshvily'
}
```

## reducer

based on an action decides how the state will change

```
function reducer(state, action) {
	return newState
}
```

## problems

a lot of the state logic is separated in many files.

## Redux Toolkit

- Best practices for working with Redux
- make working with redux easier

## Lesson Plan

- What is Redux
- State
- Store
- Actions
- Reducer
- combineReducers
- Redux toolkit
- async actions
- react-redux

## EX.

- your state should contain the following:

```
{
	todo: {
		tasks: {
			1: {
				id: 1,
				title: 'do something',
				description: 'description of the todo task',
				when: 134523463453 // timestamp
			},
			2: {...},
			3: {...}
		}			
	}
}
```

- Use Redux toolkit and entity adapter to help you manage the state
- Create the following components:
  - App
  - TodoForm
  - TodoList
  
- The TodoForm contains a form to create a new todo item
- The TodoList should display a list of all the todo items from the state