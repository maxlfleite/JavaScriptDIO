// Estruturas FOR
/*for (let i = 0; i <= 4; i++) {
    console.log(i);
}
*/

/* Fibonacci sequence
let a = 0
let b = 1
let output = String(b);
//console.log(b)
for (let i = 1; i < 10; i++){
    let c = a+b
    a = b
    b = c
    output += " " + c;
}
console.log(output);
*/

// Estruturas WHILE - primeiro verifica, depois faz
/*
let i = 0;
let output = String();
while (i <= 3){
    //console.log(i);
    // se eu não colocar nada agora, ele vai entrar em loop infinito.
    output += " " + i;
    i++;
    
}
console.log(output);
*/

// DO WHILE - primeio faz, depois verifica

let i = 0;
let output = String();
do {
    output += " " + i;
    i++;
} while (i <= 3)
console.log(output);
