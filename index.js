const express = require('express')  // import
const morgan = require('morgan')
const app = express()  // object to build web
const port = 3000

app.use(morgan('combined'))

app.get('/tin-tuc', (req, res) => { // duong dan 
    res.send('Hello World!')
})

// ip 127.0.0.1 - local host
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})