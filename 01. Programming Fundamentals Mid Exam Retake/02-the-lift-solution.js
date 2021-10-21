function lift(a) {
    let people = +a.shift();
    const cart = a[0].split(" ").map(Number);
   
    const sumOfPassangers = cart.reduce((a, b) => a + b);
    
    const capacity = cart.length * 4;
    let i = 0;
    let sum = 0;
    let isTrue = true;
    while (i < cart.length) {
      if (people > capacity - sumOfPassangers && isTrue) {
        console.log(
          `There isn't enough space! ${
            people - (capacity - sumOfPassangers)
          } people in a queue!`
        );
        isTrue = false;
      }
      if (people >= 4 - cart[i]) {
        sum = 4 - cart[i];
        cart[i] += sum;
        people -= sum;
      } else if (people !== 0) {
        cart[i] = people;
        people = 0;
        console.log("The lift has empty spots!");
        break;
      } else {
        console.log("The lift has empty spots!");
        break;
      }
      i++;
    }
    console.log(cart.join(" "));
  }

  lift([
    "14",
    "0 0 0 1 0"
   ]
   )