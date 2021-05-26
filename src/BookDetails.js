import React from 'react'
import PropTypes from 'prop-types'


function BookDetails(props) {
  const { book } = props;
  const { title, description, categories, authors} = book;
  
  const thumbnail = "imageLinks" in book ? book.imageLinks.thumbnail : '';
  
  return (
    <div className="book-view-modal">
      <div className="book-view">
        <div className="header">
          <img id="close-button" src="\buttons\arrow-back-black.svg" alt="close" onClick={props.onClose} />
          <h3 className="book-view-title">{title}</h3>
        </div>
        <div className="book-view-details">
            <img className="book-cover" src={thumbnail} width="128" height="193" alt="cover" />
          <div className="book-information">
            <p>
              Author: {'authors' in book ? authors.join(', ') : ''}
              <br />
              Category: {'categories' in book ? categories.join(", ") : ''}
              <br />
            </p>
            <p className='book-description'>Description: {'description' in book ? description : 'N/A'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

BookDetails.propTypes = {
  book: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default BookDetails;
