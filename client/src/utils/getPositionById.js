const getPositionById = (matrix, id) => {
  let position = [];
  for (let x in matrix) {
    for (let y in matrix[x]) {
      if (matrix[x][y].items && matrix[x][y].items.find(element => element.id === id)) {
        position = [parseInt(x), parseInt(y)];
      }
    }
  }

  return position;
}

export default getPositionById;