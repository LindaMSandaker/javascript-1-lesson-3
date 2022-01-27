const pets = [
    {
        type: null,
        colour: "brown",
        age: 10,
        friendly: true,
    },
    {
        colour: "orange",
        age: 7,
        friendly: false,
    },
    {
        type: "duck",
        colour: "#00ff00",
        age: 20,
        friendly: false,
    },
];

// Select the pet-container class

const container = document.querySelector(".pet-container");

// Create a html variable to hold our html in it when we use the loop

let html = "";

// Loop over the array

for (let i = 0; i < pets.length; i++) {

    let theType = "";

    if (pets[i].type) { // if (pets[i].type !==null)
        theType = pets[i].type;
    } else {
        theType = "Unknown type";
    }

    html = html + `
    <div>
        <h4> Type: ${theType} </h4>
        <p> Age: ${pets[i].age}</p>
        <p> Friendly: ${pets[i].friendly ? "Yes, it's friendly." : "No, it's not friendly."}</p>
    </div >
    `;
    console.log(html);
}

// change the innerHTML

container.innerHTML = html;
