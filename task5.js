// const addNumber = ([1,6,9,0,5])
// addNumber.unshift(0)
// console.log(addNumber)

function insertArray(array,variable){
  let newArray = [variable];
  for(let i = 0; i<array.length;i++){
    newArray.push(array[i])
  }
  return newArray
}
console.log(insertArray([2,4,5,6,7],8))