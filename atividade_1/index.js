// ## Importe a biblioteca ##

let rs = require('readline-sync')


// ## Faça o código ##

let numVoo = rs.question("Qual é o número do seu voo? \n")

let fileira = rs.question("Em qual você deseja sentar? \n")

console.log("--------------------------------------------------")

console.log("Cartão de embarque para o voo de número " + numVoo)

console.log("Você sentará na fileira " + fileira)

console.log("--------------------------------------------------")