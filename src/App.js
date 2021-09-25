import logo from './cw-logo.svg';
import './App.scss';
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
      <header>
        <a href="https://github.com/ChawitO/url-shortener" target="_blank" rel="noopener noreferrer">
          <img src={logo} className="logo" alt="cw logo" />
        </a>
      </header>
      <main>
        <h1>Link Shortener with React</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={longUrl} placeholder="Paste the long url here" onChange={(e) => setLongUrl(e.target.value) } />
          <input className="btn-url" type="submit" value="Shorten" />
        </form>
        {shortUrl && <div className="short-url-container">
          <div className="short-url">{shortUrl}</div>
          <button className="btn-url" onClick={copyToClipboard}>Copy</button>
        </div>}
        {!shortUrl && <div className="short-url-placeholder"></div>}
      </main>
    </div>
  );
}

export default App;
