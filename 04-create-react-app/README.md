# create-react-app

In this lesson we will use create-react-app to create a full website using React.
We will go over the tools that create-react-app brings us, and the best practices to manage a large react project.

## Lesson Plan

- What is create-react-app (CRA)
- Create first project with CRA
- How to arrange the files
- images
- styles
- deploy

## To start a new React web site

```
npx create-react-app <project-name>
```

## CheatSheet commands

start development server

```
> npm start
```

Build the app

```
> npm run build
```

exposes the webpack config file
for custom modifications

```
> npm run eject
```

## EX.

- Create a new project using `create-react-app`
- Create the login app but split every component to a different file
  - App
    - Header - add an image + local styling where you will position the image
	- LoginForm
	- Footer
- install bootstrap design the components using bootstrap
```
npm install bootstrap
```
- design the app using scss
```
npm install node-sass
```
- Create a component that contains an image
- create a stylesheet for one of the components
- Create a styling project for the entire project
  - and add styling for the buttons
