
const path = require('path');
const fs = require('fs');
const request = require('request-promise');

const dataPath = path.join(__dirname, "/phonebook.json");
fs.writeFileSync(dataPath, '[\n');

request("https://jsonplaceholder.typicode.com/users", (err, res, body) => {

    if(err) return console.log(err);

    let c = JSON.parse(body);
    c.forEach(e => {
        if(c.length != e.id)
            fs.appendFileSync(dataPath ,`{\n"id": "${e.id}",\n"email": "${e.email}",\n"website": "${e.website}",\n\"name\": "${e.name}"},\n`);
        else
            fs.appendFileSync(dataPath ,`{\n"id": "${e.id}",\n"email": "${e.email}",\n"website": "${e.website}",\n\"name\": "${e.name}"\n}`);
    });

}).then(()=>fs.appendFileSync(dataPath, '\n]'));

