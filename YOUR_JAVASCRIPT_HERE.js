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
  accuracy: 0.4
};

const enemy1 = {
  id: "enemy1",
  name: "Brutus",
  health: 5,
  weapon: {
    type: "",
    damage: 4
  },
  accuracy: 0.35
};

const enemy2 = {
  id: "enemy2",
  name: "Pegleg",
  health: 3,
  weapon: {
    type: "",
    damage: 5
  },
  accuracy: 0.5
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

function fight(objHero, objEnemy) {

  if (!objHero.name) {
    alert("Please fill in you hero name first");
    return false;
  }

  while (objHero.health > 0 && objEnemy.health > 0) {
    attack(objHero, objEnemy);
    attack(objEnemy, objHero);
    console.log(`Health: ${objHero.name}: ${objHero.health} - ${objEnemy.name}: ${objEnemy.health}`);
  }

  if (objHero.health < objEnemy.health) {
    alert("You Lost!")
    rest(objHero);
    rest(objEnemy);
  } else {
    alert("You won!");
    const enemyElement = document.getElementById(objEnemy.id);
    enemyElement.remove();
    rest(objHero);
  }
}

function attack(attacker, defender) {
  const random = Math.random();
  if (random <= attacker.accuracy) {
    console.log(`${attacker.name} hits ${defender.name}`);
    defender.health -= attacker.weapon.damage
  } else {
    console.log(`${attacker.name} misses!`);
  }
}

// Write displayStats function that writes your hero's name, health, weapontype, weapon damage to the page. Call it at the end of your script
function displayStats(objHero) {
  const heroStats = document.getElementById('heroStats');

  // Remove all child elements of a DOM node
  while (heroStats.firstChild) {
    heroStats.removeChild(heroStats.firstChild);
  }

  const heroName = document.createElement('p');
  const heroHealth = document.createElement('p');
  const weaponType = document.createElement('p');
  const weaponDamage = document.createElement('p');
  heroStats.appendChild(heroName);
  heroStats.appendChild(heroHealth);
  heroStats.appendChild(weaponType);
  heroStats.appendChild(weaponDamage);
  heroName.innerText = "Name: " + objHero.name;
  heroHealth.innerText = "Health: " + objHero.health;
  weaponType.innerText = "Weapon Type: " + objHero.weapon.type;
  weaponDamage.innerText = "Weapon Damage: " + objHero.weapon.damage;
};

displayStats(hero);