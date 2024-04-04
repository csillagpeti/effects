import { useEffect, useState } from "react";

const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";

export default function QuoteFetcher() {
  const [quote, setQuote] = useState({});
  async function fetchQuote() {
    const response = await fetch(RANDOM_QUOTE_URL);
    const jsonResponse = await response.json();
    const randomQuote = jsonResponse.quote;
    setQuote(randomQuote);
  }

  useEffect(() => {
    fetchQuote()
  }, []);

  return (
    <div>
      <h1>{quote.text}</h1>
      <h2>{quote.author}</h2>
      <button onClick={fetchQuote}>Get New Quote</button>
    </div>
  );
}
