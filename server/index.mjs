import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import 'express-async-errors';

import api from './routes/api.mjs';
import root from './routes/root.mjs';

dotenv.config();
dotenv.config({ path: '.env.local', override: true });

const Paths = {
    build: path.join(__dirname, '..', 'static'),
}

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());

// load routes
app.use('/api', api);
app.use('/', root);

// global error handling
app.use((err, _req, res, next) => {
    res.status(403).send('Forbidden');
    res.status(404).send('Not Found');
    res.status(500).send('Internal Server Error');
});

app.use(express.static(Paths.build));

// start the Express server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
