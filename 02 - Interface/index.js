// ------ Action Function ------
function greeter(person) {
    return "Hello " + person.firstName + " " + person.lastName;
}
var user = {
    firstName: "Lu",
    lastName: "Minh Thong"
};
// ------ Star to run example ------
console.log(greeter(user));
