// Calculadora de partidas rankeadas
let heroName = "MaxLight"
let wins = 120
let defeats = 15

function lvl(){
    return wins - defeats;
}

let level = (lvl(wins - defeats))

function rank(){
    let ranking = " "
    if (level >= 101){
        ranking = "Immortal"
    }
    else if (level >= 91){
        ranking = "Legendary"
    } else if (level >= 81){
        ranking = "Diamond"
    } else if (level >= 51){
        ranking = "Gold"
    } else if (level >= 21){
        ranking = "Silver"
    } else if (level >= 11){
        ranking = "Bronze"
    } else {
        ranking = "Iron"
    }
    return ranking
}
let heroRank = rank(level)

console.log
(`------- HERO STATS -------
    Hero Name: ${heroName} 
    Wins: ${wins}           
    Defeats: ${defeats}         
    Balance: ${level}        
   Hero Rank: ${heroRank}  
--------------------------`)
