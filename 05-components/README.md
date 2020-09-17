# React Components

React essence is creating a UI components.
In this lessons we will focus on the tools that we have with React for building the components and updating the components.

## Lesson Plan

- component can be a function or a class
- props
- state, useState
- Events
- useEffect

## EX Todo list

- Create a new app using `create-react-app`
- Add a new component called `TodoList`
- That component should use the hook `useEffect` to send a request to the server: `https://nztodo.herokuapp.com/api/tasks/?format=json` after the component is initialized
- when you get the response back you need to save it in the state (you will have to use the hook `useState`)
- The component should display a `ul-li` list of all the items the server returned.

```
// Promise<Response>
// Response => {json: () => Promise<Todo[]>}
fetch('https://nztodo.herokuapp.com/api/tasks/?format=json')
```