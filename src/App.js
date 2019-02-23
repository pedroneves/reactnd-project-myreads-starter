import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MainPage from './MainPage';
import SearchPage from './SearchPage';

class BooksApp extends React.Component {
	state = {
		books: []
	}

	loadBooks = () => {
		BooksAPI.getAll()
			.then(books => {
				console.log(books)
				this.setState(() => {
					return { books }
				})
			})
	}

	componentDidMount () {
		this.loadBooks();
	}

	render() {
		return (
			<div className="app">
				<SearchPage />
				<MainPage
					shelves={[
						{id: 'currentlyReading', title: 'Currently Reading'},
						{id: 'wantToRead', title: 'Want to Read'},
						{id: 'read', title: 'Read'}
					]}
					books={this.state.books}
				/>
			</div>
		)
	}
}

export default BooksApp
