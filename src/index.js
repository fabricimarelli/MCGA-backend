//Levanto el servidor--------------------
//require("dotenv").config();//libreria donde guardo la variable de entorno
const express = require('express');
const port=3000;
const url='mongodb+srv://fabricimarelli:fabrizio@clustermcga.6d3nnhp.mongodb.net/?retryWrites=true&w=majority'

const app = express();
const mongoose = require('mongoose');
const router = require("./routes");

app.set("json spaces", 2);
app.use(express.json());
app.use(express.static("public"));
app.use(router);


//const products = require('../data/productos.json')


//mongoose.connect(process.env.DATABASE_URL)//conecto con la base de datos
mongoose.connect(url)
  .then(() => {
    console.log("🟢 DB Connected");
    app.listen({ port: process.env.PORT }, () => {
      console.log(`🚗 Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("🔴 There was an error on the DB connection method.");
    console.log(err);
  });

  //app.use(express.json());



// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

/*function suma(n1,n2){//funcion suma
    return n1+n2;
}

const sum=(n1,n2)=>{//similar a la funcion suma
    return n1+n2;
}kk
*/

/*app.get('/products/',(req,res)=>{
    //const filterID=products.filter(x=>x.id==req.params.id)
    res.json(products)
})*/

// app.get("/products/", (req, res)=>{
//   res.json(products)
// })

// app.post("/products/add", (req, res)=>{
//   console.log(req.body);
//   const newProd={
//     id: req.body.id,
//     name:req.body.name,
//     price: req.body.price,
//   };

//   if(!newProd.id){
//     res.sendStatus(400);
//   }
//   products.push(newProd);
//   fileSistem.writeFile("./data/products.json", JSON.stringify(products), (err)=>{
//     //if (err)
//   });
//   res.json(newProd);
// });


/*
app.get('/products/name:name', (req, res) => {
  res.json(products);
   res.json({
     id:2,
     name: req.params.id
   })
 })*/