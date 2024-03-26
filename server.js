const http = require('http');
const path = require('path');
const serveStatic = require('http-server');

const server = serveStatic.createServer({
  root: path.resolve(__dirname),
  robots: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
  }
});

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
