

export default function comparePositions(playerPosition, itemPosition) {
  return playerPosition[0] === itemPosition[0] && playerPosition[1] === itemPosition[1];
}