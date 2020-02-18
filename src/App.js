import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Book from "./components/Book";
import books from "./books.json";

class App extends Component {

  state = {
    books,
    score: 0,
    topScore: 0,
    guesses: [],
    notification: "Don't Click the Same Book Twice!",
    notificationClass: "flex-children notification start"
  };

  shuffleBooks = (id) => {
    const guesses = this.state.guesses;
    let score = this.state.score;
    let topScore = this.state.topScore;
    if (guesses.indexOf(id) === -1) {
      this.setState({
        guesses: [...this.state.guesses, id],
        score: score + 1, 
        notification: "Nice Job! Click Again!",
        notificationClass: "flex-children notification correct"
      })
      setTimeout(() => this.setState({notificationClass: "flex-children notification"}), 500);
    } else if (guesses.indexOf(id) !== -1) {
      this.setState({
        guesses: [],
        score: 0,
        notification: "You already chose this one! Start Over!",
        notificationClass: "flex-children notification incorrect"
      })
      setTimeout(() => this.setState({notificationClass: "flex-children notification"}), 500);
    } 
    if (topScore <= score && guesses.indexOf(id) === -1) {
      this.setState({
        topScore: topScore + 1,
        notification: "Nice Job! Click Again!",
        notificationClass: "flex-children notification correct"
      })
      setTimeout(() => this.setState({notificationClass: "flex-children notification"}), 500);
    }
    const books = this.state.books; 
    for (let i = books.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [books[i], books[j]] = [books[j], books[i]];
    }
    this.setState({ books })
  }

  render() {
    return (
      <div>
        <Header 
          score={this.state.score}
          topScore={this.state.topScore}
          guesses={this.state.guesses}
          notification={this.state.notification}
          notificationClass={this.state.notificationClass}
        />
          <Wrapper>
            {this.state.books.map((book, index) => {
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
      </div>
    );
  }
}

export default App;
