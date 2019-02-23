import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MainPage from './MainPage'
import SearchPage from './SearchPage'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
	state = {
		userBooks: [],
	}

	shelves = [
		{id: 'currentlyReading', title: 'Currently Reading'},
		{id: 'wantToRead', title: 'Want to Read'},
		{id: 'read', title: 'Read'}
	]

	putBookIntoShelf = (book, shelfId) => {
		const shelvesIds = this.shelves.map(shelf => shelf.id)

		if (!shelvesIds.includes(shelfId) && shelfId !== 'none') {
			return
		}

		const hasBook = this.userHasBook(book);

		BooksAPI.update(book, shelfId)

		if (hasBook) {
			this.setState(prevState => {
				const targetBook = prevState.userBooks.find(userBook => userBook.id === book.id)
				targetBook.shelf = shelfId;
				return prevState;
			})
		} else {
			this.setState(prevState => {
				book.shelf = shelfId;
				const userBooks = [...prevState.userBooks, book]
				return { userBooks };
			})
		}
	}

	getUserBookById = (bookId) => {
		return this.state.userBooks.find(book => book.id === bookId);
	}

	userHasBook = (targetBook) => {
		return Boolean(this.getUserBookById(targetBook.id));
	}

	loadBooks = () => {
		BooksAPI.getAll()
			.then(userBooks => {
				this.setState(() => {
					return { userBooks }
				})
			})
	}

	componentDidMount () {
		this.loadBooks()
	}

	render() {
		return (
			<div className="app">
				<Route
					path='/search'
					render={() => (
						<SearchPage
							userBooks={this.state.userBooks}
							onBookShelfChange={this.putBookIntoShelf}
						/>
					)}
				/>
				<Route
					exact path='/'
					render={() => (
						<MainPage
							shelves={this.shelves}
							books={this.state.userBooks}
							onBookShelfChange={this.putBookIntoShelf}
						/>
					)}
				/>
			</div>
		)
	}
}

export default BooksApp
