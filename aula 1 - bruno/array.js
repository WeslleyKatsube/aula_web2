// const { addListener } = require("nodemon");

// let aluno1 = 'Teófilo Trajano';
// let aluno2 = 'Raissa Rebeca';
// let aluno3 = 'Carlos Caetano';
// let aluno4 = 'Helna Harris';

// console.log('Lista de alunos:');
// console.log('- ' + aluno1);
// console.log('- ' + aluno2);
// console.log('- ' + aluno3);
// console.log('- ' + aluno4);
// console.log('');
// console.log('Fim do programa');

let alunos = [
    'Teófilo Trajano',
    'Raissa Rebeca',
    'Carlos Caetano',
    'Helna Harris',
    'Ewerton Estones'
];

console.log ('Lista de alunos: ');

for (let n = 0; n < alunos.length; n++){
    console.log('- ' + alunos[n]);
}

console.log ('');
console.log ('Fim do programa');