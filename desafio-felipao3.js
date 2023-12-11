// Escrevendo as Classes de um jogo

class Hero{
    constructor(name, age, type, attack) {
        this.name = name;
        this.age = age;
        this.type = type;
        this.attack = attack;
        if (this.type === "guerreiro"){
            this.attack = "espada"
        } else if (this.type === "mago"){
            this.attack = "magia"
        } else if (this.type === "monge"){
            this.attack = "artes marciais"
        } else if (this.type === "ninja"){
            this.attack = "shuriken"
        }  
    }
    msg() {
        console.log(`O ${this.type} ${this.name} atacou usando ${this.attack}!`)
    }
}

let char = new Hero("MaxLight", 40, "mago")

char.msg()
