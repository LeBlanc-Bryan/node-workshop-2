var request = require('request');
request('http://www.google.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage. 
  }
})

function requestJson(url, callback) {
    request(url, function (err, response) {
        if (err) {
            callback(err, response);
        }
        else {
            try {
              var goog = JSON.parse(response);
              callback(null, goog);
            }
            catch(err) {
                callback(err);
            }
        }
    })
}   

module.exports = requestJson;