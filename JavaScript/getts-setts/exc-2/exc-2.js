import PromptSync from "prompt-sync";
const prompt = PromptSync()

class Pessoa {
    #saldo;
    #nome;
    constructor(nome){
        this.#nome = nome
        this.#saldo = 0
    }
    get dados(){
        console.log(`
            Nome -> ${this.#nome}
            Saldo -> R$${this.#saldo}`);
    }
    set adicionar(novaReceita){
        if(novaReceita > 0){
            this.#saldo += novaReceita
        }
        return this.#saldo
    }
    set sacar(novaDespesa){
        if(novaDespesa > 0){
            this.#saldo -= novaDespesa
        }
        return this.#saldo
    }
}
let flag = true
let _nome = prompt('Informe o nome do usuário -> ')
const novaPessoa = new Pessoa(_nome)
while(flag){
    console.log(`
        [MENU]
        [1] - Adicionar ao saldo
        [2] - Saca dinheiro
        [3] - Mostrar dados atuais
        [0] - Sair`);
    const op = Number(prompt('--> '))
    switch(op){
        case 1:
            novaPessoa.adicionar = Number(prompt('Informe um valor para adicionar -> '))
            break
        case 2:
            novaPessoa.sacar = Number(prompt('Informe um valor para o Saque -> '))
            break
        case 3:
            novaPessoa.dados
            break
        case 0:
            flag = false
            break
        default:
            console.log(`OPÇÃO INVÁLIDA!`);
            break
    }
}