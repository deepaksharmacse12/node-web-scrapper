# node-web-scrapper

Simple web-scrapper in `Node.js` to scrap the movie name, rating, and url of image from IMDB top 250 movies list (http://www.imdb.com/chart/top), `cheerio` (https://github.com/cheeriojs/cheerio) for working with jquery on the server side. Scrapping is done only for the learning purpose.

## Installation

Install the node.js (https://nodejs.org/), In the root directory install the packages using npm: 

`npm install`

## Usage

Switch to the root directory and run:

`node server.js`

Browse to `http://localhost:8081/scrape`, it will scrape the data and create `output.json` file in the root directory. You can edit `server.js` file to scrap out some other page.
