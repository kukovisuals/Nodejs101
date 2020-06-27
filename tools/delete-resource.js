// nodes build in web server module
const express = require('express')
// express application store in app variable
const app = express()

let portfolio = [
  {
    "id": 3,
    "work": [
      "branding"
    ],
    "title": "baby ghost",
    "description": "photography",
    "color-title": "white",
    "color-desciprtion": "white",
    "image": "images/portfolio/grid/03.jpg"
  },
  {
    "work": [
      "branding"
    ],
    "title": "federico",
    "description": "photography",
    "image": "images/portfolio/grid/fercho.jpg",
    "id": 4
  },
  {
    "work": [
      "branding"
    ],
    "title": "care berga",
    "description": "photography",
    "image": "images/portfolio/grid/verga.jpg",
    "id": 5
  },
  {
    "work": [
      "branding"
    ],
    "title": "rick ross",
    "description": "photography",
    "image": "images/portfolio/grid/ross.jpg",
    "id": 6
  },
  {
    "work": [
      "branding"
    ],
    "title": "calors",
    "description": "photography",
    "image": "images/portfolio/grid/fotos.jpg",
    "id": 8
  }
]

// define 2 routes to our application

// 1 @route defines an event handler to handle HTTP request made to the /root directory
// request = contains all information on the HTTP request
// response = define how the request is responded
app.delete('/api/portfolio/:id',(req, res) => {
		const id = Number(req.params.id)
		portfolio = portfolio.filter(portfo => portfo.id === id)

		res.status(204).end()
	console.log('portfolio = ',portfo)


})

// 2 @route defines an event handler, that handles HTTP GET request 
// made to the portfolio path of the application
app.get('api/portfolio', (req, res) => {
	// the request is responded to with the json method of the response object
	// calling the method will send the portfolio that was past to it as a json format string 
	// express automatically set the content-type header to the value of application/json
	res.json(portfolio)
})

// bind http server assigned to the app
const PORT = 3001
// to listent to http request sen to the port 3001
app.listen(PORT, () => {
	console.log(`Server running on port: ${PORT} `)
})






