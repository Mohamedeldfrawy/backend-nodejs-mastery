// Q1  Create 
let fs= require("fs");
fs.writeFileSync("notes.txt"," notes.Node.js!")
// Append newline
fs.appendFileSync('notes.txt',"\nLearning fs module")
// read 


let read= fs.readFileSync('notes.txt',"utf8");
// delete
console.log(read);
delete 
fs.unlink('notes.txt',(remove)=>{

    console.log(remove,"right now delete your file");
})

// Q2
let os=require("os");
 console.log(os.arch())
 console.log(os.platform())
 console.log(os.totalmem())
 console.log(os.hostname())
 console.log(os.uptime())


// Q3

let http = require("http")
let server= http.createServer((request,respone)=>{

    respone.end("welcome to in the fris server")
})
server.listen(3000,()=>{

    console.log("server is runing");
    
})
