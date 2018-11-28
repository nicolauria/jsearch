const https = require('https');

const titles = [];

function pushData(title) {
	titles.push(title);
}

let idx = 1;

function getAllMoviesData(substr) {
  let url =
		'https://jsonmock.hackerrank.com/api/movies/search/?Title=' +
		substr +
		'&page=' +
		idx;

    let rawData = '';

    https.get(url, function(response) {
      response.setEncoding('utf8');

      response.on('data', function(data) {
        rawData += data;
      })

      response.on('end', function() {
        let movies = JSON.parse(rawData);
        movies.data.forEach(movie => pushData(movie))

        if (idx < movies.total_pages) {
          idx += 1;
          getAllMoviesData(substr);
        }
      })

    })

  return titles;
}

console.log(
  getAllMoviesData('spiderman', 2)
)

//
// var https = require('https');
//
// var titles = [];
//
// function pushData(title) {
// 	titles.push(title);
// 	//console.log(titles.length);
// }
//
// function returnData(){
//   return titles;
// }
//
//
// function getAllMoviesData(substr, pages) {
//   var signal = true;
// 	for (var i = 1; i <= pages; i++) {
// 		let url =
// 			'https://jsonmock.hackerrank.com/api/movies/search/?Title=' +
// 			substr +
// 			'&page=' +
// 			i;
//
// 	https
// 		.get(url, function(response) {
// 			response.setEncoding('utf8');
//
// 			let rawData = '';
//
// 			response.on('data', function(data) {
// 				rawData += data;
// 			});
//
// 			response.on('end', function() {
// 				try {
// 					const parsedData = JSON.parse(rawData);
// 					parsedData.data.forEach(function(e){
// 					  pushData(e.Title);
// 					});
//
// 					  if(i - 1 === pages){
// 					    if(signal){
// 					     titles.sort().forEach(function(e){console.log(e)});
// 					     signal = false;
// 					    }
// 					  }
//
// 				} catch (e) {
// 					console.log(e.message);
// 				}
// 			});
// 		});
// 	}
// }
//
// function getDataMovies(substr) {
// 	const url =
// 		'https://jsonmock.hackerrank.com/api/movies/search/?Title=' + substr;
//
//
// 	https
// 		.get(url, function(response) {
// 			response.setEncoding('utf8');
//
// 			let rawData = '';
//
// 			response.on('data', function(data) {
// 				rawData += data;
// 			});
//
// 			response.on('end', function() {
// 				try {
// 					const parsedData = JSON.parse(rawData);
// 					getAllMoviesData(substr, parsedData.total_pages);
// 				} catch (e) {
// 					console.log(e.message);
// 				}
// 			});
// 		})
// 		.on('error', function(e) {
// 			console.log(`Got error: ${e.message}`);
// 		});
// }
//
// function getMovies(substr) {
// 	getDataMovies(substr);
// }
//
// getMovies('spiderman');
