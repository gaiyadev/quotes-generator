import React from 'react';
import './App.css';
import QuoteAndAuthor from './components/Quotes/Quotes';
import Quotes from './database/QuotesDb';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quoteData: {
        quote: Quotes[0].quote,
        author: Quotes[0].author,
      }

    };
  }

  randomQuote = () => {
    const randomNumber = Math.floor(Math.random() * Quotes.length);
    // console.log(Quotes.length);
    return Quotes[randomNumber];
  }

  shuffleQuotes = (array) => {
    return array.sort(() => Math.random() - 1);
  }

  handleClick = () => {
    const generateRandomQuote = this.randomQuote();
    this.setState({
      quote: generateRandomQuote.quote,
      author: generateRandomQuote.author
    });
    this.shuffleQuotes(Quotes)
  }

  componentDidMount() {

  }

  randomColor = () => {
    const color = `rgb(
      ${Math.floor(Math.random() * 25)},
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 55)})`;
    return color;
  }

  render() {
    return (
      <div className="App">
        <QuoteAndAuthor
          displayColor={this.randomColor}
          handleClick={this.handleClick}
          {...this.state.quoteData}
        />
      </div>
    );
  }
}
export default App;
