// array
var numbers = [1, 2, 3, 4]
console.log(numbers)

// adding or pushing new value in an array...but this new value will add at the last of array..push adds last element in an array
numbers.push(5)
console.log(numbers)

// string in an array
var names = ['maruf', 'ashikur']
console.log(names)
// push another string in that array
names.push('sobuj')
console.log(names)

// removing last element of an array
// by using pop
var roll = [22, 25, 11, 44, 45]
// output before pop
console.log(roll)

roll.pop()
// output after pop
console.log(roll)

// storing value of pop in a new variable
var marks = [25, 36, 45, 58, 78]
console.log(marks)
// storing value of pop
var store = marks.pop()
// output will be an array with one less value because of pop
console.log(marks)
// output will be poped value
console.log(store)

// removing first element in an array
var price = [25, 33, 56, 24]
price.shift()
console.log(price)
// adding first element in an array
price.unshift(100)
console.log(price)
