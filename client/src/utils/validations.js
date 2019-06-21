export const getHasMaterials = (materials, inventory) => {
  return materials.every((material) => inventory.find(item => item.type === material.type));
}

export const comparePositions = (playerPosition, itemPosition) => {
  return playerPosition[0] === itemPosition[0] && playerPosition[1] === itemPosition[1];
}

export const getAllowMove = (playerPosition, cellPosition) => {
  if((!playerPosition && !cellPosition)) return false;

  const x = playerPosition[0], y = playerPosition[1];

  const adjacents = [
    [x+1,y],
    [x,y+1],
    [x-1,y],
    [x,y-1],
  ]
  return !!adjacents.find( (cor) => {
    return cor[0] === cellPosition[0] && cor[1] === cellPosition[1];
  });
}