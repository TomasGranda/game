const createWorld = (x, y) => {
  let world = [];
  for (let i = 0; i < x; i++) {
    world.push([]);
    for (let j = 0; j < y; j++) {
      world[i].push({ builds: [], items: [], entities: [] });
    }
  }
  return world;
}

export default createWorld;