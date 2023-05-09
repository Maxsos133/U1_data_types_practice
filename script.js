/*
 * Prompt 1:
 *
 * Declare a variable called myFavoriteSong on one line and console.log the value
 * Then, using your Literals, console.log "my favorite song is..." with the song's value
 */
let myFavoriteSong = `happy birthday`
console.log(myFavoriteSong)
console.log(`my favorite song is ${myFavoriteSong}`)
/*
 * Prompt 2:
 *
 * Declare 3 variables using each of let, const, and var, then console.log each of them
 */

let myAge = 21
const location = `canada`
var isStudent = true
console.log(myAge, location, isStudent)

/*
 * Prompt 3:
 *
 * Create a variable and assign a number to it. On a separate line for each, using console.log:
 *   - add a number to your variable
 *   - subtract a number from your variable
 *   - multiply your variable by 3
 *   - divide your variable by 7
 *   - calculate the remainder of dividing your variable by 2
 */

let number = 5

console.log(number + 3)
console.log(number - 3)
console.log(number * 3)
console.log(number / 3)
console.log(number % 2)

/*
//  * Prompt 4:
 *
 * Create a variable called firstName and assign it to a string of your first
 * name. Create a variable called lastName and assign it to a string of your
 * last name.
 *
 * Create a variable called fullName and use addition to combine your firstName
 * and lastName variables.
 * Run a console.log that says 'hello my name is..." with your fullName. 
 */
const firstName = `Maxim`
const lastName = `Pavlenko`
const fullName = firstName + " " + lastName
console.log(`hello my name is ${fullName}`)

/* Arrays */


/*
 * Prompt 1:
 *
 * Retrieve "Marty McFly" from each of the arrays below.
 */

let array1 = ['Marty Marion', 'Marty Feldman', 'Marty McFly', 'Marty Marion'];
let array2 = [
  ['Marty Feldman', 'Marty Marion'],
  ['Marty Stuart', 'Marty McFly'],
  ['Marty Jannetty', 'Marty Robbins']
];
let array3 = [
  ['Marty Feldman', ['Marty Marion']],
  ['Marty Stuart', ['Marty Janetty', ['Marty McFly'], 'Marty Robbins']]
];

console.log(array1[2])
console.log(array2[1][1])
console.log(array3[1][1][1][0])

/*
 * Prompt 2:
 *
 * Use the length of the array below to retrieve the second to last item.
 */

let array4 = ['a', 'b', 'c', 'd', 'e'];

console.log(array4[array4.length -2])

/*
 * Prompt 3:
 *
 * Use the following arrays to answer the subprompts below.
 */

let thom = ['Thom', 1000, 'Christchurch'];
let karolin = ['Karolin', 16, 'New York'];
let kristyn = ['Kristyn', 5, 'Pittsburgh'];
let cathleen = ['Cathleen', 186, 'New York'];

// Cathleen decides that Thom can't be named "Thom" anymore. Remove "Thom" from
// the thom array and replace it with "Tom".

thom.splice(0, 1, `Tom`)
console.log(thom)

// Karolin just had her birthday; change Karolin's array to reflect her being
// a year older.

karolin[1]++
console.log(karolin)

// Change Cathleen's hometown from New York to "Gotham City".

cathleen.splice(2, 1, `Gotham City`)
console.log(cathleen)

// Remove "Pittsburgh" from Kristyn's array and add "Oakland".

kristyn.splice(2, 1, `Oakland`)
console.log(kristyn)