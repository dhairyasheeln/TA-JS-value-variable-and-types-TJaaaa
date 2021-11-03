// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
let number=+prompt("Please enter a number");
if(number%2===0){
  console.log("number is even");
}
else{
  console.log("number is odd");
}
// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.
let number_1=Number(prompt("Enter first number"));
let number_2=Number(prompt("Enter second number"));
if(number_1>number_2){
  alert(number_1)
}
else{
  alert(number_2);
}
// 3. Convert the above code using`?` terniary operator
number_1=Number(prompt("Enter first number"));
number_2=Number(prompt("Enter second number"));
number_1>number_2 ? alert(number_1) : alert(number_2);
/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/
let houseName=prompt("Enter house name");
if(houseName==='stark'){
  console.log("Winter is coming");
}
else if(houseName==="lannister"){
  console.log("A lannister always pays his debt");
}
else{
  console.log("All men must die")
}
// 5. Convert the above code using`?` terniary operator
houseName=prompt("Enter house name");
(houseName==='stark') ? console.log("Winter is coming") : (houseName==="lannister") ? console.log("A lannister always pays his debt") : console.log("All men must die");
// Switch
houseName=prompt("Enter house name");
switch(houseName)
{
  case 'stark':
    console.log("Winter is coming");
    break;
  case 'lannister':
    console.log("A lannister always pays his debt");
    break;
  default:
    console.log("All men must die");
    
}

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.

let month=+prompt("Enter month(1-12)");
switch(month){
  case 1:
    alert("31 days");
    break;
  case 2:
    alert("28 days");
    break;
  case 3:
      alert("31 days");
      break;
  case 4:
    alert("30 days");
    break;
  case 5:
      alert("31 days");
      break;
  case 6:
    alert("30 days");
    break;
  case 7:
    alert("31 days");
    break;    
  case 8:
    alert("31 days");
    break;
  case 9:
    alert("30 days");
    break;    
  case 10:
    alert("31 days");
    break;
  case 11:
    alert("30 days");
    break;
  case 12:
    alert("31 days");
    break;
  default:
    alert("Enter correct month")
        
}
/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/
let salary=Number(prompt("enter your salary"));
switch(true){
  case salary<=20000:
    alert(salary-(salary*0.10));
    break;
  case salary<=40000:
    alert(salary-(salary*0.20));
    break;
  case salary>50000:
    alert(salary-(salary*0.30));
    break;
}
//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/
let marks=76;
if(marks>100){
  alert("Marks can't be greater than 100");
}
else if(marks > 80 && marks < 100){
  alert("Grade A");
}
else if(marks > 50 && marks < 80){
  alert("Grade B");
}
else if(marks > 30 && marks < 50){
  alert("Grade C");
}
else if(marks>0){
  alert("Grade D");
} 
else{
  alert("Invalid");
}

switch(true){
  case marks>100:
    alert("Marks can't be greater than 100");;
    break;
  case marks > 80 && marks < 100:
    alert("Grade A");
    break;
  case marks > 50 && marks < 80:
    alert("Grade B");
    break;
  case marks > 30 && marks < 50:
    alert("Grade C");
    break;
  case marks>0:
    alert("Grade D");
    break;
  default:
    alert("Invalid");
}

/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/
let wheather=prompt("What is the weather like outside?");
if(wheather==="sunny"){
  alert("Wear a T-shirt");
}
else if(wheather===`rainy`){
  alert("Don't forget to take your raincoat");
}
else if(wheather==='hot'){
  alert("Get a hanky");
}
else if(wheather==="freezing"){
  alert("Get your sweeter on");
}
else{
  alert("Not a valid input");
}


