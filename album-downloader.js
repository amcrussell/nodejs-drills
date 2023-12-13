
const path = require('path'),
      fs = require('fs'),
      request = require('request-promise'),
      dataPath = path.join(__dirname, "/downloads");

request("https://jsonplaceholder.typicode.com/photos", (err, res, body) => {

    if (err) return console.log(err);

    let bodyParse = JSON.parse(body);
    bodyParse.forEach(e => {
        if (e.id >10) return
        request(e.thumbnailUrl, (err, res, body) => {
            if (err) return console.log(err);
            fs.createReadStream(e.thumbnailUrl)
            fs.writeFileSync(`${dataPath}/img${e.id}.png`, body, { encoding: 'base64' });
        });
    });
    

});