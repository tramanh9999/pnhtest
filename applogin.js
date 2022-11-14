const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) =>{

res.send('Hello Xin moi dang nhap');

})

app.listen(port, () => {
res.send('App listen on: ${port}')
})
