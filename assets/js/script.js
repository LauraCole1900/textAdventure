//==================//
// Global Variables //
//==================//

var startBtn = document.querySelector("#start")

var playerName = "";
var join = true;
var direction = "";
var diceRoll = 1;
var lost = true;
var fight = true;
var enemy = "";
var merchant = true;
var thief = true;
var guild = true;
var drinks = true;
var courtesan = true;
var ruin = true;
var ogres = true;
var dungeon = true;
var dungeonCont = true;
var dungeonBattle = true;
var dungeonBattleStay = true;

// a fever
// dysentery
// measles
// cholera
// typhoid
// exhaustion
// a snakebite
// a broken leg
// a broken arm
// drowning



//==================//
//    Game Start    //
//     Functions    //
//==================//

function gameStart() {
  alert("Welcome!");
  namePlayer();
}

function namePlayer() {
  playerName = prompt("What is your name?");
  if (playerName === "" || playerName === null) {
    alert("I'm sorry; I didn't catch that.");
    namePlayer();
  } else {
    joinParty();
  }
}

function joinParty() {
  join = confirm("Hello, " + playerName + "! I'm going on an adventure! Will you join me?");
  if (join === true) {
    userDir = prompt("Where shall we go? To the South is the great city of Cervania. To the East is the Great Grassland. To the North is a the Vast, Frozen Waste. To the West is the Shining Sea. Please type 'south', 'east', 'north', or 'west'.")
    direction = userDir.toLowerCase();
    if (direction === "south") {
      south();
    } else if (direction === "east") {
      east();
    } else if (direction === "north") {
      north();
    } else if (direction === "west") {
      west();
    }
  } return direction;
}


// Roll dice
function dice() {
  diceRoll = Math.floor(Math.random() * 20) + 1;
  alert("You've rolled " + diceRoll);
  return diceRoll;
}


// Direction
function south() {
  enemy = ("bandits");
  dice();
  if (diceRoll <= 2) {
    alert("The entire party has died of cholera.");
    alert("Game Over");
  } else if (diceRoll > 2 && diceRoll <= 10) {
    alert("Oh, no! We've been ambushed by bandits!");
    fightNow();
  } else if (diceRoll > 10 && diceRoll <= 15) {
    lostTrav();
  } else if (diceRoll > 15) {
    alert("Congratulations! We have arrived safely in Cervania.");
    city();
  }
}


function east() {
  enemy = "ogres";
  dice();
  if (diceRoll < 4) {
    alert("You have died of snakebite.");
    alert("Game Over");
  } else if (diceRoll >= 4 && diceRoll < 11) {
    alert("Oh, no! We've been attacked by wolves!");
    fightNow();
  } else if (diceRoll >= 11 && diceRoll < 16) {
    lostTrav();
  } else if (diceRoll >= 16) {
    alert("We've reached the Great Grassland.");
    ruins();
  }
}


function north() {
  enemy = "barbarians"
  dice();
  if (diceRoll <= 5) {
    alert("You fell and broke your leg.");
    alert("To save the rest of the party, we had to leave you behind.");
    alert("You died of exposure.");
    alert("Game Over");
  } else if (diceRoll > 5 && diceRoll <= 10) {
    alert("Oh, no! We've been attacked by a sleuth of great white bears!");
    fightNow();
  } else if (diceRoll >= 11 && diceRoll < 16) {
    lostTrav();
  } else if (diceRoll >= 16) {
    const villageConf = confirm("In the distance, you see a village. Should we investigate?");
    console.log({ villageConf });
    if (villageConf === true) {
      village();
    } else {
      alert("We wander the wilderness until we die of starvation.");
      alert("Game Over");
    }
  }
}


function west() {
  enemy = "raiders"
  dice();
  if (diceRoll < 11) {
    alert("Oh, no! We've been ambushed by raiders!");
    fightNow();
  } else if (diceRoll >= 11 && diceRoll < 16) {
    lostTrav();
  } else if (diceRoll >= 16) {
    alert("Congratulations! We have arrived at the Shining Sea. Sail on?");

  }
}


