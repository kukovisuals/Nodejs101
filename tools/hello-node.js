// nodes build in web server module
const http = require('http')

// createserver method of the http module 
// an event handler is register to the server
const app = http.createServer((req, res) => {
	// the request is responded with a status code 200
	// with the content type header set to text/plain
	res.writeHead(200, {'content-Type': 'text/plain' })
	// content of the site to be return set to hello world
	res.end('hello world')
})

// bind http server assigned to the app
const port = 3001
// to listent to http request sen to the port 3001
app.listen(port)
console.log(`server running on port ${port}`)