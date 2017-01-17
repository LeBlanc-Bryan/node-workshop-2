var request = require('request');

function requestJson(url, callback) {
    request(url, function (err, response) {
        if (err) {
            callback(err, null);
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