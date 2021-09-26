# URL Shortener

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Visit the demo [here](https://chawito.github.io/url-shortener/).

Just a practice project to make a URL shortener with React, from [Codementor](https://www.codementor.io/projects/web/link-shortener-website-brqjanf6zq).

It might take a few seconds on the first usage, since I made use of a proxy server on heroku to do the actual API call to Bitly.
On the free tier, this takes a few seconds to start up.
This way the API key can be hidden and not visible to client side.

## Built with
  - React
  - Express on heroku
  - SCSS

---

## Known issues and potential improvements
- No invalid url handling
  - Seems like the url must begin with http or https
- Shows up weird on iPad
  - has border-radius effect even when works fine on other devices.
