import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Shelf from './Shelf'
import Lodash from 'lodash';

class SearchPage extends Component {
	state = {
		query: '',
		searchedBooks: [],
		isSearching: false,
		hasSearched: false,
	}

	search = Lodash.debounce((query) => {
		BooksAPI.search(query)
			.then(response => {
				if (!this.state.isSearching) {
					return
				}

				const isSearching = false;
				let searchedBooks = response;

				if (response.error) {
					searchedBooks = [];
				}

				this.setState(() => ({ searchedBooks, isSearching }))
			})
	}, 350)

	reset = () => {
		this.setState(() => ({
			query: '',
			searchedBooks: [],
			isSearching: false,
			hasSearched: false,
		}))
	}

	handleSearchChange = (event) => {
		const query = event.target.value

		if (query === '') {
			return this.reset();
		}

		this.setState(() => ({query, isSearching: true, hasSearched: true}))
		this.search(query);
	}

	render () {
		const { query, searchedBooks, hasSearched, isSearching } = this.state;

		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link to='/' className="close-search" />
					<div className="search-books-input-wrapper">
						<input
							type="text"
							placeholder="Search by title or author"
							value={this.state.value}
							onChange={this.handleSearchChange}
						/>

					</div>
				</div>

				<div style={{ textAlign: 'center', marginTop: '75px' }}>
					{
						hasSearched
							? isSearching
								? `Searching for "${query}"...`
								: `Showing ${searchedBooks.length} results for "${query}"`
							: ''
					}
				</div>

				<div className="search-books-results" style={{ paddingTop: '10px' }}>
					<Shelf books={searchedBooks} />
				</div>
			</div>
		)
	}
}

export default SearchPage;