// Travelling
function travel() {
  alert("We continue on our way.");
  dice();
  if (diceRoll <= 3) {
    ravine();
  } else if (diceRoll > 3 && diceRoll <= 10) {
    alert("Oh, no! We've been ambushed by " + enemy + "!");
    fightNow();
  } else if (diceRoll > 10 && diceRoll <= 15) {
    lostTrav();
  } else if (diceRoll > 15) {
    alert("Congratulations! We have arrived safely.");
    if (direction === "south") {
      city();
    } else if (direction === "east") {
      ruins();
    } else if (direction === "north") {
      village();
    } else if (direction === "west") {
      sea();
    }
  }
}

function ravine() {
  alert("Oh, no! We've fallen down a ravine. Can we get out?");
  dice();
  if (diceRoll <= 6) {
    alert("We try to climb out and fall. You've broken your arm.");
    alert("You have died of a broken arm.");
    alert("Game Over");
  } else if (diceRoll > 6 && diceRoll <= 11) {
    alert("We manage to climb out.");
    alert("Oh, no! There are " + enemy + " waiting.");
    fightNow();
  } else if (diceRoll > 11 && diceRoll < 20) {
    lostTrav();
  } else if (diceRoll === 20) {
    alert("We are helped out of the ravine by a caravan master.");
    alert("He offers to take us to our destination.");
    alert("We accept.");
    alert("Congratulations! We have arrived safely.");
    if (direction === "south") {
      city();
    } else if (direction === "east") {
      ruins();
    } else if (direction === "north") {
      village();
    } else if (direction === "west") {
      sea();
    }
  }
}


// Run away!
function run() {
  dice();
  if (diceRoll <= 5) {
    alert("We've been killed.");
    alert("Game Over");
  } else if (diceRoll > 5 && diceRoll <= 12) {
    alert("We're wounded.");
    run();
  } else if (diceRoll > 12) {
    alert("We've escaped!");
    alert("Let's get out of here.");
    travel();
  }
}

// Stand and fight!
function fightNow() {
  fight = confirm("Fight or run? Click 'OK' to fight or 'Cancel' to run.");
  if (fight === true) {
    dice();
    if (diceRoll < 3) {
      alert("We've been killed.");
      alert("Game Over");
    } else if (diceRoll >= 3 && diceRoll < 10) {
      badlyWounded();
    } else if (diceRoll >= 11 && diceRoll < 17) {
      lightlyWounded();
    } else if (diceRoll >= 17 && diceRoll < 20) {
      alert("They're running away!");
      alert("Let's get out of here.");
      travel();
    } else if (diceRoll === 20) {
      alert("Wow! We've killed all of them! You're ... quite a fighter....");
      alert("Let's get out of here.");
      travel();
    }
  } else if (fight === false) {
    run();
  }
}

function badlyWounded() {
  fight = confirm("We're badly wounded. Should we continue fighting? Click 'OK' to continue fighting or 'Cancel' to run");
  if (fight === true) {
    dice();
    if (diceRoll <= 10) {
      alert("We've been killed.");
      alert("Game Over");
    } else if (diceRoll > 10) {
      alert("They're running away!");
      alert("Let's get out of here.");
      travel();
    }
  } else if (fight === false) {
    run();
  }
}

function lightlyWounded() {
  fight = confirm("We're lightly wounded. Should we continue fighting? Click 'OK' to continue fighting or 'Cancel' to run");
  if (fight === true) {
    dice();
    if (diceRoll <= 6) {
      alert("We've been killed.");
      alert("Game Over");
    } else if (diceRoll > 6 && diceRoll <= 12) {
      badlyWounded();
    } else if (diceRoll > 12 && diceRoll <= 19) {
      alert("They're running away!");
      alert("Let's get out of here.");
      travel();
    } else if (diceRoll === 20) {
      alert("Wow! We've killed all of them! You're ... quite a fighter....");
      alert("Let's get out of here.");
      travel();
    }
  } else if (fight === false) {
    run();
  }
}

// Get lost
function lostTrav() {
  lost = confirm("We're lost! Ask someone for directions?");
  if (lost === true) {
    dice();
    if (diceRoll <= 6) {
      alert("We've been directed into an ambush!");
      fightNow();
    } else if (diceRoll > 6 && diceRoll <= 12) {
      alert("The directions were unclear.");
      lostTrav();
    } else if (diceRoll > 12) {
      alert("Our directions are correct.");
      alert("Congratulations! We have arrived safely.");
      if (direction === "south") {
        city();
      } else if (direction === "east") {
        ruins();
      } else if (direction === "north") {
        village();
      } else if (direction === "west") {
        sea();
      }
    }
  } else if (lost === false) {
    alert("We're lost.");
    alert("No, we're really lost.");
    alert("I'm pretty sure we've passed that tree before.");
    alert("And that stump ... we're either walking in circles, or that stump is following us.");
    alert("There's no one out here to ask now.");
    alert("We continue to wander in circles until the entire party dies of exhaustion.");
    alert("Game Over");
  }
}


