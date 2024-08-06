/*
    Arrays
    - Create Arrays [Two Methods] new Array() + []
    - Access Arrays Elements
    - Nested Arrays
    - Change Arrays Elements
    - Check For Array Array.isArray(arr);
*/

// let myFriends = ["Ahmed", "Mohamed", "Sayed", ["Marwan", "Ali"]];

// console.log(`Hello ${myFriends[0]}`);
// console.log(`Hello ${myFriends[2]}`);
// console.log(`${myFriends[1][2]}`);
// console.log(`Hello ${myFriends[3][1]}`);
// console.log(`${myFriends[3][1][2]}`);

// console.log(myFriends);
// myFriends[1] = "Gamal";
// console.log(myFriends);
// myFriends[3] = ["Sameh", "Ameer"];
// console.log(myFriends);

// console.log(Array.isArray(myFriends));

// myFriends[9] = "ff";

// console.log(myFriends)
// console.log(myFriends[8])



/*
    Array Methods
    - Length
*/

// Index Start From 0 [ 0, 1, 2, 3, 4 ]

let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

myFriends[myFriends.length] = "Gamal";

console.log(myFriends);

myFriends[myFriends.length-1] = "sha3ban";

console.log(myFriends)

myFriends.length = 2;

console.log(myFriends);

myFriends.unshift("games")

console.log(myFriends);
console.log("sfsdfsdfsdf")



