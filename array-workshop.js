// Examples of Common JS Array Enumerables

// Vanilla JS Filter
const someArr = [1, 1, 2, 3, 5, 6, 6, 7]
const filteredArr = someArr.filter(function(item){
  item === 1
})
// This should give us a new array, filteredArr, with the value of [1, 1]

// Example of a Custom Array Filter Function
function filterArray(array, filterParam) {
  const newArr = []
  for(let i = 0; i < array.length; i++) {
    array[i] === filterParam ? newArr.push(array[i]) : null
  }
  return newArr
}

// What's Actually Happening When We Call someArray.filter()?

// We're going to create a new class for this example, but we can also accomplish
// this by creating a prototype for the Array class
// ex. Array.prototype.vanillaFilter
class BadArrayClass extends Array {
  constructor(){
    // Lets just inherit regular array properties for this example
    super()
  }
  // Now we're going to replace the default filter function with a new one
  // Filter takes a callback function as an argument
  filter(filterFunc) {
    const newArr = new BadArrayClass
    //Filter iterates through the array
    for(let i = 0; i < this.length; i++) {
      // If the filter function returns true, it adds that value to the new array
      filterFunc(this[i]) ? newArr.push(this[i]) : null
    }
    return newArr
  }
}

const anotherArray = new BadArrayClass
anotherArray.push(1,2,3,1,1,4,5)

const arrayOfOnes = anotherArray.filter(function(item){
  return item === 1
})

console.log(arrayOfOnes)
