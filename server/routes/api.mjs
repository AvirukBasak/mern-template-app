import express from 'express';

import conn from '../lib/mongodb.mjs';
import { ObjectId } from 'mongodb';

const api = express.Router();

api.get('/', async (req, res) => {
    res.send({ status: 400, message: 'No API here at /api' }).status(400);
});

async function makeDatabaseQuery() {
    const db = conn.db('demo');
    try {
        const data = db.collection('demo').find().toArray();
        return data;
    } catch (e) {
        console.error(e);
    }
    return null;
}

api.get('/xyz', async (req, res) => {
    res.json(await makeDatabaseQuery());
});

export default api;
