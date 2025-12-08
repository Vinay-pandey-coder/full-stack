const express = require("express")
const cors = require('cors')
const path = require('path')
const app = express()

app.use(express.json())
app.use(cors())

let users = []


app.post('/add',(req,res)=>{
  let {name,password} = req.body
  if(name&&password){
      users.push(req.body)
  res.send({message:"data added successfuly"})
  }else{
    res.send({message:"enter your details"})
  }
})

app.get('/users/',(req,res)=>{
  res.json(users)
})


// app.get('/users/:id',(req,res)=>{
//   const id = req.params.id
//   res.json(users,id)
// })


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log("Server running on port", PORT)
})