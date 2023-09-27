import express from 'express';

import conn from '../lib/mongodb.mjs';
import { ObjectId } from 'mongodb';

const api = express.Router();
const db = conn.db(process.env.DATABASE_NAME);

api.get('/', async (req, res) => {
    res.status(400).json({ message: 'No API here at /api' }).end();
});

api.get('/xyz', async (req, res) => {
    const data = await db.collection('demo').find().toArray();
    res.status(200).json(data).end();
});

export default api;
