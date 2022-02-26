var searchMatrix = function(matrix, target) {
  let lo = 0, hi = matrix.length - 1;
  let mid = lo + Math.floor((hi - lo) / 2);
  let n = matrix[0].length;
  
  // find row that could potentially hold target
  while (matrix[mid][0] > target || matrix[mid][n - 1] < target) { 
    mid = lo + Math.floor((hi - lo) / 2);
    
    if (matrix[mid][0] > target) {
      hi = mid - 1;
    } else if (matrix[mid][n - 1] < target) {
      lo = mid + 1;
    } 
    
	// if such a row cannot be found return false 
    if (lo > hi) return false;
  }
  // run binary search on the row
  return binarySearch(matrix[mid], 0, matrix[mid].length, target);
}; 

const binarySearch = (row, lo, hi, target) => {
  if (lo > hi) return false;
  
  const mid = lo + Math.floor((hi - lo) / 2);
  if (row[mid] > target) { return binarySearch(row, lo, mid - 1, target); }
  else if (row[mid] < target) { return binarySearch(row, mid + 1, hi, target); }
  else return true;
}