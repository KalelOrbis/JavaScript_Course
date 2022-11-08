"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) {
//     hasDriverLicense = true;
// }
// if (hasDriverslicense) {
//     console.log("I can drive 😄");
// }

// Arrow functions

// const calcAge3 = birthYeah => 2037 - birthYeah;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYeah, firstName) => {
//   const age = 2037 - birthYeah;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// }

// console.log(`test one ${yearsUntilRetirement(1991, 'Jonas')}`, console.log(yearsUntilRetirement(1980, 'Bob')));

// const calcAge = function (birthYeah) {
//   return 2037 - birthYeah;
// }

// const yearsUntilRetirement = function (birthYeah, firstName) {
//   const age = calcAge(birthYeah);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired 🎉`);
//     return -1;
//   }
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1950, 'Mike'));

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/
// const calcAverage = score => {
//   let scoreSum = 0;

//   score.forEach( score => {
//     scoreSum += score;
//   });

//   return scoreSum / score.length;
// };

// function checkWinner(avgTeamOne, avgTeamTwo)
// {
//   if (avgTeamOne/2 > avgTeamTwo) {
//     return `Dolphins win (${avgTeamOne} x ${avgTeamTwo})`;
//   }
//   else if (avgTeamTwo/2 > avgTeamOne)
//   {
//     return `Koalas win (${avgTeamTwo} x ${avgTeamOne})`;
//   }
//   else
//   {
//     return `No winners (${avgTeamOne} x ${avgTeamTwo})`
//   }
// }
// let dolphinsScores = [85, 54, 41];
// let koalasScores = [23, 34, 27];

// let dolphinAvg = calcAverage(dolphinsScores);
// let koalaAvg = calcAverage(koalasScores);

// console.log(checkWinner(dolphinAvg, koalaAvg));

// dolphinsScores = [44,23,7];
// koalasScores = [65,54,49];

// dolphinAvg = calcAverage(dolphinsScores);
// koalaAvg = calcAverage(koalasScores);

// console.log(checkWinner(dolphinAvg, koalaAvg));

///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300,
and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above
 (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

// const tip = bill => { bill >= 50  && bill <= 300 ? bill *= 0.15 : bill *= 0.2; return bill};
// let bills = [125, 555, 440];

// function calcTips(arrBills)
// {
//   let arrTips = [];
//   for (let i = 0; i < arrBills.length; i++) {
//     arrTips.push(tip(arrBills[i]));
//   }
//   return arrTips
// }

// function getTotal(arrBills, arrTips)
// {
//   let totals = [];
//   for (let i = 0; i < arrBills.length; i++) {
//     totals.push(arrBills[i] + arrTips[i]);
//   }
//   return totals;
// }

// let tips = calcTips(bills);
// let totals = getTotal(bills, tips);
// console.log(bills);
// console.log(tips);
// console.log(totals);

// const kalel = {
//   firstName: "Kalel",
//   lastName: "Poeta",
//   birthdate: "03.01.2005"
// }

// console.log(kalel.firstName);
// console.log(kalel['firstName']);

// const nameKey = 'name';
// console.log(kalel['first' + nameKey]);
// console.log(kalel['last' + nameKey]);

// kalel.location = "Brazil";
// kalel['twitter'] = "@kalelpoeta";
// kalel.friends = ["Zakria", "Aron", "Joseph", "Alex", "Grace", "Akina", "Molly", "Milena", "Becky"];

// //Use user input to retrieve property of object
// const interestedIn = prompt("What do you want to know about Kalel? Choose: firstName, lastName or birthdate");
// if (kalel[interestedIn] === kalel.friends) {
//   console.log(`${kalel.firstName} has ${kalel.friends.length} friends. His bestfriend is ${kalel.friends[0]}`);
// }
// else if (kalel[interestedIn])
// {
//   console.log(kalel[interestedIn]);

// }
// else{
//   console.log(`Property ${interestedIn} doesn't exist! Choose: firstName, lastName or birthdate`);
// }

// const kalel = {
//   firstName: "Kalel",
//   lastName: "Poeta",
//   birthYear: 2005,
//   job: 'software dev',
//   friends: ["Zakria", "Aron", "Joseph", "Alex", "Grace", "Akina", "Molly", "Milena", "Becky"],
//   hasDriversLicense: true,

//   calcAge: function()
//   {
//     this.age = new Date().getFullYear() - this.birthYear;
//     return this.age;
//   },
//   getSummary: function ()
//   {
//     return `${this.firstName} is a ${this.calcAge()}-year old teacher, and he ${this.hasDriversLicense ? "has a driver's license" : "doesn't have a driver's license"}`
//   }
// };

// console.log(kalel.getSummary());

// console.log(kalel['calcAge'](1014));

// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

// const Mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,

//   calcBMI: function ()
//   {
//     this.BMI = this.mass / this.height ** 2;
//     return  this.BMI;
//   }
// };

// const John = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,

//   calcBMI: function ()
//   {
//     this.BMI = this.mass / this.height ** 2;
//     return  this.BMI;
//   }
// }

// console.log(John.calcBMI() > Mark.calcBMI() ? `${John.fullName}'s BMI (${John.BMI}) is higher than ${Mark.fullName}'s (${Mark.calcBMI()})` :
//  `${Mark.fullName}'s BMI (${Mark.BMI}) is higher than ${John.fullName}'s (${John.BMI})` );

///////////////////////////////////////
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!
f
TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

const tip = (bill) => {
  bill >= 50 && bill <= 300 ? (bill *= 0.15) : (bill *= 0.2);
  return bill;
};

for (let i = 0; i < bills.length; i++) {
  tips.push(tip(bills[i]));
  totals.push(tips[i] + bills[i]);
}

const calcAvg = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
};

console.log(calcAvg(totals));
