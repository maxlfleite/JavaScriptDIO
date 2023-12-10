/*
// Funçoes sem parametros
function torrar() {
    injetarPao()
    console.log("Torrando o pão")
    entregarTorrada()
}

function injetarPao(){
    console.log("Injetando o pão na torradeira")
}

function entregarTorrada(){
    console.log("Finalizando o processo")
}

torrar()
*/
// Funçoes com parametros
/*
 function torrar(pao, nome = "cliente"){
    console.log("Torrada pronta com " + pao)
    console.log("Pedido feito por " + nome)
 }
 torrar("pao de forma", "Max")
 torrar("pao integral")
 */

// Funçoes com retorno
/*
function somar(a, b){
    return a+b
}
console.log(somar(5, 3))
*/
// Função Fifi
function fifi(a, b){
    let c = 0
    let output = String(b)
    for (var i=1; i<=10; i++){
        c = a+b;
        a = b
        b = c
        output += " " + c
    }
    return output
}
console.log(fifi(0, 1))
