// Variável para nome e level
let nameChar = "MaxLight"
let lvl = 9437
let rank = " "
if (lvl >= 10001) {
    rank = "Radiant"
} else if (lvl >= 9001){
    rank = "Immortal"
} else if (lvl >= 8001){
    rank = "Ascendent"
} else if (lvl >= 7001){
    rank = "Platinum"
} else if (lvl >= 6001){
    rank = "Gold"
} else if (lvl >= 5001){
    rank = "Silver"
} else if (lvl >= 2001){
    rank = " Bonze"
} else if (lvl >= 1000){
    rank = "Iron"
}

console.log("The HERO " + nameChar + " is on level " + lvl + " and stands a ranking of " + rank + ".");
