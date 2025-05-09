//mongodb+srv://kumarguptaraj825:<db_password>@cluster0.dp6h28k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0


const express = require('express')
const connectDB = require('./db.js')
const itemModel = require('./models/items.js')
const cors = require('cors')

const app = express()
app.use(express.json())

connectDB()

app.get('/', async (req, res) =>{
    const items = await itemModel.find()
    res.json(items)
})

app.listen(3000, () => {
    console.log("app is running");
})