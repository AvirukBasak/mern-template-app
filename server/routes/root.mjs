import express from 'express';
import path from 'path';

const root = express.Router();

const Paths = {
    build: path.join(__dirname, '..', '..', 'static'),
}

root.get('(/*)?', async (req, res, next) => {
    res.sendFile(path.join(Paths.build, 'index.html'));
});

app.use(root);

export default root;
