
//let nome = prompt("digite seu nome");
//let anoNascimento = Number(prompt("digite o ano o ano em que vc nasceu aqui "));
//let anoAtual = 2019;
//let idade = anoAtual - anoNascimento;

//console.log('olá eu me chamo' +nome+ 'tenho' +idade+ 'anos, e estou estudando JS');

let nome = prompt("digite seu nome");
let matricula = Number(prompt("digite seu número de matricula"));

let nota1 = Number(prompt("digite sua nota 1"));
let nota2 = Number(prompt("digite sua nota 2"));


let media = (nota1+nota2)/2;



if(media >= 7 && media <= 10) {
    console.log("Aprovado");
    
}
else if(media <= 7){
    console.log("reprovado");
    
}
else if(media > 10) {
    console.log("Error")
}

console.log('O aluno ' +nome+ 'de matricula  ' +matricula+ ' obteve a media de ' +media);
    



