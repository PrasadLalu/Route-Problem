const http = require('http');
const express = require('express');
const apiRoutes = require('./routes');

const app = express();
const PORT = 3000;

app.use(apiRoutes);

const server = http.createServer(app);
server.listen(PORT, () => console.log(`Server listening on port:${PORT}`));