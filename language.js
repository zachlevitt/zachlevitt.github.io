var url = 'http://newsapi.org/v2/everything?' +
          'q=protest&Minneapolis' +
          'from=2020-05-29&' +
          'sortBy=popularity&' +
          'apiKey=6b2e30b613ad4d8e9890023e51aaad76';

var req = new Request(url);

fetch(req)
    .then(function(response) {
        console.log(response.json());
    })