//=================//
//    City Plot    //
//=================//

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


//==================//
//    Ruins Plot    //
//==================//

function ruins() {
  ruin = confirm("There are ruins in the distance. Shall we investigate?");
  if (ruin === true) {
    dice();
    if (diceRoll < 4) {
      alert("The ruins were unstable and have collapsed. The entire party has been crushed to death.");
      alert("Game over");
    } else if (diceRoll >= 4 && diceRoll < 11) {
      ogres = confirm("A group of ogres has appeared. Fight or run? Click 'OK' to fight or 'Cancel' to run.");
      if (ogres === true) {
        ogreFight();
      } else {
        ogreRun();
      }
    } else if (diceRoll >= 11 && diceRoll < 17) {
      alert("Not to alarm you, but I think we're being followed.");
      alert("No, I can't hear them either, but look, there's movement.");
      alert("Right there, in front of the juniper bush ... in ... front of?");
      alert("AHHHHHHHHHHH! GHOSTS! RUN!");
      ghosts();
    } else if (diceRoll >= 17) {
      alert("Wow, this was a whole city once.");
      alert("We could spend the rest of our lives exploring this place.");
      alert("Ooh, how about starting with that door in the ground?");
      dungeonCrawl();
    }
  }
}


function ogreFight() {
  dice();
  if (diceRoll < 6) {
    alert("We've been crushed by ogres.");
    alert("Game Over");
  } else if (diceRoll >= 6 && diceRoll < 12) {
    alert("We're surrounded! They've broken your leg! Fight like our lives depend on it!");
    ogresBadlyWounded();
  } else if (diceRoll >= 12 && diceRoll < 17) {
    ogresBarelyWounded();
  } else if (diceRoll >= 17 && diceRoll < 20) {
    alert("They're running away!");
    alert("Let's get out of here.");
    alert("Look, there's a door in the ground.");
    dungeonCrawl();
  } else if (diceRoll === 20) {
    alert("Wow! We've killed all of them! You're ... quite a fighter....");
    alert("Let's get out of here.");
    alert("Look, there's a door in the ground.");
    dungeonCrawl();
  }
}


function ogresBadlyWounded() {
  dice();
  if (diceRoll <= 10) {
    alert("We've been crushed by ogres.");
    alert("Game over");
  } else {
    alert("They're leaving. They're leaving?");
    alert("Eww. What's that ... EWWWW!");
    alert("I guess even ogres don't like skunks.");
    alert("Let's go ... look, a door in the ground! Can you manage, with your leg?");
    dungeonCrawl();
  }
}


function ogresBarelyWounded() {
  dice();
  if (diceRoll <= 6) {
    alert("We've been crushed by ogres.");
    alert("Game over");
  } else if (diceRoll > 6 && diceRoll <= 12) {
    alert("Oh, no! They've broken your leg! Fight like our lives depend on it!");
    ogresBadlyWounded();
  } else if (diceRoll > 12 && diceRoll <= 18) {
    alert("They're leaving. They're leaving?");
    alert("Eww. What's that ... EWW!");
    alert("I guess even ogres don't like skunks.");
    alert("Let's go. How about that door in the ground?");
    dungeonCrawl();
  } else if (diceRoll > 18) {
    alert("Wow. We've killed them all. You're ... quite a fighter....");
    alert("Let's get out of here. Maybe that door in the ground will show something interesting.");
    dungeonCrawl();
  }
}


function ogreRun() {
  dice();
  if (diceRoll <= 10) {
    alert("We've been crushed by ogres.");
    alert("Game over");
  } else if (diceRoll > 10) {
    alert("Whew, that was close. I swear I could smell them.");
    alert("Yeah, I know, that's not saying much when it's ogres.");
    alert("That's weird. That door leads straight into the ground.");
    dungeonCrawl();
  }
}


