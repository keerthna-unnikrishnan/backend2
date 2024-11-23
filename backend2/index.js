// 1.importing
const express = require("express")

// 2.initialize
const stu = new express()
stu.use(express.json());

const stArray = [
    {name: "leena", age: 14 , Id: 1 , department: "cs"},
    {name: "angelo", age: 24 , Id: 2 , department: "socio"},
    {name: "siya", age: 4 , Id: 3 , department: "phy"},
];


// 3.api creation



stu.get('/path',(req,res)=>{
    res.send(stArray)
})

stu.post('/add',(req,res)=>{
    console.log(req.body)
    stArray.push(req.body)
    res.send("data added");
})



// delete method
stu.delete("/remove",(req,res)=>{
    stArray.pop();
    res.send("deleted successfully!!")
})

// 4.por
stu.listen(9999,()=>{
    console.log("port is running")
})

