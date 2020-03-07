//Generics in functions
function LogAndReturn(value) {
    console.log(value);
    return value;
}
;
LogAndReturn("Deepa");
LogAndReturn(10);
LogAndReturn(true);
//Generics in class
var Logg = /** @class */ (function () {
    function Logg() {
    }
    return Logg;
}());
var clsVariable = new Logg();
clsVariable.lastName = "Deepa";
clsVariable.firstName = "Alarka";
var clsNumber = new Logg();
clsNumber.firstName = 10;
clsNumber.lastName = 3;
var user = {
    name: "Deepa",
    password: "123",
    gender: "female",
    dob: "03/11/1991"
};
function LoggingIdentity(arg) {
    console.log("ArgumentLength", arg.length);
    return arg;
}
LoggingIdentity("Deepa");
function LoggingIdentity2(arg) {
    console.log("ArgumentLength", arg.length);
    return arg;
}
LoggingIdentity2("Deepa");
