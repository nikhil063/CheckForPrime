const express = require('express')
const app = express();
const PORT = 3000;
const {prime} = require("./prime");

app.get("/home", (req, res)=>{
    res.send("hello user!<br> navigate to <b>/prime</b> and pass the number <b>n</b> in query to check if it is prime number")
})


app.get("/prime", (req, res)=>{
    let n = req.query.n;
    answer = prime(n);
    res.send(`${n} is ${answer}`)
});

app.listen(PORT, ()=>{
    console.log("server is runninng")
})

