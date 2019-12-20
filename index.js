//console.log("hello world!")
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static('frontend'))

app.get('/', (req, res) => res.sendFile(__dirname+'/frontend/html/home.html'))
app.get('/login', (req, res) => res.send('login'))
app.get('/register', (req, res) => res.send('Register'))
app.get('/data', (req, res) => res.json(student1))

var student = {name: "supraja",college: "VNRVJIET", regno: "1243"}
var student1 = {name: "hritik",college: "VNRVJIET", regno: "1243"}


app.listen(port, () => console.log(`Example app listening on port ${port}!`))        