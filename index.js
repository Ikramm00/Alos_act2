const express = require('express')
const app = express()
const Donneurs = require('db.json')


app.use(express.json())

app.get('/devises', (req,res) => {
    res.status(200).json(devises)
})

app.get('/devises/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const devises = devises.find(devises => devises.id === id)
    res.status(200).json(devises)
})


app.post('/devises', (req,res) => {
  devises.push(req.body)
  res.status(200).json(devises)
})

app.delete('/devises/:id', (req,res) => {
  const id = parseInt(req.params.id)
  let devises = devises.find(devises => devises.id === id)
  devises.splice(devises.indexOf(devises),1)
  res.status(200).json(devises)
})

app.get('/devises', (req,res) => {
  res.status(200).json(devises)
})

app.get('/devises/:id', (req,res) => {
  const id = parseInt(req.params.id)
  const devises = devises.find(devises => devises.id === id)
  res.status(200).json(devises) 
})

app.listen(8080, () => {
    console.log('Serveur à l ecoute')
  })