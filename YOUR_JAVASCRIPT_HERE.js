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
  return objHero;
};

function pickUpItem(objHero, objWeapon) {
  objHero.inventory.push(objWeapon);
};

function equipWeapon(objHero) {
  if (objHero.inventory.length !== 0) {
    objHero.weapon = objHero.inventory[0]
  };
};