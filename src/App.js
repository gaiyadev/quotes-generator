import React from 'react';
import './App.css';
import QuoteAndAuthor from './components/Quotes/Quotes';
import Quotes from './database/QuotesDb';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteData: {
        quote: Quotes[20].quote,
        author: Quotes[20].author,
      }
    };
  }

  randomQuote = () => {
    const randomNumber = Math.floor(Math.random() * Quotes.length);
    return Quotes[randomNumber];
  }

  shuffleQuotes = (array) => {
    return array.sort(() => Math.random() - 0.5);
  }

  handleClick = () => {
    const generateRandomQuote = this.randomQuote();
    this.setState({
      quoteData: {
        quote: generateRandomQuote.quote,
        author: generateRandomQuote.author
      }

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
