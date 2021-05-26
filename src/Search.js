import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'


class Search extends React.Component {

    state = {
        books: [],
    }

    HandleSearch = (event) => {
        BooksAPI.search(event.target.value).then(books => {
            if ((typeof books === 'undefined') || ('error' in books)) {
            this.setState(prevState => ({ books: [] })) 
        } else {
        this.setState(prevState => ({ books: books }))
      }
    }).catch(error => {
      console.log('Error: ',error)
    })
  }

    render() {
        const { onChange, books } = this.props;
        return (
            <div className='search-books'>
                <div className='search-books-bar'>
                    <Link to='/'>
                        <button className='close-search'>
                            Close
                        </button>
                    </Link>
                    <div className='search-books-input-wrapper'>
                        <input type="text" onChange={this.HandleSearch} placeholder="Search by title or author" />
                    </div>
                </div>
                <div className='search-books-results'>
                    {(this.state.books.length > 0) && (
                        <ol className="books-grid">
                            {this.state.books.map(book => <Book books={books} key={book.id} onChange={onChange} book={book} />)}
                        </ol>
                    )}
                    {(this.state.books.length <= 0) && (
                        <div className="search-no-books">
                            <p className="intro">We have a huge library of books for the following topics:</p>
                        </div>
                    )}
                </div>
                
            </div>
        )
    }
}

export default Search