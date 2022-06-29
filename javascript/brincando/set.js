var arr = [30, 30, 40, 5, 223, 2049, 3034, 5];
function set(array){
   let unique = new Set(array);
   return [...unique];
}

console.log(set(arr));