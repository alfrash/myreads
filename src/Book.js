import React from 'react'
import PropTypes from 'prop-types'
import Handler from './Handler'
import BookDetails from './BookDetails'

class Book extends React.Component {
    state = {
        view: false
    };

    onChange = (e) => {
        this.props.onChange(this.props.book, e.target.value)
    };

    findShelf = (book) => {
        const finder = this.props.books.filter((data) => data.id === book.id);
        if (finder.length > 0) {
            return finder[0].shelf;
        }
        return 'none';
    };

    toggle = () => {
        const currVal = this.state.view ? false : true; 
        this.setState({ view: currVal }); 
    };

    render() {
        const { book } = this.props;
        const { title, authors } = book;
        const thumbnail = "imageLinks" in book ? book.imageLinks.thumbnail : '';
        const shelf = "shelf" in book ? book.shelf : this.findShelf(book);

        return (
            <li>
                <div className='book'>
                    <div className='book-top'>
                        <div className='book-cover' style={{ width: 128, height: 193, backgroundImage: `url(${thumbnail})` }} onClick={this.toggle} />
                        <Handler shelf={shelf} onChange={this.onChange} />
                    </div>
                    <div className="book-title">{title}</div>
                    <div className="book-authors">{authors}</div>
                </div>
                {this.state.view && <BookDetails book={this.props.book} onClose={this.toggle} />}
            </li>
        )
    }
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  books: PropTypes.array,
};

export default Book