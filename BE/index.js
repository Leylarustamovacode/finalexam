import express from "express"
import cors from "cors"
import mongoose from "mongoose"


const app = express()
const port = 3000


app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://LeylaRustamova:LeylaRustamova@cluster0.jhalvrd.mongodb.net/')
.then(()=>console.log("connected"))
.catch(()=>console.log("not connected"))

const productSchema = new mongoose.Schema({
    image:String,
  name: String,
  information:String,
  price:String
});
const Product = mongoose.model('Product', productSchema);

app.get('/product', async(req, res) => {
const product=await Product.find()
  res.send(product)
})
app.get('/product/:id', async(req, res) => {
    const {id}=req.params
const product=await Product.findById(id)
  res.send(product)
})
app.delete('/product/:id', async(req, res) => {
     const {id}=req.params
const product=await Product.findByIdAndDelete(id)
  res.send(product)
})
app.post('/product', async(req, res) => {
     const {body}=req
const product=await Product.create(body)
  res.send(product)
})
app.post('/product/:id', async(req, res) => {
     const {id}=req.params
     const {body}=req
const product=await Product.findByIdAndUpdate(id,body)
  res.send(product)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})