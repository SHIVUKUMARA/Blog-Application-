import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';


//components
import Connection from './database/db.js';
import Router from './routes/route.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', Router); 


const PORT = process.env.PORT || 8000;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD; 

Connection(username, password);

// static files access
app.use(express.static(join(__dirname, "./client/build")));

// call all files
app.get("*", function (req, res) {
  res.sendFile(join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));
