//object comparison

const hero1 = {
  name: 'Batman'
};
const hero2 = {
  name: 'Batman'
};

hero1 === hero1; // => true
hero1 === hero2; // => false

hero1 == hero1; // => true
hero1 == hero2; // => false

Object.is(hero1, hero1); // => true
Object.is(hero1, hero2); // => false

///////Manual Comparison

function isHeroEqual(object1, object2) {
  return object1.name === object2.name;
}

const hero3 = {
  name: 'Batman'
};
const hero4 = {
  name: 'Batman'
};
const hero5 = {
  name: 'Joker'
};

console.log(isHeroEqual(hero3, hero4)); // => true
console.log(isHeroEqual(hero3, hero5)); // => false

//////Shalow Equal

function shallowEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
}

const hero6 = {
  name: 'Batman',
  realName: 'Bruce Wayne'
};
const hero7 = {
  name: 'Batman',
  realName: 'Bruce Wayne'
};
const hero8 = {
  name: 'Joker'
};

console.log(shallowEqual(hero6, hero7)); // => true
console.log(shallowEqual(hero6, hero8)); // => false


//DEEP EQUAL

function deepEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];
    const areObjects = isObject(val1) && isObject(val2);
    if (
      (areObjects && !deepEqual(val1, val2)) ||
      (!areObjects && val1 !== val2)
    ) {
      return false;
    }
  }

  return true;
}

function isObject(object) {
  return object != null && typeof object === "object";
}

const hero10 = {
  name: 'Batman',
  address: {
    city: 'Gotham'
  }
};
const hero20 = {
  name: 'Batman',
  address: {
    city: 'Gotham'
  }
};

console.log(deepEqual(hero10, hero20)); // => true
