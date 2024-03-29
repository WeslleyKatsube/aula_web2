const entrada = require ('prompt-sync')();

const senha = '13575464846';
let senhaDigitada = '';


do{
    senhaDigitada = entrada ('Digite a senha para entrar ');
    
} while (senha != senhaDigitada);


console.log('Você acessou o sistema!');