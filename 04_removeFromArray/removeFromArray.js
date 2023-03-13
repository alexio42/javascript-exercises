const removeFromArray = function(items, ...args) {
  const fnArray = items;
  for (j = 1; j <= arguments.length; j++) {
    for (i = 0; i < items.length; i++) {
      if (fnArray[i] === arguments[j]) {
        fnArray.splice(i, 1);
      }
    }
  }
  return fnArray;
 
  //  for (i = 0; i < items.length; i++) {
   //   if (items[i] != arg) {
   //     newArray.push(items[i]);
   //     continue;
   //   }
 //   } 
//  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
