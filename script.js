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
    this.withdraw = function (sum) {
        for (let i = 0; i < cards.length; i++) {
            if (this.checkCard(cards[i])) {
                tempAccount = cards[i].account;
                cards[i].account -= sum;
                alert(`Before withdrawing: ${tempAccount}$ After withrdawing: ${cards[i].account}$`);
            } else {
                alert("Error! The entered code is not correct");
            }
        }
    };
    this.checkCard = function (card) {
        return card.code === this.number;
    };
}

let atm1 = new CashMachine(1234);
let atm2 = new CashMachine(3255);

const atms = [atm1, atm2];

for (let i = 0; i < atms.length; i++) {
    atms[i].withdraw(20);
}