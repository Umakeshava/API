const express = require('express')
const app = express();

app.get('/', (req, res) => {
  res.send('Good Morning one and all !!!')
})

app.listen(3000,()=>console.log('Server running...'))
