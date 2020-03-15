const express = require('express');
const app = express();
const dnaAnalizer = require('./app');

const dna = ["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]; // Sample DNA to check

const mutant = dnaAnalizer(dna);

// console.log("Mutante: " + mutant);




app.get('/', (req, res) => {
    res.send(`Es mutante? => ${mutante}`);
});

app.get('/api/courses', (req, res) => {
   res.send([1, 2, 3]);
});


// app.listen(3000, () => console.log('Listening on port 3000...'));


/*

- Tendria que armar una clase que genere nuevas matrices


*/