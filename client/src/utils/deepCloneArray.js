export const deepCloneArray = array => array ? array.map(element => {
  let newElement = element;

  if (Array.isArray(element)) {
    newElement = deepCloneArray(element);

  } else if (element instanceof Object) {
    newElement = deepCloneObject(element);
  }

  return newElement;
}) : array;

export const deepCloneObject = object => {
  let newObject = Object.create(
    Object.getPrototypeOf(object)
  );
  
  for (let property of Object.keys(object)) {
    if (Array.isArray(object[property])) {
      newObject[property] = deepCloneArray(object[property]);

    } else if (object[property] instanceof Object) {
      newObject[property] = deepCloneObject(object[property]);

    } else {
      newObject[property] = object[property];

    }
  }
  return newObject;
};