import express from 'express';
import cors from 'cors';
import 'express-async-errors';

import './loadEnv.mjs';
import api from './routes/api.mjs';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());

// load routes
app.use('/api', api);
app.use('/', express.static(PATHS.build));

// global error handling
app.use((err, _req, res, next) => {
    res.status(403).send('Forbidden');
    res.status(404).send('Not Found');
    res.status(500).send('Internal Server Error');
});

// start the Express server
app.listen(PORT, () => {
    console.log(`Server is running at 'http://localhost:${PORT}'`);
});
