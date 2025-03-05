require('dotenv').config();
const express = require('express');
const cors = require('cors');
const route = require('./Routes/routes');
require('./Connection/db');


const server = express();

server.use(cors());
server.use(express.json());
server.use(route);


const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log('Server running at', PORT);
});

server.get('/',(req,res)=>{
    res.send("<h1> Welcome Express Server </h1>")
})