function ghosts() {
  dice();
  if (diceRoll <= 3) {
    alert("Faster! They're gaining!");
    alert("Ohnononono....");
    alert("The ghosts have made you one of them.");
    alert("Game over");
  } else if (diceRoll > 3 && diceRoll <= 12) {
    alert("Oh, no, they've caught up....");
    alert("I feel cold....");
    alert("Ohgodow ... my chest hurts like I've been shot!");
    alert("I have been shot! I've been shot! I've....");
    alert("... but there's no arrow....");
    alert("What? 'That's how I died'? Who said....");
    alert("AHHHHH! The ghost made me live its death! RUN AWAY!");
    ghosts();
  } else if (diceRoll > 12 && diceRoll < 20) {
    alert("Wait ... I think ... we got ... away ... from them....");
    alert("Just let ... me catch ... my breath....");
    alert("Door? What door?");
    alert("Hey, look at that! A door into the ground.");
    dungeonCrawl();
  } else if (diceRoll === 20) {
    alert("A cleric? I don't ... oh, YOU'RE a cleric?");
    alert("...");
    alert("Well, if you know how, go ahead.");
    alert("...");
    alert("Wow, they looked ... relieved. I guess being released like that was all they wanted.");
    alert("Although....");
    alert("That place there, that looks like a door. A door into the ground?");
    dungeonCrawl();
  }
}


function dungeonCrawl() {
  dungeon = confirm("Should we check it out? Click 'OK' for yes or 'Cancel' for no.");
  if (dungeon === true) {
    dice();
    if (diceRoll <= 2) {
      alert("As soon as you descend into the hillside, the door slams shut. You can't get it open again. You die in the dark, unable to breathe.");
      alert("Game over");
    } else if (diceRoll > 2 && diceRoll <= 8) {
      dungeonFight();
    } else if (diceRoll > 8 && diceRoll <= 13) {
      dungeonTraps();
    } else if (diceRoll > 13 && diceRoll < 19) {

    } else {
      alert("This place is huge!");
      alert("Let's check it out.");
      alert("Whoaaaaa....");
      alert("I have never SEEN so much treasure in my life!");
      alert("Well, since you ask, no, I've never seen any treasure before in my life. But ... the whole room! There's so much treasure, we could swim in it!");
      alert("Yes, I DO know it's too hard to swim in. It's a figure of speech.");
      alert("We're all as rich as Creosote!");
      alert("Huh? Who's Croesus?");
      alert("Never mind. We're RICH! That's the point!");
      alert("The party returns to the surface, each carrying as much of the treasure as they can carry. It didn't even make a dent in the piles of wealth below the ground.");
      alert("Each member returns to the life that best suits them, now easily able to finance whatever lifestyle each chooses. In time, each passes comfortably and peacefully, never revealing the location of the treasure.");
      alert("Game over");
    }
  } else {
    alert("We emerge from the ruins with no idea where we are.");
    alert("Lost, we wander the Great Grassland for the rest of our lives....");
    alert("... which end up being quite short. The Great Grassland is home to several tribes of ogres,");
    alert("none of which like any of the other tribes, but they all hate humans.");
    alert("Some of them find us.");
    alert("The entire party is crushed by ogres.");
    alert("Game over");
  }
}


function dungeonFight() {
  dungeonBattle = confirm("Flame flares in the darkness as soon as you descend into the hillside. This place is already inhabited by ... by ... well, you can't tell. But they're not friendly. Fight or run? Click 'OK' to fight or 'Cancel' to run.");
  if (dungeonBattle === true) {
    dice();
    if (diceRoll <= 6) {
      alert("The things swarm you. The party is quickly overwhelmed and dies, screaming in the darkness.");
      alert("Game over");
    } else if (diceRoll > 6 && diceRoll <= 13) {
      alert("The things slink and slither through the uneven shadows cast by the torches.");
      alert("They seem hesitant to approach, but they are approaching.");
      alert("Suddenly, as if a signal had been given, they attack!");
      alert("I've been bitten! I've been bitten!");
      dungeonBattleWounded();
    } else {
      alert("...what are you doing with that torch?");
      alert("...why are you swinging it--hey, watch it, I'm standing here!");
      alert("Wait a minute....");
      alert("They don't like the light! Or the heat, or something. Where's another torch? I'll do that, too!");
      alert("It's working! It's working! They're retreating!");
      dungeonCrawlCont();
    }
  } else {
    alert("You scramble back into the light, whatever-it-is on your heels. On reaching the surface, you race to the long grass and duck down, allowing your pursuit to pass you by. Even in the sunlight, it's unclear what they are. It's as if their forms flicker in the sunlight.");
    alert("Once the sounds of pursuit die away, you chance looking around. There's nothing but grass, no ruins, not even the door from which you emerged.");
    alert("So ... what should we do now?");
    alert("Go back? Okay.");
    alert("The party returns to where you met. There's someone new there. They greet you.");
    joinParty();
  }
}


