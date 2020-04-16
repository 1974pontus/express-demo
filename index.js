const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

let idIndex = 5
const guitars = [
    {
        id: 1,
        brand: "Gibson",
        model: "Les paul",
        pickups: "Humbucker",
        color: "Goldtop",
        year: 1958
    },
    {
        id: 2,
        brand: "Gibson",
        model: "Explorer",
        pickups: "Humbucker",
        color: "Corina",
        year: 1976
    },
    {
        id: 3,
        brand: "Fender",
        model: "Stratocaster",
        pickups: "Single coil",
        color: "Fiesta red",
        year: 1962
    },
    {
        id: 4,
        brand: "Mosrite",
        model: "Mark 1",
        pickups: "Smooth",
        color: "White Pearloid",
        year: 1964
    }
]


//routes
app.get('/api/guitars', (req, res) => {
    res.json(guitars)
})

app.get('/api/guitars/:id', (req, res) => {
    const guitar = guitars.find(g => g.id === parseInt(req.params.id))
    if (!guitar) res.status(404).send('The guitar with the given ID was not found:(')
    res.json(guitar)
})

app.post('/api/guitars', (req, res) => {
    if (req.body.year > 1999) {
        res.status(400).send('Guitars in vintage Wishlist must be older than that!')
        return
    }
    console.log("body", req.body)
    const guitar = { id: idIndex++, ...req.body}
    guitars.push(guitar)
    res.status(201)
    res.send()
})




app.put('/api/guitars/:id', (req, res) => {
    const guitar = guitars.find(g => g.id === parseInt(req.params.id))
    if (!guitar) res.status(404).send('The guitar with the given ID was not found:(')
    res.send()
})




app.delete('/api/guitars/:id', (req, res) => {
    const guitar = guitars.find(g => g.id === parseInt(req.params.id))
    if (!guitar) res.status(404).send('The guitar with the given ID was not found:(')

    const index = guitars.indexOf(guitar)
    guitars.splice(index, 1)

    res.send(guitar)
})


app.use(express.static('public'))


app.listen(port, () => console.log(`Server listening at http://localhost:${port}/api/guitars`))