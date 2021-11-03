//  Loop basics

// Do the following using loops:

// Using `console.log` log all the values from 1 to 10.
console.log("all the values from 1 to 10")
for(let i=1;i<=10;i=i+1){
    console.log(i);
}
// Using `console.log` log all the evan values from 1 to 10.
console.log("Even values from 1 to 10");
for(let i=1;i<=10;i=i+1){
    if(i%2==0){
        console.log(i);
    }
}
// Using `console.log` log all the od values from 1 to 10.
console.log("Odd values from 1 to 10");

for(let i=1;i<=10;i=i+1){
    if(i%2!=0){
        console.log(i);
    }
}
// Calculate the sum of all numbers from 1 to 10.
console.log("Sum from 1 to 10");
let i=1;
let sum=0;
while(i<=10){
    sum=sum+i;
    i=i+1;
}
console.log(sum);
// Log all the values from 1 to 10 using while loop
console.log("All values 1 to 10 using while");
let j=1;
while(j<=10){
    console.log(j);
    j++;
}