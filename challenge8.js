const shop1 = {
    mango: 20,
    banana: 30.4,
    apple: 15.40,
    orange: 40.12
  }
  
  const shop2 = {
    mango: 50,
    banana: 26,
    apple: 35.71,
    orange: 15.78
  }

// 8.1
const orangePrice2 = shop2.orange;
const applePrice1 = shop1.apple;

const totalPrice = applePrice1 * 7 + orangePrice2 * 5;
console.log(`challenge 8.1: the total cost of 5 oranges from shop2 and 7 apples from shop1 is: ${totalPrice}`);

// 8.2
shop1.pineapple = 20;
shop2.pineapple = 30;

// 8.3
const shop3 = {};

const createNewShop = (shop1, shop2, shop3) => {
    for ( fruit in shop1 ) {
        shop3[`${fruit}`] = shop1[`${fruit}`] + shop2[`${fruit}`];
    }
    console.log(`challenge 8.3: `);
    console.log(shop3);
}

createNewShop(shop1, shop2, shop3);