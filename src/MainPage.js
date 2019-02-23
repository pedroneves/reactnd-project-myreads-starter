import React, { Component } from 'react'
import Shelf from './Shelf'
import { Link } from 'react-router-dom'

class MainPage extends Component {
	render () {
		const { shelves, books, onBookShelfChange } = this.props

		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					{
						shelves.map(shelf => (
							<Shelf
								key={shelf.id}
								title={shelf.title}
								books={books.filter(book => book.shelf === shelf.id)}
								onBookShelfChange={onBookShelfChange}
							/>
						))
					}
				</div>
				<Link to='/search' className="open-search">
					<button >Add a book</button>
				</Link>
			</div>
		)
	}
}

export default MainPage