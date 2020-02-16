import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Book from "./components/Book";
import books from "./books.json";

class App extends Component {

  state = {
    books
  };

  render() {
    return (
      <Wrapper>
        {this.state.books.map((book, index) => {
          console.log("index", index)
            return <Book 
              key={book.id}
              image={book.image}
            />
          }
        )}
      </Wrapper>
    );
  }
}

export default App;
