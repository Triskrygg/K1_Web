var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Trygg", "W.", "User");
$("body").append(greeter(user));
//# sourceMappingURL=C:/VSProjects/K1_Web/K1_Web/Scripts/Maps/main.js.map