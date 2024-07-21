function desiresParty() {
    let name;
    let item;
    name = prompt("What's your preferred name?");
    suggestion = prompt("What location, activity or experience do you want to add for me?");
    desiresHeader.innerHTML = `Thanks for contributing, ${name}!`;
    desiresCart.innerHTML = `Your suggestion of ${suggestion} has been added to my Bucket List Desires! I'll be sure to tell you how it goes.`;
  }
  
  button4Cart.onclick = desiresParty;

  function experience1() {
    let number, guess, guessNumber;
    number = 17;
    guess = prompt("Try to guess the number of states I've been to so far..");
    guessNumber = Number(guess);

    if (guessNumber === number) {
        shortPara.innerHTML = `Wow, yes! You guessed correctly. I've been to ${number} states!`;
    } else {
        shortPara.innerHTML = `Almost, perhaps? That's okay, give it another shot!`
    }
  }

  experienceOne.onclick = experience1;

  function toDoList() {
    loopPara.innerHTML = "More things I'd like to scratch off the list..";

    let activities = [`Building an App`, `Making Bread from Scratch`, `Launching a Website`, `Snorkeling`, `Getting a Tattoo`];
    let highNumber = activities.length
    for (let i = 0; i < highNumber; i++) {
        loopList.innerHTML += `<li>${activities[i]}</li>`;
    }
  }
oneOffActivities.onclick = toDoList; 

document.getElementById("Bye4Now").innerHTML = untilNextTime("dear friend");

function untilNextTime(name) {
    alert(`You've made it to the JS party!`);
    return `Goodbye for now, ${name}`;
}