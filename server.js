var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

app.get('/scrape', function(req, res){
	// Let's scrape Anchorman 2
	url = 'http://www.imdb.com/chart/top';

	request(url, function(error, response, html){
		if(!error){
			var $ = cheerio.load(html);
			var json = {movies : []};
			
			$('.titleColumn a').each(function(){
				json.movies.push($(this).text());
			});
			
		};

		fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){
        	console.log('File successfully written! - Check your project directory for the output.json file');
        })

        res.send('Check your console!')
	})
})

app.listen('8081')
console.log('Server running on port 8081');
exports = module.exports = app; 	