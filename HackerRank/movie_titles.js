const https = require('https')

function getAllMoviesData(substr) {
  const titles = [];
  let pageIdx = 1;
  return new Promise((resolveOuter, rejectOuter) => {


    const _getAllMoviesData = function (substr, pageIdx) {
      return new Promise((resolveInner, rejectOuter) => {
        const url = `https://jsonmock.hackerrank.com/api/movies/search/?Title=${substr}&page=${pageIdx}`;
        let rawData = '';

        const getCallback = function(response) {
          response.on('data', function(data) {
            rawData += data;
          });

          response.on('end', function() {
            const parsedData = JSON.parse(rawData);
            const movies = parsedData.data;
            movies.forEach(movie => titles.push(movie.Title))

            if (pageIdx < parsedData.total_pages) {
              pageIdx += 1;
              _getAllMoviesData(substr, pageIdx).then(() => {
                resolveInner(titles)
              });
            } else {
              resolveInner(titles)
            }

          });
        }
        https.get(url, getCallback);
      })
    }

    _getAllMoviesData(substr, pageIdx).then(result => resolveOuter(result));

  });
};
getAllMoviesData('spiderman').then((result)=> console.log("Movie Titles: ", result));

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
