import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import ListBooks from './ListBooks';
import Search from "./Search";

class BooksApp extends React.Component {

  state = {
    books: []
  };
  
  async componentDidMount() {
    try {
      const books = await BooksAPI.getAll();
      this.setState(() => ({
        books
      }));
    } catch (error) {
      
    }
    
  }

  changeShelf = (book, newShelf) => {
    BooksAPI.update(book, newShelf);
    book.shelf = newShelf
    const books = this.state.books.filter((data) => data.id !== book.id).concat(book);
    this.setState({ books });
    
  }
  
  render() {
    
    return (
      <div className='app'>
        <Route exact path='/'>
          <ListBooks books={this.state.books} onChange={this.changeShelf} />
        </Route>
        <Route exact path="/search">
          <Search books={this.state.books} onChange={this.changeShelf} />
        </Route>
      </div>
    )
  }
}

export default BooksApp;
