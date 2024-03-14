// construindo a classe heroi
class heroi {
    // iniciando as variáveis de entrada
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    // lista para comparar qual o tipo de herói
    let listaTipo = ["guerreiro", "mago", "monge", "ninja"] 
    // lista que defini o tipo de ataque
    let listaAtaque = ["espada", "magia", "artes marciais", "shuriken"]
    // Descobre o tipo de heroi e imprime o tipo de ataque
    for (let i = 0; i < listaTipo.length; i++ ){
        if (this.tipo === listaTipo[i]){
            console.log(`(${this.nome}) o ${listaTipo[i]} atacou usando ${listaAtaque[i]}`)
        }
    }

    }
}

// Define novos objetos
hero1 = new heroi("Pedro", 19, "guerreiro")
hero2 = new heroi("Joao", 22, "mago")
hero3 = new heroi("Jose", 20, "monge")
hero4 = new heroi("Tanaka", 25, "ninja")
