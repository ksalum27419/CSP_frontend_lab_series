// Your code goes here. Follow the steps in README.md and run from index.html.
console.log("TEST - TIER 3")
for (let i=1; i <= 50; i++); {
    if(i % 15 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 ===0) {
        console.log("Fizz");
    } else if ( i % 5===0) {
        console.log("Buzz");
    } else {
        console.log("i");
        }
    }
    function isprime(num) {
        if (n < 2) return false;
       for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i===0) return false;
        }
        return true;
    }

    for (let n=1; n <= 20; n++){
        if (Prime(n)) {
            console.log('${n}: prime');
        } else if (n % 2===0) {
            console.log('${n}: even');
        } else{
            console.log('${n}: odd');
        }
    }

    let secret = Math.floor(Math.random() * 10) + 1;
    
    let guess = Number(prompt("Guess a number between 1 to 10."));

    while (guess !== secret) {
        if (Number.isNaN(guess)) {
            guess = Number(prompt("Please enter a number:"));
        } else if( guess > secret){
            guess = Number(prompt("Number is too high."));
        } else if (guess < secret){
            guess = Number(prompt("Number is too low."));
        }
    }

    console.log("Correct! The number was" + secret);

    for( let row=1; row <= 4; row++){
        let line = "";
        for (let star = 1; star <= 1; star++){
            line +="*";
        }
        console.log(line);
    }

   const arr = [12, 65, 34, 99, 81, 50];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 50) {
    console.log(arr[i]);
  }
}
