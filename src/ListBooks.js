import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import BookShelf from "./BookShelf";

function ListBooks(props) {
    
    const {books, onChange}  = props;
    
    console.log(books)
    return (
        
        <div className='list-books'>
            <div className='list-books-title'>
                <h1>My Reads</h1>
            </div>
            <div className='list-books-content'>
                <div>
                    <BookShelf title='Currently Reading' shelf='currentlyReading' books={books} onChange={onChange} />
                    <BookShelf title='Want To Read' shelf='wantToRead' books={books} onChange={onChange} />
                    <BookShelf title='Finished Reading' shelf='read' books={books} onChange={onChange} />
                </div>
            </div>
            <div className='open-search'>
                <Link to='/search'/>
            </div>
        </div>
    )
}

ListBooks.propTypes = {
  books: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default ListBooks