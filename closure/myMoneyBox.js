function moneyBox() {
    let saveCoins = 0;

    function countCoins (coins) {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`)
    }
    return countCoins;
}


const myMoneyBox = moneyBox();

myMoneyBox(50);
myMoneyBox(20);

const moneyBoxAna = moneyBox();

moneyBoxAna(10);