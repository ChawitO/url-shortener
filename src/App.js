import logo from './cw-logo.svg'
import './scss/App.scss'
import { useState } from 'react'
import axios from 'axios'

function App () {
  const [longUrl, setLongUrl] = useState('')
  const [shortUrl, setShortUrl] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('https://bitly-proxy-server.herokuapp.com/api/shorten', { longUrl })
      .then(res => setShortUrl(res.data))
      .catch(err => console.log(err))
  }
  const copyToClipboard = () => { navigator.clipboard.writeText(shortUrl) }

  return (
    <div className='App'>
      <header>
        <a href='https://github.com/ChawitO/url-shortener' target='_blank' rel='noopener noreferrer'>
          <img src={logo} className='logo' alt='cw logo' />
        </a>
      </header>
      <main>
        <h1>Link Shortener with React</h1>
        <form onSubmit={handleSubmit}>
          <input className='text-box' type='text' value={longUrl} placeholder='Paste the long url here' onChange={(e) => setLongUrl(e.target.value)} />
          <input className='btn' type='submit' value='Shorten' />
        </form>
        {shortUrl &&
          <div className='short-url-container'>
            <div className='short-url text-box'>{shortUrl}</div>
            <button className='btn' onClick={copyToClipboard}>Copy</button>
          </div>}
        {!shortUrl && <div className='short-url-placeholder' />}
      </main>
    </div>
  )
}

export default App
