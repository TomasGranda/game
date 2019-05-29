export default class World {
  constructor(world) {
    this.world = world;
  }

  getPositionById(id) {
    let position = [];
    for (let x in this.world) {
      for (let y in this.world[x]) {
        if(y.items.find( element => element.id === id)){
          position = [x, y];
        }
      }
    }
    return position;
  }
}