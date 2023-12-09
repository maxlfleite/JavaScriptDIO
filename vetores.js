let pokemon = ["Pikachu", "Chamander", "Bubasaur"]

console.log(pokemon)
console.log(pokemon[0])
console.log(pokemon[2])

//Remove o ultimo elemento do array
pokemon.pop()
//Remove o primeiro elemento
pokemon.shift()

console.log(pokemon)

let dicionario = [
    ["Pikachu", 45, "level 15"],
    ["Chamander", 37, "level 16"],
    ["Bubasaur", 73, "level 23"]
]
console.log("O pokemon " + dicionario[0][0] + " tem " + dicionario[0][1] + " de HP e está no " + dicionario[0][2])

console.log("O pokemon " + dicionario[1][0] + " tem " + dicionario[1][1] + " de HP e está no " + dicionario[1][2])

