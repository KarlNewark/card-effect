const express = require('express');
const open = require('open');
const ip = require("ip");
const app = express()
const port = 3000

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Example app listening at http://${ip.address()}:${port}`)
    open(`http://${ip.address()}:${port}`)
})

