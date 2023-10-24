function moneyBox() {
    let saveCoins = 0;
    function countCoins(coins) {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(10);
myMoneyBox(5);
myMoneyBox(20);

const moneyBoxAna = moneyBox();
moneyBoxAna(10);
moneyBoxAna(5);
moneyBoxAna(5);
