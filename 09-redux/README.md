# Redux

In this lesson we will cover global state management using Redux

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