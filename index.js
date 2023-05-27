const express = require('express')  // import
const app = express()  // object to build web
const port = 3000

app.get('/', (req, res) => { // duong dan 
    res.send('Hello World!')
})

// ip 127.0.0.1 - local host
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})