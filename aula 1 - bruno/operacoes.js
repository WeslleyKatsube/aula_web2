let entrada = require('prompt-sync')();
let valor = '';

console.log('Digite suas 4 notas');
valor = entrada('Primeira nota: ');
let n1 = parseFloat(valor);
valor = entrada('Segunda nota: ');
let n2 = parseFloat(valor);
valor = entrada('Terceira nota: ');
let n3 = parseFloat(valor);
valor = entrada('Quarta nota: ')
let n4 = parseFloat(valor);

let soma = n1 + n2 + n3 + n4;
let subtracao = n1 - n2 - n3 - n4;
let multiplicacao = n1 * n2 * n3 * n4;
let divisao = n1 / n2 / n3 / n4;
let resto = n1 % n2;
let media = soma / 4; 

console.log(`${n1} + ${n2} + ${n3} + ${n4} = ${soma}`);
console.log(`${n1} - ${n2} - ${n3} - ${n4} = ${subtracao}`);
console.log(n1 + ' * ' + n2 + ' * ' + n3 + ' * ' + n4 +' = ' + multiplicacao);
console.log(n1 + ' / ' + n2 + ' / ' + n3 + ' / ' + n4 +' = ' + divisao); 
console.log(n1 + ' % ' + n2 + ' = ' + resto);
console.log(`A média de ${n1} + ${n2} + ${n3} + ${n4} é de: ${media}`);


if (media > 7) {
    console.log('Você foi aprovado!');
}

else if (media >= 4) {
    console.log('Você está de recuperação!');
}

else {
    console.log ('Você está reprovado!');
}

console.log('Pressione ENTER para encerrar!');
entrada();