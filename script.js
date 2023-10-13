// let card = {
//     number: 1234567,
//     name: "John",
//     surname: "Jackson",
//     code: 1234,
//     account: 200,
//     bankName: "UkrBank"
// }

let card1 = {
    number: 1234567,
    name: "John",
    surname: "Jackson",
    code: 1234,
    account: 200,
    bankName: "UkrBank"
}

let card2 = {
    number: 2948200,
    name: "Emma",
    surname: "Anderson",
    code: 1234,
    account: 300,
    bankName: "UkrBank"
}

let card3 = {
    number: 7234043,
    name: "Greg",
    surname: "Smith",
    code: 1234,
    account: 100,
    bankName: "UkrBank"
}
const cards = [card1, card2, card3];

let atm = {
    number: 1234,
    withdraw: function (card, sum) {
        tempAccount = card.account;
        card.account -= sum;
        alert(`Before withdrawing: ${tempAccount}$ After withrdawing: ${card.account}$`);
    },
    checkCard: function (card) {
        if (card.code === this.number) return true;
        else return false;
    }
}

for (let i = 0; i < cards.length; i++) {
    if (atm.checkCard(cards[i], 1234)) {
        atm.withdraw(cards[i], 20);
    } else {
        alert("Error! The entered code is not correct")
    }
}