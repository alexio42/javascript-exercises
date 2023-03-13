const sumAll = function() {
  let arr = arguments;
  if (arr[0] < 0 || arr[1] < 0) {
    return "ERROR"; 
  };
  if (typeof arr[0] !== "number" || typeof arr[1] !== "number") {
    return "ERROR";
  };
 
  if (arr[0] > arr[1]) {
    arr = [arr[1], arr[0]];
  };
  let total = 0;
  for (i = arr[0]; i <= arr[1]; i++ ) {
    total += i;
  } return total;

};

// Do not edit below this line
module.exports = sumAll;
