
const path = require('path');
const fs = require('fs');

const dataPath = path.join(__dirname, '../chirps.json');

let chirps = [{chirp: 'Chirp: 1'}, {chirp: 'Chirp: 2'}, {chirp: 'Chirp: 3'}, {chirp: 'Chirp: 4'}, {chirp: 'Chirp: 5'}];


chirps.forEach(e => {
    console.log(dataPath);
    fs.appendFileSync(dataPath, e.chirp + '\n');

});


fs.readFile(dataPath ,(err, e) => {
    console.log(e.toString());
})