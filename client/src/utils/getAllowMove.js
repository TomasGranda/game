export default function getAllowMove(playerPosition, cellPosition) {
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