function dungeonBattleWounded() {
  dungeonBattleStay = confirm("The blood is driving them into a frenzy! Fight or run? Click 'OK' to fight or 'Cancel' to run.");
  if (dungeonBattleStay === true) {
    dice();
    if (diceRoll <= 10) {
      alert("The things swarm you. The party is quickly overwhelmed and dies, screaming in the darkness.");
      alert("Game over");
    } else {
      alert("What are you doing with that torch?");
      alert("Wow, good shot! You hit that one right between the eyes!");
      alert("...they're retreating. They're retreating? They don't like fire!");
      dungeonCrawlCont();
    }
  } else {
    alert("We emerge from the ruins with no idea where we are.");
    alert("Lost, we wander the Great Grassland for the rest of our lives....");
    alert("... which end up being quite short. The Great Grassland is home to several tribes of ogres,");
    alert("none of which like any of the other tribes, but they all hate humans.");
    alert("Some of them find us.");
    alert("The entire party is crushed by ogres.");
    alert("Game over");
  }
}


function dungeonTraps() {
  dice();
  if (diceRoll < 4) {
    alert("Wait! It's a--");
    alert("The floor disappears under the party. We drop into a pit of venomous snakes. Several immediately bite.")
    alert("We have died of snakebite.");
    alert("Game over");
  } else if (diceRoll >= 4 && diceRoll < 8) {

  } else if (diceRoll >= 8 && diceRoll < 12) {
    
  } else if (diceRoll >= 12 && diceRoll < 16) {

  } else if (diceRoll >= 16 && diceRoll < 20) {

  } else {

  }
}


function dungeonCrawlCont() {
  dungeonCont = confirm("Shall we continue exploring? Click 'OK' to continue or 'Cancel' to go back.");
  if (dungeonCont === true) {
    dice();
    if (diceRoll <= 6) {

    } else if (diceRoll > 6 && diceRoll <= 12) {

    } else if (diceRoll > 12 && diceRoll <= 18) {

    } else {

    }

  } else {
    alert("We emerge from the ruins and take direction from the sun.");
    alert("Looking around, we find that there's nothing but grass: no ruins, not even the door from which you emerged.");
    alert("So ... what should we do now?");
    alert("Go back? Okay.");
    alert("The party returns to where you met. There's someone new there. They greet you.");
    joinParty();
  }
}


//==================//
//   Village Plot   //
//==================//

function village() {
  dice();
  if (diceRoll <= 3) {
    alert("The people who live in this village don't look friendly.");
    alert("There sure are a lot of them....");
    alert("The villagers attack the party. We are quickly overwhelmed.");
    alert("The party has been wiped out.");
    alert("Game over");
  } else if (diceRoll > 3 && diceRoll <= 7) {

  } else if (diceRoll > 7 && diceRoll <= 12) {

  } else if (diceRoll > 12 && diceRoll <= 19) {

  } else if (diceRoll === 20) {
    alert("The people who live in this village don't look friendly.");
    alert("There sure are a lot of them....");
    alert("They sure seem interested in your armor.");
    alert("...wait, what?");
    alert("That symbol? I don't know. What DOES that symbol mean?");
    alert("...Chief? What chief?");
    alert("Psst ... how long have you had that armor?");
    alert("Since you were a baby?");
    alert("The villagers look excited. Is this good or bad?");
    alert("...the child of the chief who was killed all those years ago?");
    alert("They want to make you the new chief!");
    alert("You become the village's new chief. In time, you manage to make peace between the Northern tribes, becoming the Great Chief of the North. You have many children and grandchildren and, in the fullness of time, die peacefully in your bed, surrounded by your loved ones.");
    alert("Game over");
  }
}


//==================//
//     Sea Plot     //
//==================//




//==================//
//    Start Game    //
//==================//

// Start game on button click
start.addEventListener("click", function () {
  gameStart();
});
