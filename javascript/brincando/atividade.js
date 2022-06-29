function alunosAprovados(alunos, mediaFinal){
    let aprovados = [];
    for(let i = 0; i < alunos.length; i++){
        if(alunos[i].nota > mediaFinal){
            aprovados.push(alunos[i].nome);     
        }
    }
    return aprovados;

}
const alunos = [
    {
        nome: 'Joao',
        nota: 5,
    },
    {
        nome: 'Pedro',
        nota: 8,
    },
    {
        nome: 'Rodrigo',
        nota: 10,
    },
];

console.log(alunosAprovados(alunos, 9));

