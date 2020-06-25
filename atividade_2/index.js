// ## Importe a biblioteca ##

let rs = require('readline-sync')

// ## Faça o código ##

let usuarioMascara = rs.question("Você está usando máscara?(S/N)")

let usuarioMaos = rs.question("Você está lavando as mãos com bastante frequência?")



//condição if e else
/* if (usuarioMascara ==="S" && usuarioMaos === "S") {
    console.log("Parabéns!!Você está se cuidando, e cuidando dos outros ao seu redor!!")
} else {
    console.log ("Você tem que se respeitar e também as pessoas ao seu redor, tenha mais cuidado e siga as instruções do Ministério da Saúde!")
}
 */



// switch case...
 switch(usuarioMascara) {
    case "S":
        usuarioMaos === "S" ? console.log("Parabéns!!Você está se cuidando, e cuidando dos outros ao seu redor!!") : console.log("Você tem que se respeitar e também as pessoas ao seu redor, tenha mais cuidado e siga as instruções do Ministério da Saúde!");
    break;
    default: console.log("Você tem que se respeitar e também as pessoas ao seu redor!!")
    break;
}