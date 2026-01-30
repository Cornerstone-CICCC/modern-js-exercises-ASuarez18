/*
In this activity, we are going to create a function that can calculate which coins we should use when we need to give change.

Change Calculator
We will be given two numbers, the total of a transaction, and the amount of cash given to the cashier. 
Both of these numbers will be represented as whole numbers in cents. Therefore $10 will be represented as 1000.

` Our function calculateChange should return an object which describes the total amount of change for the cashier to give back. 
Although pennies are not used in circulation, we will still calculate the amount of pennies to give back.

? Instruction
* Create a function named calculateChange that takes in a total amount of a bill and the total cash given to pay that bill. 
* Return a new object that describes the total amount of change for the cashier to give back. 
* Omit any types of change that you shouldn't give back, i.e. if you don't give back a twenty dollar bill, 
  don't include it in the results.

> Valid denominations are as follows:
- Twenty dollars
- Ten dollars
- Five dollars
- Two dollars
- One dollar
- Quarter (25¢)
- Dime (10¢)
- Nickel (5¢)
- Penny (1¢)
*/

const calculateChange = function (total, cash) {
  // Your code here
  let remainder = cash - total;
  const denominations = [
    { name: 'twentyDollar', value: 2000, times: 0 },
    { name: 'tenDollar', value: 1000, times: 0 },
    { name: 'fiveDollar', value: 500, times: 0 },
    { name: 'toonie', value: 200, times: 0 },
    { name: 'loonie', value: 100, times: 0 },
    { name: 'quarter', value: 25, times: 0 },
    { name: 'dime', value: 10, times: 0 },
    { name: 'nickel', value: 5, times: 0 },
    { name: 'penny', value: 1, times: 0 },
  ];

  for (const denomination of denominations) {
    denomination.times = Math.floor(remainder / denomination.value);
    remainder = remainder % denomination.value;
  }

  let change = {};
  for (const denomination of denominations) {
    if (denomination.times > 0) {
      change[denomination.name] = denomination.times;
    }
  }

  return change;
}


console.log(calculateChange(1787, 2000)); // { twoDollar: 1, dime: 1, penny: 3 }
console.log(calculateChange(2623, 4000)); // { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
console.log(calculateChange(501, 1000)); // { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }



module.exports = calculateChange;
