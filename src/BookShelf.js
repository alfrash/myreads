import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book'


function BookShelf(props) {

    const { shelf, title, books, onChange } = props;

    const bookShelf = books.filter((book) => book.shelf === shelf);
    console.log(books)
    return (
        <div className='bookshelf'>
            <h2 className='bookshelf-title'>{title}</h2>
            <div className='bookshelf-books'>
                {bookShelf.length > 0 && (
                    <ol>
                        {bookShelf.map(book => (
                            <Book key={book.id} onChange={onChange} book={ book }/>
                        ))}
                    </ol>
                )}
                {bookShelf.length <= 0 && (
                <h2>No books here!</h2>
                )}
            </div>
        </div>
    )
}

BookShelf.propTypes = {
  title: PropTypes.string.isRequired,
  shelf: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default BookShelf;