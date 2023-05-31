const express = require ('express');
const mongoDB = require ('mongodb');

const bodyParser = require ('body-parser');
const cors = require ('cors');

const app= express();

app.use(express.json());


