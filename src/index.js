
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];

  if (!matrix) {
    return [];
  }

  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 !== 0) {
      result = result.concat(matrix[i].sort(function(a, b) { return b - a }));
    } else {
      result = result.concat(matrix[i]);
    }
    
  }

  return result;
}