var { dice, fightNow } = import("./script");

var diceRoll = 1;
var merchant = true;
var thief = true;
var guild = true;
var drinks = true;
var courtesan = true;

// city plot
function city() {
  merchant = confirm("Look! There's a merchant! Shall we approach him?");
  if (merchant === true) {
    dice();
    if (diceRoll < 3) {
      alert("Whoops! He was a murderer. He killed you!");
      alert("Game Over");
    } else if (diceRoll >= 3 && diceRoll < 12) {
      steal();
    } else if (diceRoll >= 12 && diceRoll <= 18) {
      pub();
    } else if (diceRoll > 18) {
      alert("The merchant lost his children to cholera.");
      alert("He adopts us and teaches us his trade.");
      alert("We become very wealthy, take spouses, and live to the age of 86.");
    }
  } else if (merchant === false) {
    lady();
  }
}


function steal() {
  alert("He was a thief! He stole all of our stuff!");
  thief = confirm("Should we go after him?");
  if (thief === true) {
    alert("Stop! Thief!");
    dice();
    if (diceRoll <= 6) {
      alert("Uh-oh. He's got friends. Uh.");
      alert("Do they have KNIVES???");
      alert("I think that one has an axe....");
      alert("And those guys definitely have clubs.");
      fightNow();
    } else if (diceRoll > 6 && diceRoll <= 12) {
      thievesGuild();
    } else if (diceRoll >= 12) {
      alert("Oh, look. There's a Watchman.");
      alert("The watchman arrests the thief and invites us to join the Watch.");
      alert("We join the City Watch. There's not much money in it, but there's great satisfaction in keeping the public safe.");
      alert("We become well-respected members of the Watch and spend the rest of our lives as Watchmen.");
      alert("Game Over");
    }
  } else if (thief === false) {
    alert("We can't make our way in the city without our stuff. We have to become beggars and die in poverty.");
    alert("Game Over");
  }
}


function thievesGuild() {
  alert("Hey! There he is! Catch him!");
  alert("Got him! Give us our stuff back!");
  alert("... a member of the Thieves' Guild? Why would we do that?");
  guild = confirm("What do you think? Should we join the Thieves' Guild?");
  if (guild === true) {
    alert("Well, okay.");
    alert("We join the Thieves' Guild.");
    alert("We become very good thieves and get rich.");
    alert("Game Over");
  } else if (guild === false) {
    alert("Join the Thieves' Guild? Do we look like criminals to you?");
    alert("Give us our stuff.");
    alert("Oh, look. There's a Watchman.");
    alert("The watchman arrests the thief and invites us to join the Watch.");
    alert("We join the City Watch. There's not much money in it, but there's great satisfaction in keeping the public safe.");
    alert("We become well-respected members of the Watch and spend the rest of our lives as Watchmen.");
    alert("Game Over");
  }
}


function pub() {
  alert("He's offered to buy us drinks and give us some tips. Should we join him?");
  if (drinks === true) {
    dice();
    if (diceRoll <= 5) {
      alert("Whoops! He poisoned our drinks and we died.");
      alert("Game Over");
    } else if (diceRoll > 5 && diceRoll <= 15) {
      alert("The merchant takes us on as his apprentices.");
      alert("We make a respectable living well into our golden years.");
      alert("Game Over");
    } else if (diceRoll > 15) {
      alert("The merchant lost his children to cholera.");
      alert("He adopts us and teaches us his trade.");
      alert("We become very wealthy, take spouses, and live to a ripe old age.");
      alert("Game Over");
    }
  } else if (drinks === false) {
    alert("Thank you, but we'll pass.");
    alert("We proceed to get lost in the city.");
    alert("That night, you fall down an open sewer grate and break your neck. You die.");
    alert("Game Over");
  }
}


function lady() {
  alert("No? Well, what about that nice lady over there?");
  alert("What do you mean, she's a courtesan??? Um ... what's a courtesan?");
  alert("Oh. Ummmmmmmmm. Er. Should we talk to her anyway? I bet she knows her way around.");
  if (courtesan === true) {
    dice();
    if (diceRoll <= 5) {
      alert("She turns out to be a murderer. She slits our throats and we die.");
      alert("Game Over");
    } else if (diceRoll > 5 && diceRoll <= 10) {
      alert("A good time! Yes! We're new here and looking for someone to show us around the city! Can you do that?");
      alert("Oh, good! She agreed!");
      alert("We're ready right now!");
      alert("Are you sure this is the best part of town to start in?");
      alert("Well, okay, if you're sure....");
      alert("We wake up in an alley with nothing but our underwear and headaches. She was a thief! She robbed us!");
      alert("We can't make our way in the city without our stuff. We have to become beggars and die in poverty.");
      alert("Game Over");
    } else if (diceRoll > 10 && diceRoll <= 18) {
      alert("Hi, we're new here? Do you know anyone who can guide us around the city?");
      alert("You do? Oh, thank you!");
      alert("While showing us the city, she introduces us to her friends.");
      alert("She and all her friends help us get set up in a little shop.");
      alert("They keep us informed of the happenings on the street.");
      alert("With that knowledge, we are able to earn a modest living and live to the age of 80, always a little ahead of our competitors.");
      alert("Game Over");
    } else if (diceRoll > 18) {
      alert("Hello, we're new here. Could you show us around the city?");
      alert("Do we want to go to the inn? Well, yes, eventually, but we'd like to see the sights first.");
      alert("You've got some ... real ... nice....");
      alert("I think there's been a misunderstanding, here. We just want a guide.");
      alert("No, no, no, not THAT kind of guide!");
      alert("Is it normal for courtesans to grow two feet and sprout wings out of their backs?!?");
      alert("... goddess ... Alseya?");
      alert("Well, yes, the goddess Alseya is one of the wind gods.");
      alert("... found ... favor...?");
      alert("With Alseya's favor, we find yourselves lucky in everything we do.");
      alert("We become very wealthy, marry spouses we adore and who adore us, and die peacefully at the age of 104.");
      alert("Game Over");
    }
  } else if (courtesan === false) {
    alert("No? You're sure?");
    alert("Okay, then.");
    alert("We proceed to get lost in the city.");
    alert("That night, you fall down an open sewer grate and break your neck. You die.");
    alert("Game Over");
  }
}