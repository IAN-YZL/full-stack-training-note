const express = require('express');
const app = express();

const ian = {
    name: "ian",
    age: 27,
    city: "Brisbane"
};

const irvin = {
    name: "Irvin",
    age:25,
    city: "Brisbane"
};

const angela = {
    name: "Angela",
    age: 29,
    city: "Sydney"
};

const people = [ian, irvin, angela];

function getPeople(req, res) {

    res.send(people);
}

function addPeople(req, res) {
    const name = req.query.name;
    const age = req.query.age;
    const city = req.query.city;
    people.push({
        name: name,
        age: age,
        city: city
    });
    res.send(people);
}

app.get("/people", getPeople);

app.get("/req", addPeople);

app.listen(3000, () => {
    console.log('server listening on port 3000');
  });