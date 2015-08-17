var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

app.get('/scrape', function(req, res){
	url = 'http://www.imdb.com/chart/top';

	request(url, function(error, response, html){
		if(!error){
			var $ = cheerio.load(html);
			var json = {
							title : [],
							rating  : [],
							url : []
					   };
			var output = {
							movies : []
						 };
			
			$('.titleColumn a').each(function(){
				json.title.push($(this).text());
			});
			
			$('.ratingColumn.imdbRating').each(function(){
				json.rating.push($(this).children().text());
			});
			
			$('.posterColumn a').each(function(){
				json.url.push($(this).children().attr('src'));
			});
			
			for(var i=0; i<json.title.length; i++){
				output.movies[i] = {
					title : json.title[i],
					rating : json.rating[i],
					url : json.url[i]
				}
			}
			fs.writeFile('output.json', JSON.stringify(output, null, 4), function(err){
		    	console.log('File successfully written! - Check your project directory for the output.json file');
		    })
		
		    res.send('Check your console!')			
		}
		else {
			console.log("Network Error, please try again later")
		}
	})
})

app.listen('8081')
console.log('Server running on port 8081');
exports = module.exports = app; 	