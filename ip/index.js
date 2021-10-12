const port = 8000
const express = require('express')
const app = express()
app.use(express.json())

app.get('/', function (req, res) {
  let ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
  console.log(req.socket)
  res.send(ip)
})
app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
