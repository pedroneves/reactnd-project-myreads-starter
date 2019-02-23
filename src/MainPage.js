import React, { Component } from 'react';
import Shelf from './Shelf'

class MainPage extends Component {
	render () {
		const { shelves, books } = this.props;

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
							/>
						))
					}
				</div>
				<div className="open-search">
					<button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
				</div>
			</div>
		)
	}
}

export default MainPage;