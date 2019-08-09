import React from 'react';

const NewListForm = ({onNewList = f => f}) => {
	let title, excerpt

	const submit = e => {
		e.preventDefault()
		onNewList(title.value, excerpt.value)
		title.value = ''
		excerpt.value = ''
		title.focus()
	}

	return (
		<form onSubmit={submit}>
			<input ref={input => title = input}
				type='text'
				placeholder='title...' required />
			<input ref={input => excerpt = input}
				type='text'
				placeholder='excerpt...' required />
			<button>add list</button>
		</form>
	)
}

export default NewListForm;