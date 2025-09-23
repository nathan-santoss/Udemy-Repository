import PromptSync from "prompt-sync";
const prompt = PromptSync()

let turma = {
    aluno_1: {
        nome: 'Nathan',
        idade: 25,
        nota: 6
    }, 
    aluno_2: {
        nome: 'Karol',
        idade: 20,
        nota: 10
    }
}
console.log(Object.values(turma));

let aprovados = []
let alunos = Object.entries(turma)
let passados = 0
alunos.forEach(aluno => {
    if(aluno[1].nota >= 7){
        aprovados.push(aluno[1])
        passados++
    }
});
console.log(`
    [ALUNOS APROVADOS]
    Nome -> ${aprovados[0].nome}
    Nota -> ${aprovados[0].nota}
    Alunos aprovados = ${passados}`);
