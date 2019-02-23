import React, { Component } from 'react'
import Book from './Book'

class Shelf extends Component {
	render () {
		const { title='', books=[], onBookShelfChange } = this.props

		return (
			<div className="bookshelf">
				{title !== '' ? <h2 className="bookshelf-title">{title}</h2> : ''}
				<div className="bookshelf-books">
					<ol className="books-grid">
						{
							books.map(book => (
								<li key={book.id}>
									<Book book={book} onBookShelfChange={onBookShelfChange} />
								</li>
							))
						}
					</ol>
				</div>
			</div>
		)
	}
}

export default Shelf