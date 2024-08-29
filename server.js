const express = require("express")
const path = require("path")
const fs = require("fs")
const server = express()

server.get("/", (req, res) => {
    if (req.url.includes("?")){
        let username = req.url.split("?")[1].split("&&&&&")[0]
        let password = req.url.split("?")[1].split("&&&&&")[1]
        fs.readFile("./users.txt", "utf8", function(err, data){
            if (err){
                throw err
            }
            if (data.toString().split("\n").findIndex((user) => user == username+"&&&"+password) !== -1){
                res.sendFile(path.join(__dirname, 'public', 'secret.html'))
            }
            else{
                res.sendFile(path.join(__dirname, 'public', 'index.html'))
            }
        })
    }
    else{
        res.sendFile(path.join(__dirname, 'public', 'index.html'))
    }
})
server.get("/login.js", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.js'))
})
server.get("/login.css", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.css'))
})

server.get("/signup/", (req, res) => {
    let username = req.url.split("?")[1].split("&&&&&")[0]
    let password = req.url.split("?")[1].split("&&&&&")[1]
    fs.appendFile("./users.txt", username+"&&&"+password+"\n", (err) => {
        if (err){
            res.json({ status: 500, message: err })
            throw err
        }
        res.json({ status: 200, message: "Success. User has been added to the system"})
    })
})

server.get("/*", (req, res) => {
    res.status(404).send("404 ERROR. File not found")
})

server.listen(80, "127.0.0.1", () => {
    console.log("Server is running on port 80")
})