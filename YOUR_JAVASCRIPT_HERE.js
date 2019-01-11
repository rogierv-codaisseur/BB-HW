// Write your JS here

const hero = {
  name: "",
  heroic: true,
  inventory: [],
  health: 10,
  weapon: {
    type: "",
    damage: 2
  }
};

function rest(objHero) {
  objHero.health = 10;
  console.log(objHero);
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