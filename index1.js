 
const express = require("express")
const fetch = require("node-fetch")
const bodyParser = require("body-parser")
const app = new express()
 
app.use(bodyParser.json())
 
app.get("/accreditamento", (req,res) => {
   res.send( {"nome":"Greta",
    "cognome": "fornaciari"})
})
 
 
app.post("/somma-dispari", (req,res)=>{
  const a= req.body.numbers;
  const risultato=a.filter(elemento=> elemento % 2!=0
  )
   var sum = risultato.reduce(function(acc, el){
    return acc += el;
}, 0);
 res.send(JSON.stringify({
  "sum":sum
 }))
}
)
 
 
app.put("/lista-parole-b", (req,res)=>{
  const b= req.body.words;
  const words=b.filter(elemento=> elemento.length<4 )
  res.send(JSON.stringify({
    "count":words.length,
    "words":words.join(' ')
   }))
}
)
 
app.post("/comments", (req,res)=>{
  const c= req.body.id;
  console.log(c)
  fetch(`https://jsonplaceholder.typicode.com/posts/${c}/comments`)
    .then(response => response.json())
    .then(risp=> 
      res.send(JSON.stringify({
      "count":risp[0].body.split(" ").length, 
     }))
    )
 
}
)
 
 
app.listen(8080, () => console.log("server listening on port 8080"))





