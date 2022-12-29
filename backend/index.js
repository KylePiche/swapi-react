const express = require('express');
const cors = require('cors');
const axios = require('axios').default;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res)=>{
    res.send('Hello World');
});

//Route to get list of people
app.get("/people",async(req, res)=>{
    axios.get("https://swapi.dev/api/people/")
    .then((response)=>{
        res.send(response.data);
    });
});

//Route for list of planets
app.get("/planet",async(req, res)=>{
    axios.get("https://swapi.dev/api/planets/")
    .then((response)=>{
        res.send(response.data);
    });
});

//Route for list of starships
app.get("/starship",async(req, res)=>{

    axios.get("https://swapi.dev/api/starships/")
    .then((response)=>{
        res.send(response.data);
    });
});

//Route to search for a person
app.post("/people",async(req, res)=>{

    axios.get(`https://swapi.dev/api/people/?search=${req.body.name}`)
    .then((response)=>{
        res.send(response.data);
    });
});

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`Open on port ${port}...`);

});

