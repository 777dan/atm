function BankAccount(number, name, surname, code, account, bankName) {
    this.number = number;
    this.name = name;
    this.surname = surname;
    this.code = code;
    this.account = account;
    this.bankName = bankName;
}
let card1 = new BankAccount(1234567, "John", "Jackson", 1234, 200, "UkrBank");
let card2 = new BankAccount(2948200, "Emma", "Anderson", 1234, 300, "UkrBank");
let card3 = new BankAccount(7234043, "Greg", "Smith", 1234, 100, "UkrBank");

const cards = [card1, card2, card3];

function CashMachine(number) {
    this.number = number;
    this.withdraw = function (card, sum) {
        tempAccount = card.account;
        card.account -= sum;
        alert(`Before withdrawing: ${tempAccount}$ After withrdawing: ${card.account}$`);
    };
    this.checkCard = function (card) {
        if (card.code === this.number) return true;
        else return false;
    };
}

let atm1 = new CashMachine(1234);
let atm2 = new CashMachine(3255);

const atms = [atm1, atm2];

for (let i = 0; i < atms.length; i++) {
    for (let j = 0; j < cards.length; j++) {
        if (atms[i].checkCard(cards[j])) {
            atms[i].withdraw(cards[j], 20);
        } else {
            alert("Error! The entered code is not correct")
        }
    }
}