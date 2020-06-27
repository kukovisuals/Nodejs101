// nodes build in web server module
const express = require('express')
// express application store in app variable
const app = express()

//access data wiht json parser
app.use(express.json())
// console.log(app)
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
    "image": "03.jpg"
  },
  {
    "work": [
      "branding"
    ],
    "title": "federico",
    "description": "photography",
    "image": "fercho.jpg",
    "id": 4
  },
  {
    "work": [
      "branding"
    ],
    "title": "care berga",
    "description": "photography",
    "image": "verga.jpg",
    "id": 5
  },
  {
    "work": [
      "branding"
    ],
    "title": "rick ross",
    "description": "photography",
    "image": "ross.jpg",
    "id": 6
  },
  {
    "work": [
      "branding"
    ],
    "title": "calors",
    "description": "photography",
    "image": "fotos.jpg",
    "id": 8
  }
]
app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/api/portfolio', (req, res) => {
  res.json(portfolio)
})

const generateId = () => {
  const maxId = portfolio.length > 0
    ? Math.max(...portfolio.map(n => n.id))
    : 0
  return maxId + 1
}

app.post('/api/portfolio', (request, response) => {
  const body = request.body
  console.log(body.title)
  if (!body.title) {
    return response.status(400).json({ 
      error: 'title missing' 
    })
  }

  const getPorfolio = {
    title: body.title,
    description: body.description,
    image: body.image,
    id: generateId(),
  }

  portfolio = portfolio.concat(getPorfolio)

  response.json(getPorfolio)
})

app.get('/api/portfolio/:id', (request, response) => {
  const id = Number(request.params.id)
  const getPorfolio = portfolio.find(getPorfolio => getPorfolio.id === id)
  if (getPorfolio) {
    response.json(getPorfolio)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/portfolio/:id', (request, response) => {
  const id = Number(request.params.id)
  portfolio = portfolio.filter(getPorfolio => getPorfolio.id !== id)

  response.status(204).end()
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})




