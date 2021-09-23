import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [longUrl, setLongUrl] = useState('')
  const [shortUrl, setShortUrl] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('/api/shorten', { longUrl } )
      .then(res => setShortUrl(res.data))
      .catch(err => console.log(err))
  }
  const copyToClipboard = () => { navigator.clipboard.writeText(shortUrl) }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>URL Shortener with React</p>
        <form onSubmit={handleSubmit}>
          <input type="text" value={longUrl} onChange={(e) => setLongUrl(e.target.value) } />
          <input type="submit" value="Shorten URL" />
        </form>
        <p>
          Original URL:
          <a href={longUrl} target="_blank" rel="noopener noreferrer"> {longUrl}</a>
        </p>
        <div>{shortUrl}</div>
        <button onClick={copyToClipboard}>Copy URL</button>
      </header>
    </div>
  );
}

export default App;
