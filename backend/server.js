const express = require("express")
const cors = require('cors')
const { MongoClient, ObjectId } = require("mongodb")

const app = express()

app.use(express.json())
app.use(cors())

const url = 'mongodb+srv://abhi837688_db_user:pandey@cluster0.wyqtfhv.mongodb.net/?appName=Cluster0'
const client = new MongoClient(url)

let db;


async function connectDB(){
  await client.connect()
  console.log("mongodb connected")
  db = client.db('formdb')
}

connectDB()


app.post('/add',async(req,res)=>{
  let {name,password} = req.body
  if(name&&password){
      await db.collection('user').insertOne({
        name,
        password
      })
    res.send({ message: "data added successfully" })
  } else {
    res.send({ message: "enter your details" })
  }
})

app.delete('/delete/:id',async(req,res)=>{
    const {id} = req.params
    const result = db.collection('user').deleteOne({
      _id:new ObjectId(id)
    })
    if (result.deletedCount === 1) {
    res.send({ message: "data deleted successfully" })
  } else {
    res.send({ message: "data not found" })
  }
})


app.get('/users/',async(req,res)=>{
  const users = await db.collection('user').find().toArray()
  res.json(users)
})


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log("Server running on port", PORT)
})