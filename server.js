import path from 'node:path';
import express from 'express';

const server = express();
const PORT = process.env.VITE_PORT || 3000;

const sendStaticFile = (req, res) => res.sendFile(path.join(process.cwd(), 'dist', 'index.html'));

server.use(express.static(path.resolve(process.cwd(), 'dist')));

server.get('*', sendStaticFile);

server.listen(PORT, () => console.log(`server start in ${PORT}`));
