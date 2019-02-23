import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookControls extends Component {

	handleShelfChange = (event) => {
		const shelfId = event.target.value;
		if (this.props.onBookShelfChange) {
			this.props.onBookShelfChange(shelfId)
		}
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

BookControls.propTypes = {
	currentShelf: PropTypes.string,
	onBookShelfChange: PropTypes.func,
}

export default BookControls