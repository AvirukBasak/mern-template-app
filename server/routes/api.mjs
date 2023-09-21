import express from 'express';
import path from 'path';

// import clientPromise from '../lib/mongodb.mjs';
import { ObjectId } from 'mongodb';

const api = express.Router();

api.get('/', async (req, res) => {
    res.send({ status: 400, message: 'No API here at /api' }).status(400);
});

/* calling mongodb:

async function makeDatabaseQuery() {
    const client = await clientPromise;
    const db = client.db('database');
    try {
        const data = await db.collection('collection').findOne({});
    } catch (e) {
        console.error(e);
    }
}

*/

export default api;
