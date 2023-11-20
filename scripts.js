// Creează un obiect numit person cu proprietățile name, age și city.Modifică proprietatea age a obiectului. Accesează și afișează proprietățile obiectului în consolă.

function createPerson(name, age, city) {
    return {
        name: Andrei,
        age: 20,
        city: Timisoara,
        salutation: function () { 
        console.log("Hello, I am " + this.name + ", I have " + this.age + "years old");
        }
    }
}
var person = createPerson("Andrei", 20);
