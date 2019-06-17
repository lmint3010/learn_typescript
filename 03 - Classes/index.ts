// Create an interface to for Person Objects
interface Person {
    firstName: string;
    lastName: string;
    room: number;
}

// Create class stand for Student Objects
class Student {
    fullName: string;
    // The use of "public" on arguments in constructor is a shorthand...
    // Allow us to automatically create properties with that name.
    constructor(public firstName: string, public lastName: string, public room: number) {
        this.fullName = `${firstName} ${lastName} - Room: ${room}`
    }
}

// ------ Action Function ------
function greeting(person: Person) {
    console.log(`Hello ${person.firstName} ${person.lastName}`);
}

let user = new Student("Lu", "Minh Thong", 12);

// ------ Runtime code ------
greeting(user);
