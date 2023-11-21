// Creează un obiect numit person cu proprietățile name, age și city.Modifică proprietatea age a obiectului. Accesează și afișează proprietățile obiectului în consolă.

function createPerson(name, age, city) {
    return {
        name: name,
        age: age,
        city: city,
        salutation: function () {
            console.log("Hello, I am " + this.name + ", I have " + this.age + "years old", ",I am from" + this.city);
        }
    };
}
var person = createPerson("Andrei", 20, "Timisoara");

//----------------------------------------------------------------------------------------------------------------

// Creează un obiect numit calculator cu o metodă numită sum care primește doi parametri și returnează suma lor.

var num1 = window.prompt("Enter a number");
var num2 = window.prompt("Enter another number");

num1 = parseFloat(num1);
num2 = parseFloat(num2);

document.write(num1 + num2);

//-------------------------------------------------------------------------------------------------------------

// Compararea Obiectelor

const firstBook = {
    id: 1,
    title: "Harry Potter",
    date: "15.11.2020"
}
console.log(firstBook);
const secondBook = {
    id: 1,
    title: "Back to the future",
    date: "20.06.2019"
}
const theOtherBook = {
    id: 1,
    title: "Harry Potter",
    date: "15.11.2020"
}

//-----------------------------------------------------------------------------------------------------------
