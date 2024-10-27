const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const multer = require('multer')
const path = require('path')
// const upload = multer({dest: 'uploads/'})
const mongodb  = require('mongodb');


const SellerModel = require('./model/seller')
const userModel = require('./model/users')
const SellerPageModel = require('./model/sellerpage')
const OrderModel = require('./model/orders')





const app = express()
app.use(express.json())
app.use(cors())

// <<<<<<< HEAD
// mongoose.connect("mongodb://localhost:27017/seller");
// =======
app.use(express.static('public'));

// mongoose.connect("mongodb://localhost:27017/sellerpage");
// mongoose.connect("mongodb://localhost:27017/seller");
// >>>>>>> f6d6d46d9d41f6f5d7c0188692e73bd660534f3f


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/Images')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage
})

// image + details upload
app.post('/sellerpage', upload.single('file'), (req, res) => {

    // console.log(req.file)
    // console.log(req.file.filename)

    SellerPageModel.create({
        image: req.file.filename,
        itemName: req.body.itemName,
        itemPrice: req.body.itemPrice,
        itemDescription: req.body.itemDescription,
        // file: req.file.filename,  

    })
        .then(Sellerpage => res.json(Sellerpage))
        .catch(err => res.json(err))

});

//-------for geting productitems-------
app.get('/getImage', (req, res) => {
    SellerPageModel.find()
        .then(sellerpage => res.json(sellerpage))
        .catch(err => res.json(err))
})
// -------------for getting orders---------------
app.get('/order', (req, res) => {
    OrderModel.find()
        .then(orders => res.json(orders))
        .catch(err => res.json(err))
})


app.post("/sellerlogin", (req,res)=>{
    const {email, password} = req.body;
    SellerModel.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password){
                //  res.json("Success")
                res.send("Success")

            }
            else{
                res.json("the password is incorrect")
            }
        }
        else{
            res.json("No record existed!")
        }
    })
})


// user
app.get("/user", (req, res) => {
    // const {email, password} = req.body;
    userModel.find()
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

app.post('/orders', (req, res)=>{
    OrderModel.create({
       selectedItems:req.body.selectedItems,
       totalpay: req.body.totalpay,
        name: req.body.name, 

    })
    .then(orders=>res.json(orders))
    .catch(err=> res.json(err))
})

// DELETE route to delete data
app.delete('/delete/:id', async (req, res) => {
    const itemId = req.params.id;
    // console.log(itemId)
    const result = await SellerPageModel.deleteOne({_id: new mongodb.ObjectId(itemId) });
   
    try {
      if (result.deletedCount === 1) {
        res.status(200).json({ message: 'Data deleted successfully' });
      } else {
        res.status(404).json({ error: 'Item not found' });
      }
    }
     catch (err) {
      res.status(500).json({ error: 'Error deleting data' });
    }
  });


// app.post('/register', async (req, res)=>{
// const {name, email, password}  = req.body;

app.post('/register', (req, res)=>{
    SellerModel.create(req.body)
    .then(seller=>res.json(seller))
    .catch(err=> res.json(err))
})

    SellerModel.create(req.body)
      .then(seller=>res.json(seller))
      .catch(err=> res.json(err))

//------------------using collection on the basis of seller name---------


app.listen(3000, () => {
    console.log("server is running! ")
})