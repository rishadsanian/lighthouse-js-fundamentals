//Example clothing advise
const raining = false;

const temperature = 55; //new added replacing cold var

if (raining) {
  console.log("Dont forget your umbrella!");
}
else if (!raining) {
  console.log("Leave your umbrella at home!");
}

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");

} 
else {
  console.log("Short sleeves are fine.");
}

if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");//new added
}
else
console.log("Now you're ready to go outside!");

//Example 2 - Voting Eligibility 
const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}