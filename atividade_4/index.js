// ## Importe a biblioteca ##

let rs = require('readline-sync')


// ## Faça o código ##

let dia = rs.question("Qual é o dia do seu nascimento?")

let mes = rs.question("Qual é o mês do seu nascimento?")

//SWITCH CASE
switch(mes) {
    case "1":
    dia <= 20 ? console.log("Capricórnio") : console.log("Aquário")
    break;
    case "2":
    dia <= 18 ? console.log("Aquário") : console.log("Peixes")
    break;
    case "3":
    dia <= 20 ? console.log("Peixes") : console.log("Áries")
    break;
    case "4":
    dia <= 20 ? console.log("Áries") : console.log("Touro")
    break;
    case "5": 
    dia <= 21 ? console.log("Touro") : console.log("Gêmeos")
    break;
    case "6":
    dia <= 21 ? console.log("Gêmeos") : console.log("Câncer")
    break;
    case "7":
    dia <= 22 ? console.log("Câncer") : console.log("Leão")
    break;
    case "8":
    dia <= 22 ? console.log("Leão") : console.log("Virgem")
    break;
    case "9": 
    dia <= 23 ? console.log("Virgem") : console.log("Libra")
    break;
    case "10": 
    dia <= 23 ? console.log("Libra") : console.log("Escorpião")
    break;
    case "11":
    dia <= 23 ? console.log("Escorpião") : console.log("Sagitário")
    break; 
    case "12": 
    dia <= 21 ? console.log("Sagitário") : console.log("Capricórnio")
    default: console.log("Mês inválido")
    break;    

}
    
// CONDIÇÃO IF/ELSE

/*if (mes == 1) {
    if (dia <= 20) {
        console.log("Capricórnio")
    }
    else {
        console.log("Aquário")
    }
}
if (mes == 2) {
    if (dia <= 18) {
        console.log("Aquario")
    }
    else {
        console.log("Peixes")
    }
}
if (mes == 3) {
    if (dia <= 21) {
        console.log("Peixes")        
    }
    else {
        console.log("Touro")
    }
}
if (mes == 5) {
    if (dia <= 21) {
        console.log("Touro") 
    }
    else {
        console.log("Gêmeos")
    }
}
if (mes == 6) {
    if (dia <= 23) {
        console.log("Gêmeos")
    }
    else {
        console.log("Câncer")
    }
}
if (mes == 7) {
    if (dia <= 22) {
        console.log("Câncer")
    }
    else {
        console.log("Leão")
    }
}
if (mes == 8) {
    if (dia <= 22) {
        console.log("Leão")
    }
    else {
        console.log("Virgem")
    }
}
if (mes == 9) {
    if (dia <= 22) {
        console.log("Virgem")
    }
    else {
        console.log("Libra")
    }
} 
if (mes == 10) {
    if (dia <= 22) {
        console.log("Libra")
    }
    else {
        console.log("Escorpião")
    }
}
if (mes == 11) {
    if (dia <= 21) {
        console.log("Escorpião")
    }
    else {
        console.log("Sagitário")
    }
}
if (mes == 12) {
    if (dia <= 21) {
        console.log("Ságitário")
    } else {
        console.log("Capricórnio")
    }
} */
