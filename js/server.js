const express = require('express');
const app = express();
const servestatic = require('serve-static');

app.use(servestatic("."));

app.get('/sheep', (req, res) => processData().then((data) => {
  res.send(data); 
}));

app.listen(3001, () => console.log('Example app listening on port 3001!'))

function processData() {
    var csv = require("csv-query");
    var numbers;
    var promise = new Promise((resolve, reject) => { csv.createFromFile(
        "livestock-data.csv"
      ).then(function (db) {
        numbers = db.find( { Livestock: 'Total sheep' } );
        numbers = numbers.value();
        population = numbers[numbers.length-1];
        resolve(population.Value);
      }).then(function (record) {
        // Do some stuff
      }).catch(function (error) {
        throw error;
    })}).catch(function (error) {
      throw error;
    });
    return promise;
  }
