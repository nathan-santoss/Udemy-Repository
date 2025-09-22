import PromptSync from "prompt-sync";
const prompt = PromptSync()

class Pessoa {
    #nome;
    #idade;
    #hobbies
    constructor(nome,idade){
        this.#nome = nome
        this.#idade = idade
        this.#hobbies = []
    }
    get dados(){
        console.log(`
            Nome -> ${this.#nome}
            Idade -> ${this.#idade}
            Hobbies -> ${this.#hobbies.join(', ')}`);
    }
    set novoHobbie(novaPratica){
        let existe = this.#hobbies.includes(novaPratica)
        if(existe){console.log('Esse hobbie já existe');}
        else{
            this.#hobbies.push(novaPratica);
        }
    }
}
const _name = prompt('Informe o nome da pessoa: ')
const _idade = Number(prompt('Agora a idade -> '))
let novaPessoa = new Pessoa(_name,_idade)
let flag = true
while(flag){
    console.log(`
        [MENU]
        [1] - Exibir Informações
        [2] - Adicionar Hobbie
        [0] - Sair`);
    const op = Number(prompt('--> '))
    switch(op){
        case 1:
            novaPessoa.dados
            break
        case 2:
            novaPessoa.novoHobbie = prompt('Informe o novo Hobbie -> ')
            break
        case 0:
            flag = false
            break
        default:
            console.log(`Opção inválida!`);
            break
    }
}
