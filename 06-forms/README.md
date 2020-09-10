# Forms

How to deal with forms in our react app

## Lesson plan

- Controlled form
- uncontrolled form
- useRef
- custom hook
- hoc 
- render props

## Ex Login

- Continue with the login app you created before
- use Formik to handle the login form validation and submit event.
- send the login request to the following server: `https://academeez-login-ex.herokuapp.com/api/users/login` the request needs to be a post request with the body:
```
{
	email: 'yariv@nerdeez.com',
	password: '12345678'
}
```
- the server will respond with a JWT token
- Add another component `TodoList`
- That component should get a jwt token in the props passed from the login component
- when a jwt token is received in the TodoList component it will send a request to the following url: `https://academeez-login-ex.herokuapp.com/api/tasks` make sure to send the jwt token in the headers:
```
{
	Authorization: Bearer <token>
}
```
- Upon success authorization the server will send an array of items that you should display then in `ul-li` list, the server will return 401 on failed authentication.
