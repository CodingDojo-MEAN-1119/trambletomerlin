function coins(amt){
    const coins= {
        'dollars':100,
        'fifty':50,
        'quarters':25,
        'dimes':10,
        'nickels':5,
        'pennies':1
    }
    const result = {};
    for(const type in coins){
        const value = coins[type];
        const coin = Math.floor(amt/value);
        amt -= coin*value;
        result[type] = coin;
        // console.log(type, value, coin, result, amt);
    }
    return result;    
}
console.log(coins(225));