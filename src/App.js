import QuoteCard from './components/QuoteCard';
import React from 'react';
import axios from 'axios';

const initialQuote = 
  {
    quote:
      "These are my only friends...grown-up nerds like Gore Vidal. And even he's kissed more boys than I ever will.",
    character: 'Lisa Simpson',
    image:
      'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083',
  };

function App() {
  const [newQuote, setNewQuote] = React.useState(initialQuote);

  const getQuote = () => {
       // Send the request
       axios
       .get('https://simpsons-quotes-api.herokuapp.com/quotes')
       // Extract the DATA from the received response
       .then((response) => response.data)
       // Use this data to update the state
       .then((data) => {
         console.log(data)
         setNewQuote(data[0]);
       });
  };

  return (
    <div>
      <button type="button" onClick={getQuote}>
        Give me another quote
      </button>
      <QuoteCard quote={newQuote}/>
    </div>
  );
}

export default App;
