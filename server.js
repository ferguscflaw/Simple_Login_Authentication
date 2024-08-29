const express = require("express")
const path = require("path")
const fs = require("fs")
const server = express()

server.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})
server.get("/login.js", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.js'))
})
server.get("/login.css", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.css'))
})

server.get("/*", (req, res) => {
    res.status(404).send("404 ERROR. File not found")
})

server.listen(80, "127.0.0.1", () => {
    console.log("Server is running on port 80")
})