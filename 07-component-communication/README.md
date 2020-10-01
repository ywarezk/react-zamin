# Components communication

Focusing a bit more on communication between components.

## Communication between components

- props
  - callbacks
  - children
- context
- Service
  - Events
  - RXJS - Observable

 
```
<Hello>
	<Foo />
</Hello>

<Hello>
	{
		'hello'
	}
</Hello>

<Hello>
	{
		'hello'
	}
</Hello>

function Hello(props) {
	props.children
}
```

## Lesson Plan

- extending props
- children
- passing callback 
- passing ref
- Context