//en json son paquetes para pasarlo en cualquier pc

//require  es para importar componentes, controladores , dependencias, etc.
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require ('dotenv');
const app = express();
dotenv.config();


const options ={
    useNewUrlParser: true,
    autoIndex: true,
    keepAlive: true,
    connectTimeoutMS:10000,
    socketTimeoutMS: 45000,
    family: 4,
    useUnifiedTopology: true
}

mongoose.connect(process.env.DB,options,(error)=>{
    if(error){
        console.log(error);
    }else{
        console.log("Connected to database")
    }

})




//la funcion "flecha"  es una funcion comun y corriente que puede llamarse
//el 3000 es el puerto
app.listen(process.env.PORT,()=>
{
console.log(`Server started on port ${process.env.PORT}`);
})





