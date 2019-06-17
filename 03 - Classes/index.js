// Create class stand for Student Objects
var Student = /** @class */ (function () {
    // The use of "public" on arguments in constructor is a shorthand...
    // Allow us to automatically create properties with that name.
    function Student(firstName, lastName, room) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.room = room;
        this.fullName = firstName + " " + lastName + " - Room: " + room;
    }
    return Student;
}());
// ------ Action Function ------
function greeting(person) {
    console.log("Hello " + person.firstName + " " + person.lastName);
}
var user = new Student("Lu", "Minh Thong", 12);
// ------ Runtime code ------
greeting(user);
