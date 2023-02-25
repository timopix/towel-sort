
// You should implement your task here.

function towelSort(matrix) {
  if (!matrix || matrix.length === 0) {
    return [];
  }

  const sortedMatrix = matrix.map((row, index) => {
    return index % 2 === 0 ? row : row.reverse();
  });

  return [].concat(...sortedMatrix);
}

module.exports = towelSort;
