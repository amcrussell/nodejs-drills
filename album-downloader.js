
const path = require('path'),
    fs = require('fs'),
    request = require('request-promise'),
    https = require('https'),
    dataPath = path.join(__dirname, "/downloads");

request("https://jsonplaceholder.typicode.com/photos", (err, res, body) => {

    if (err) return console.log(err);

    let bodyParse = JSON.parse(body);
    bodyParse.forEach(imgData => {
        if (imgData.id > 20) return;

        https.get(imgData.thumbnailUrl, img => {
            let file = fs.createWriteStream(`${dataPath}/img${imgData.id}.png`)
            img.pipe(file);
            file.on('finish', () => {
                file.close();
            })
        })
    });


});