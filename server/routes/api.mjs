import express from 'express';
import path from 'path';

import conn from '../lib/mongodb.mjs';
import { ObjectId } from 'mongodb';

const api = express.Router();

api.get('/', async (req, res) => {
    res.send({ status: 400, message: 'No API here at /api' }).status(400);
});

/* calling mongodb:

async function makeDatabaseQuery() {
    const db = conn.db('database');
    try {
        const data = await db.collection('collection').findOne({});
    } catch (e) {
        console.error(e);
    }
}

*/

export default api;
