const express = require("express")
const cors = require('cors')
const multer = require('multer')
const path = require('path')

const app = express()

app.use(express.json())
app.use(cors())

let users = []


const storage = multer.diskStorage({
  // destination: function(res,_file,cb){
  destination: function(res,file,cb){
    cb(null, path.join(__dirname, "public/images"))
  },
  filename: function(res,file,cb){
    // cb(null,Date.now() + "_" + file.originalname)
    cb(null, file.originalname)
  }
})

const upload = multer({storage})

app.post('/upload',upload.single('file'),(req,res)=>{
  console.log(req.file)
  res.json({message:"File Uploaded", file:req.file})
})


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


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log("Server running on port", PORT)
})