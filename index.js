const express = require("express");
const cool_ascii_faces = require("cool-ascii-faces");
const app = express();
const PORT = process.env.PORT || 16078; 

app.get("/hello", (request,response)=>{response.send(cool_ascii_faces());});

app.use("/",express.static("./static"));

app.get("/cool", (request,response)=>{response.send(cool_ascii_faces());});

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}...`);
});

console.log('finish setup'); //finish setup saldra antes que el mensaje e Server running.. porque js no espera a q 
// termine la funcion anterior

//Tenemos un servidor web operativo en menos de 20 lineas con node