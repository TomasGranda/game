const getVisibleWorldByPosition = (world, position) => {
  let visibleWorld = [[],[],[],];
  let posX = position[0], posY = position[1];

  let _posX = posX -1 > 0;
  let _posY = posY -1 > 0;

  visibleWorld[0][0] = world[_posX ? posX - 1 : 0][_posY ? posY - 1 : 0];
  visibleWorld[0][1] = world[_posX ? posX - 1 : 0][posY];
  visibleWorld[0][2] = world[_posX ? posX - 1 : 0][posY + 1];
  visibleWorld[0][3] = world[_posX ? posX - 1 : 0][posY + 1];
  visibleWorld[0][4] = world[_posX ? posX - 1 : 0][posY + 1];
 
  visibleWorld[1][0] = world[posX][_posY ? posY - 1 : 0];
  visibleWorld[1][1] = world[posX][posY];
  visibleWorld[1][2] = world[posX][posY + 1];
  visibleWorld[1][3] = world[posX][posY + 1];
  visibleWorld[1][4] = world[posX][posY + 1];
 
  visibleWorld[2][0] = world[posX + 1] ? world[posX + 1][_posY ? posY - 1 : 0] : "";
  visibleWorld[2][1] = world[posX + 1] ? world[posX + 1][posY] : "";
  visibleWorld[2][2] = world[posX + 1] ? world[posX + 1][posY + 1] : "";
  visibleWorld[2][3] = world[posX + 1] ? world[posX + 1][posY + 1] : "";
  visibleWorld[2][4] = world[posX + 1] ? world[posX + 1][posY + 1] : "";

  return visibleWorld;
}

export default getVisibleWorldByPosition;