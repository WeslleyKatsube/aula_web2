const entrada = require ('prompt-sync')();

const senha = '1';
let senhaDigitada = '';
let i = -1;

do {
    i++;
    if (i >= 3) {
        break;
    }
    senhaDigitada = entrada ('Digite a senha para entrar ');
} while (senha != senhaDigitada);

if (i < 3) {
    console.log('Você acessou o sistema!');
}
else {
    console.log('Senha bloqueada!');
}