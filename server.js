

const express = require('express')
const app = express()
//const port = 3000
const port = process.env.PORT || 3001;
app.get('/', (req, res) => res.send('Hello World! Mohammed zeyad ^_^'))




app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))





