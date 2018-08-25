var express = require('express');


function processData() {
    var csv = require("csv-query");
    var numbers;
    csv.createFromFile(
      "../livestock-data.csv"
    ).then(function (db) {
      numbers = db.find( { Livestock: 'Total sheep' } );
      numbers = numbers.value();
      population = numbers[numbers.length-1];
      console.log(population.Value);
    }).then(function (record) {
      // Do some stuff
    }).catch(function (error) {
      throw error;
    });
  }

  processData();