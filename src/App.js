import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Book from "./components/Book";
import books from "./books.json";

class App extends Component {

  state = {
    books
  };

  shuffleBooks = (id) => {
    console.log("This works", id)
    const books = this.state.books; 
    for (let i = books.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [books[i], books[j]] = [books[j], books[i]];
    }
    this.setState({ books })
  }

  render() {
    return (
      <Wrapper>
        {this.state.books.map((book, index) => {
          console.log("index", index)
            return <Book 
              key={book.id}
              id={book.id}
              image={book.image}
              name={book.name}
              shuffleBooks={this.shuffleBooks}
            />
          }
        )}
      </Wrapper>
    );
  }
}

export default App;
