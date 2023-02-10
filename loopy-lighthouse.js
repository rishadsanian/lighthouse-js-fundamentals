/*A program that prints the numbers from 100 to 200 to the console, with three exceptions:
If the number is a multiple of 3, print the string "Loopy" instead of the number.
If the number is a multiple of 4, print the string "Lighthouse" instead of the number.
If the number is a multiple of both 3 and 4, print the string "LoopyLighthouse" instead of the number.*/

//loop that generates out all the numbers from 100 to 200, inclusive.

for (let i = 100; i <= 200; i++) {
  //If the number is a multiple of both 3 and 4, print the string "LoopyLighthouse" instead of the number
  if (i % 4 === 0 && i % 3 === 0) {
    console.log("LoopyLighthouse");
  }
  //If the number is a multiple of 3, print the string "Loopy" instead of the number.
  else if (i % 3 === 0) {
    console.log("Loopy");
  }

  //If the number is a multiple of 4, print the string "Lighthouse" instead of the number.
  else if (i % 4 === 0) {
    console.log("Lighthouse");
  }

  //if conditions above not met, prints out the number.
  else {
    console.log(i)
  }
}


