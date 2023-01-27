// array

var roll = [11, 22, 31, 24, 45, 58, 45]

// output
console.log(roll)

// accesing a specific value via index
console.log(roll[2])
// also can be written as
var variable = roll[2]
console.log(variable)

// setting a different value in a specific index of an array
// value before assigining a new value
console.log(roll[5])
roll[5] = 100
// value after assigining a new value
console.log(roll[5])

// finding index of an element
console.log(roll.indexOf(24))
