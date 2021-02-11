const express = require("express")
const fetch = require("node-fetch")
const bodyParser = require("body-parser")
const app = new express()
const port = 8080
 
app.use(bodyParser.json())
 
app.get("/accreditamento", (req, res) => {
    res.json({"nome": "Greta", "cognome": "Fornaciari"})
})
 
 
app.post("/somma-multipli", (req, res) => {
    const array = req.body.numbers
    const n = req.body.n
    const sum = array.filter(e => e % n === 0 && e != 0).reduce((acc, e) => acc += e, 0)
    res.json({"result": sum})
})
 
 
app.put("/lista-vocali", (req, res) => {
    const words = req.body.words
    const parolepari = words.filter(e => e[0] === "a" || e[0] === "e" || e[0] === "i" || e[0] === "o" || e[0] === "u")
    res.json({"words": parolepari})
})
 
 
app.post("/comments", (req, res) => {
    const id = req.body.id
    const ids = []
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(res => res.json())
        .then(comments => {
            for (i of comments){
                if (((i.body.replace(/\n/g, " ").split(" ").length) - 1) % 2)
                ids.push(i.id)
            }
            res.json({"ids":ids})
        })
})
 
 
app.listen(port, () => console.log(`App listening on port ${port}`))
