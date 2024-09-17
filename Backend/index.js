import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import multer from "multer";
import path from 'path';

const app=express()

app.use(express.json())
app.use(cors())
const port=4000;

//database connection with mongodb
mongoose.connect("mongodb+srv://Roomaan:RoomaN18@cluster0.8rwua.mongodb.net/online-market")


app.get('/',(req,res)=>{
    res.send("running.....")
})

//image storage
const storage=multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload=multer({storage:storage})

//upload endpoint
app.use('/images',express.static('upload/images'))
app.post('/upload',upload.single('product'),(req,res)=>{
   res.json({
    success:1,
    image_url:`http://localhost:${port}/images/${req.file.filename}`
   })
})



//schema
const Product=mongoose.model("Product",{
    id:{
        type:Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },    
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    available:{
        type:Boolean,
        default:true
    }
})


app.post('/addproduct',async (req,res)=>{
    let products=await Product.find({});
    let id;
    if(products.length>0){
        let last_product_array=products.slice(-1);
        let last_product=last_product_array[0]
        id=last_product.id+1
    }
    const product=new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        price:req.body.price,
        description:req.body.description
    })
    console.log(product)
    await product.save();
    console.log("saved");
    res.json({sucess:true,name:req.body.name})
})

//remove
app.post('/deleteproduct',async (req,res)=>{

    await Product.findOneAndDelete({id:req.body.id})
    console.log("product removed")
    res.json({sucess:true,message:"product removed"})
})

//display products

app.get('/allproducts',async (req,res)=>{
    let products=await Product.find({})

    console.log("all products fetched")

    res.send(products)
})



//api creation
app.listen(port,(req,res)=>{
    console.log('server is running.....')
})