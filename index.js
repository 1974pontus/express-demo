const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')

app.use(express.json())
let data = fs.readFileSync('./guitars.json')
let guitars = JSON.parse(data)




//routes
app.get('/api/guitars', (req, res) => {
    res.send(guitars)
})

app.get('/api/guitars/:id', (req, res) => {
    // let data = fs.readFileSync('./guitars.json')
    // let guitars = JSON.parse(data)
    const guitar = guitars.find(g => g.id === parseInt(req.params.id))
    if (!guitar) res.status(404).send('The guitar with the given ID was not found:(')
    res.send(JSON.stringify(guitar))
})

app.post('/api/guitars', (req, res) => {
    let idIndex = 5
    // let data = fs.readFileSync('./guitars.json')
    // let guitars = JSON.parse(data)
    if (req.body.year > 1999) {
        res.status(400).send('Guitars in vintage Wishlist must be older than that!')
        return
    }
    console.log("body", req.body)
    const guitar = { id: idIndex++, ...req.body}
    guitars.push(guitar)
    res.status(201)
    fs.writeFileSync('./guitars.json', JSON.stringify(guitars, null, 2));
    res.send()
})




app.put('/api/guitars/:id', (req, res) => {
    // let data = fs.readFileSync('./guitars.json')
    // let guitars = JSON.parse(data)
    const guitar = guitars.find(g => g.id === parseInt(req.params.id))
    if (!guitar) res.status(404).send('The guitar with the given ID was not found:(')
    res.send()
})




app.delete('/api/guitars/:id', (req, res) => {
    // let data = fs.readFileSync('./guitars.json')
    // let guitars = JSON.parse(data)
    const guitar = guitars.find(g => g.id === parseInt(req.params.id))
    if (!guitar) res.status(404).send('The guitar with the given ID was not found:(')

    const index = guitars.indexOf(guitar)
    guitars.splice(index, 1)
    fs.writeFileSync('./guitars.json', JSON.stringify(guitars, null, 2));
    res.send(guitar)
})


app.use(express.static('public'))


app.listen(port, () => console.log(`Server listening at http://localhost:${port}/api/guitars`))