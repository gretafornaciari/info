var express = require("express")

const fetch = require('node-fetch');

const app = express()
app.use(express.json());


fetch("http://192.168.1.231:8080/accreditamento/",
{
    method: "POST",
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify({"nome":"Lorenzo Biagi"})
})

fetch("http://192.168.1.231:8080/esercizi/1",
{
    method: "GET",
    headers:{'x-data': 'true'},
    
}).then(res=>res.json())
.then(data=>
fetch("http://192.168.1.231:8080/esercizi/1",
{
    method: "POST",
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify({"data":data.data.filter(e=>e%3 === 0)})
}))


fetch("http://192.168.1.231:8080/esercizi/2",
{
    method: "GET",
    headers:{'x-data': 'true'},
    
}).then(res=>res.json())
.then(data=>
    {
    const ris=data.data.filter(e=>e[e.length-1] === "E").map(e=>e.toLowerCase())
    fetch("http://192.168.1.231:8080/esercizi/2",
    {
    method: "POST",
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify({"data":ris})
    })
})

fetch("http://192.168.1.231:8080/esercizi/3",
{
    method: "GET",
    headers:{'x-data': 'true'},
    
}).then(res=>res.json())
.then(data=>
    {
    const ris=data.data.filter(e=>e.length<5)
    let riss=0
    ris.forEach(e => {riss+=e.length
        
    });
    console.log(ris)
    fetch("http://192.168.1.231:8080/esercizi/3",
    {
    method: "POST",
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify({"data":riss})
    }).then(data=>data.json()).then(res=>console.log(res))
})

var port = 8080

app.listen(port)
