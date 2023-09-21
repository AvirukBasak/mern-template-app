// load the environment
import path from 'path';
import { fileURLToPath } from 'url';

global.__filename = fileURLToPath(import.meta.url);
global.__dirname = path.dirname(__filename);

const Paths = {
    build: path.join(__dirname, '..', 'static'),
}

import dotenv from 'dotenv';

dotenv.config();
dotenv.config({ path: path.resolve(__dirname, './.env.local'), override: true });

import env from './.env.local.json' assert { type: 'json' };
process.env = { ...process.env, env };

// express.js code from here

import express from 'express';
import cors from 'cors';
import 'express-async-errors';

import api from './routes/api.mjs';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());

// load routes
app.use('/api', api);
app.use('/', express.static(Paths.build));

// global error handling
app.use((err, _req, res, next) => {
    res.status(403).send('Forbidden');
    res.status(404).send('Not Found');
    res.status(500).send('Internal Server Error');
});

// start the Express server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
