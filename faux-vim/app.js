import http from 'http';

const hostname = '0.0.0.0';
const port = 8080;

const server = http.createServer((req, res) => {
	if (req.url === '/copilot_internal/v2/token') { // adiciona o endpoint /copilot_internal/v2/token
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify({ 'token': '1', 'expires_at': 2600000000, 'refresh_in': 900 }));
		console.log(`${req.url} | ${res.statusCode}`)
	} else {
		res.statusCode = 404;
		res.end();
		console.log(`${req.url} | ${res.statusCode}`)
	}
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
