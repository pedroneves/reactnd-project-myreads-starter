import React, { Component } from 'react'
import BookControls from './BookControls'
import PropTypes from 'prop-types'

class Book extends Component {

	render () {
		const { book } = this.props
		const { title, authors=[] } = book

		return (
			<div className="book">
				<div className="book-top">
					<div
						className="book-cover"
						style={{
							width: 128,
							height: 193,
							backgroundImage: `url("${book.imageLinks.smallThumbnail}")`
						}}>
					</div>
					<div className="book-shelf-changer">
						<BookControls
							currentShelf={book.shelf}
							onBookShelfChange={(shelfId) => {
								if (this.props.onBookShelfChange) {
									this.props.onBookShelfChange(this.props.book, shelfId)
								}
							}}
						/>
					</div>
				</div>
				<div className="book-title">{title}</div>
				<div className="book-authors">{authors.join(', ')}</div>
			</div>
		)
	}
}

Book.propTypes = {
	book: PropTypes.object.isRequired,
	onBookShelfChange: PropTypes.func
}

export default Book