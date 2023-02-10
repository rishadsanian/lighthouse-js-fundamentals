const raining = true;
//const cold = false;

const temperature = 25;

if (raining) {
  console.log("Dont forget your umbrella!");
}
/* Removed
if (cold) {
  console.log("Make sure you pick out a scarf!");
} else {
  console.log("Short sleeves are fine.");
} and replaced with below */

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");
