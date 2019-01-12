// Write your JS here

const hero = {
  name: "",
  heroic: true,
  inventory: [],
  health: 10,
  weapon: {
    type: "",
    damage: 2
  },
  accuracy: 0.4,
  lives: 5
};

const enemy1 = {
  id: "enemy1",
  name: "Brutus",
  health: 5,
  weapon: {
    type: "",
    damage: 3
  },
  accuracy: 0.35
};

const enemy2 = {
  id: "enemy2",
  name: "Pegleg",
  health: 3,
  weapon: {
    type: "",
    damage: 4
  },
  accuracy: 0.4
};

const enemy3 = {
  id: "enemy3",
  name: "Redbeard",
  health: 15,
  weapon: {
    type: "",
    damage: 1
  },
  accuracy: 0.7
};

function rest(objHero) {
  objHero.health = 10;
  return objHero;
};

function pickUpItem(objHero, objWeapon) {
  objHero.inventory.push(objWeapon);
};

function equipWeapon(objHero) {
  if (objHero.inventory.length !== 0) {
    objHero.weapon = objHero.inventory[0];
  };
};

// Change the name of your hero
function changeName(objHero) {
  event.preventDefault();
  inputField = document.getElementById('change-name');
  if (!inputField.value) {
    alert("Enter a name");
    return false;
  }
  objHero.name = inputField.value;
  inputField.value = null;
}

// Fight until someone died
function fight(objHero, objEnemy) {
  if (!objHero.name) {
    alert("Please fill in you hero name first");
    return false;
  }

  if (objHero.lives > 0) {
    while (objHero.health > 0 && objEnemy.health > 0) {
      attack(objHero, objEnemy);
      attack(objEnemy, objHero);
      console.log(`Health: ${objHero.name}: ${objHero.health} - ${objEnemy.name}: ${objEnemy.health}`);
    }

    if (objHero.health < objEnemy.health) {
      displayResult("lost", objEnemy)
      objHero.lives = lostLive(objHero.lives)
      rest(objHero);
      rest(objEnemy);
      displayStats(hero);
    } else {
      displayResult("won", objEnemy);
      const enemyElement = document.getElementById(objEnemy.id);
      enemyElement.remove();
      displayStats(hero);
    }
  }
}

function displayResult(result, objEnemy) {
  const enemySelection = document.getElementById('enemySelection');
  const gameResult = document.getElementById('gameResult');
  if (enemySelection.childElementCount === 2) {
    gameResult.innerHTML = `YOU WON`;

  }
  else if (result === "won") {
    gameResult.innerHTML = `You won against ${objEnemy.name}`;
  } else {
    gameResult.innerHTML = `You lost against ${objEnemy.name}`;
  }
}

function lostLive(lives) {
  if (lives === 1) {
    const gameResult = document.getElementById('gameResult');
    gameResult.innerHTML = `GAME OVER`;
    return lives = 0;
  } else {
    return lives -= 1;
  }
}

// Attack by using the attacker's accuracy, health and weapon damage
function attack(attacker, defender) {
  const random = Math.random();
  if (random <= attacker.accuracy) {
    console.log(`${attacker.name} hits ${defender.name}`);
    defender.health -= attacker.weapon.damage
  } else {
    console.log(`${attacker.name} misses!`);
  }
}

// Updates the statistics of your hero
function displayStats(objHero) {
  const heroStats = document.getElementById('heroStats');

  // Remove all child elements of a DOM node
  while (heroStats.firstChild) {
    heroStats.removeChild(heroStats.firstChild);
  }

  const ul = document.createElement('ul');
  const heroName = document.createElement('li');
  const heroHealth = document.createElement('li');
  const weaponType = document.createElement('li');
  const weaponDamage = document.createElement('li');
  const lives = document.createElement('li');

  heroStats.appendChild(ul);
  ul.appendChild(heroName);
  ul.appendChild(heroHealth);
  ul.appendChild(weaponType);
  ul.appendChild(weaponDamage);
  ul.appendChild(lives);

  heroName.innerText = "Name: " + objHero.name;
  heroHealth.innerText = "Health: " + objHero.health;
  weaponType.innerText = "Weapon Type: " + objHero.weapon.type;
  weaponDamage.innerText = "Weapon Damage: " + objHero.weapon.damage;
  lives.innerText = "Lives: " + objHero.lives;
};


displayStats(hero);