const { clear } = require("console");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const wannaPlay = () => {
    rl.question("Do You Want to Play (y/n)", (answer) => {
        if(answer.toLowerCase() === "y"){
            clear();
            console.log(`OK, let's START!`)
            gameStart();
        } else if (answer.toLowerCase() === "n") {
            console.log(`OK, Have a Good Day!`);
            rl.close();
        } else {
            console.log(`Character Invalid, Lets Try Again...`)
            wannaPlay();
        }
    });
};

const gameStart = () => {
    firstDeal();
    console.log(`Your Hand is ${playerHand[0][1]} of ${playerHand[0][0]} and ${playerHand[1][1]} of ${playerHand[1][0]}`)
    console.log(`Dealer Hand is ${dealerHand[0][1]} of ${dealerHand[0][0]} and ???? Card`)
    askForCard(playerHand)
}

const firstDeal = () => {
    dealCard(playerHand);
    dealCard(playerHand);
    dealCard(dealerHand);
    dealCard(dealerHand);
}

const dealCard = (who) => {
    let cardArr = pickCardFromDeck();
    who.push(cardArr);
    deck[cardArr[0]] = deck[cardArr[0]].filter(element => !(element === cardArr[1]))
}

const pickCardFromDeck = () => {
    let suitsArr = Object.keys(deck);
    let suit = suitsArr[Math.floor(Math.random() * suitsArr.length)]
    if(deck[suit].length > 0){
        let deckSuit = deck[suit]
        let card = deckSuit[Math.floor(Math.random() * deckSuit.length)]
        return [suit, card];
    } else {
        delete deck[suit];
        pickCardFromDeck();
    }
}

const askForCard = (who) => {
    rl.question("Do You Want a Card (y/n)", (answer) => {
        if(answer.toLowerCase() === "y"){
            dealCard(who);
            console.log(`Your added a ${who[who.length - 1][1]} of ${who[who.length - 1][0]} to your Hand`)
            askForCard(who);
        } else if (answer.toLowerCase() === "n") {
            let sum = 0;
            for (let i = 0; i < who.length; i++) {
                sum += who[i][1];
            }
            endOfYourTurn(sum);
        } else {
            console.log(`Character Invalid, Lets Try Again...`);
            askForCard(who);
        }
    });
}

const endOfYourTurn = (playerSum) => {

    console.log(`Your Sum is... ${playerSum}`);
    if (playerSum > 21) {
        clear();
        console.log(`WOW! You Lose  Q.Q`)
        console.log(deck);
        wannaPlay();
    } else {
        dealerTurn(playerSum);
    }
}

const dealerTurn = () => {

}

const deck = {
    clubs: [1, 2, 3, 4, 5, 6, 7, 8 ,9, 10, 11, 12, 13],
    diamonds: [1, 2, 3, 4, 5, 6, 7, 8 ,9, 10, 11, 12, 13],
    hearts: [1, 2, 3, 4, 5, 6, 7, 8 ,9, 10, 11, 12, 13],
    spades: [1, 2, 3, 4, 5, 6, 7, 8 ,9, 10, 11, 12, 13]
};
let playerHand = [];
let dealerHand = [];
wannaPlay();
