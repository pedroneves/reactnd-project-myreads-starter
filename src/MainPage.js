import React, { Component } from 'react';
import Shelf from './Shelf'

class MainPage extends Component {
	render () {
		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
						<Shelf title={'Currently Reading'} />
						<Shelf title={'Want to Read'} />
						<Shelf title={'Read'} />
					</div>
				</div>
				<div className="open-search">
					<button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
				</div>
			</div>
		)
	}
}

export default MainPage;