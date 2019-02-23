import React, { Component } from 'react'

class BookControls extends Component {

	handleShelfChange = (event) => {
		const shelfId = event.target.value
		this.props.onBookShelfChange(shelfId)
	}

	render () {
		const { currentShelf='none' } = this.props

		return (
			<select value={currentShelf} onChange={this.handleShelfChange}>
				<option value="move" disabled>Move to...</option>
				<option value="currentlyReading">Currently Reading</option>
				<option value="wantToRead">Want to Read</option>
				<option value="read">Read</option>
				<option value="none">None</option>
			</select>
		)
	}
}

export default BookControls