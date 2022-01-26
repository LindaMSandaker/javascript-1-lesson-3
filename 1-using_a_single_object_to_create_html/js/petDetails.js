const pet = {
    type: "pig",
    colour: "#ff0000",
    age: 10,
    isFriendly: true,
    name: "Benny",
};

// 1.select header h4
const heading = document.querySelector("h4");

// 2.select the .age class
const age = document.querySelector(".age");

// 3.select .friendly class
const friendlyWrap = document.querySelector(".friendly");

// 4.change the innerHTML of each of them with data from the object
heading.innerHTML = "type: " + pet.type;
age.innerHTML = "age: " + pet.age;

// ternary operator: some condition ? true : false

friendlyWrap.innerHTML = pet.isFriendly ? "this pet is friendly" : "this pet is not friendly";

// ternary operator = if/else condition

// let friendly;
// if (pet.isFriendly) {
//     friendly = "this pet is friendly";
// } else {
//     friendly = "this pet is not friendly";
// }
// friendlyWrap.innerHTML = friendly;