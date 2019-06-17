// Use Interface to describes your objects
interface Person {
    // This is not an normal JavaScript Object
    firstName: string;
    lastName: string;
}

// ------ Action Function ------
function greeter(person: Person) {
    return `Hello ${person.firstName} ${person.lastName}`;
}

let user = {
    firstName: "Lu",
    lastName: "Minh Thong"
};

// ------ Star to run example ------
console.log(greeter(user));