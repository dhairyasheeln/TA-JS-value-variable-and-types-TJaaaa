/*
🎖 Write a program to calculate the total price of your phone purchase. With these conditions
 * [ ] You will keep purchasing phones (hint: loop!) until you run out of bank balance.
 * [ ] You'll also buy accessories for each phone as long as your purchase amount is below your spending threshold.
 * [ ] After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted like ($334.76).
 * [ ] Finally, check the amount against your bank account balance to see if you can afford it or not.
*/

const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

var bank_balance = 303.91;
var amount = 0;
// your code goes here
console.log(`BB:${bank_balance}`);
while(bank_balance>=PHONE_PRICE)
{
    amount=amount+PHONE_PRICE;
    console.log(`amount from while:${amount}`);
    bank_balance=bank_balance-PHONE_PRICE;
    console.log(`BB after phone${bank_balance}`);
    if(amount<SPENDING_THRESHOLD)
    {
        amount=amount+ACCESSORY_PRICE;
        bank_balance=bank_balance-ACCESSORY_PRICE;
        console.log(`amount from if:${amount}`);
        console.log(`BB after Acc${bank_balance}`);
        
    }
}
amount=amount+0.08;
console.log(amount);
// ⛑ Answer of the above will `$334.76`.
