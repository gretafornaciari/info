const accreditation= {
    nome: "Greta Fornaciari"
 
}
fetch('http://192.168.1.231:8080/accreditamento', {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(accreditation),
})
