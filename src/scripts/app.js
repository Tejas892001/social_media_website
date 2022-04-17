const express = require("express");
const app = express();
const port = 3000;
 
app.get("/", (req, res)=>{ 
    res.sendFile("/home/satyam/Desktop/socialProject/social_media_website/src/Webpages/signup.html")
});

app.get("/signup", (req, res)=>{
    res.sendFile("/home/satyam/Desktop/socialProject/social_media_website/src/Webpages/form.html")
});

app.post("/home", (req, res)=>{
    res.send("Home Page");
});

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
