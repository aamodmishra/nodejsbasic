const express = require('express')
const app = express()
const port = 3000
const userModel = require('./usermodel')

app.get('/', (req, res) => {
  res.send('Hello World!')


})

app.get ('/create',async (req,res)=>{

  let createduser = await userModel.create({
    name :'aamod',
    username :'aamodmishra',
    email :"aamodmishra11@gmail.com",
   })
   res.send(createduser);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
