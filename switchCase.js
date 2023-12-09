//switch/case/break/defaut
let fruta = "morango"

switch (fruta) {
    case "banana":
    case "morango":
        console.log("vitamina de " + fruta)
        break
    case "laranja":
        console.log("suco de laranja")
        break
    case "abacaxi":
        console.log("suco de abacaxi")
        break
    default:
        console.log("beber água")
        break
}