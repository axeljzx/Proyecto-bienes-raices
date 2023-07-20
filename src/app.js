require('dotenv').config();
const express = require('express');
const Api = require('./routes');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 9000;

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

//Ruta principal
app.get('/',(req,res)=>{
    res.send('App Bienes Raices');
});


// const whitelist=['http://localhost:3000'];
// const options ={
//     origin:(origin,callback)=>{
//         if(whitelist.includes(origin) || !origin){
//             callback(null,true);
//         }else{
//             callback(new Error("Acceso no permitido"));
//         }
//     }
// }

//Uso de rutas
Api(app);

app.listen(PORT,()=>{
    console.log(`Corriendo en el puerto ${PORT}`);
});
