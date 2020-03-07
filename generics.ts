//Generics in functions
function LogAndReturn<T>(value : T) : T {
    console.log(value);
    return value;
};

LogAndReturn<string>("Deepa"); 
LogAndReturn<number>(10);
LogAndReturn<boolean>(true);

//Generics in class
class Logg<T>
{
    public firstName : T;
    public lastName : T;
}

let clsVariable = new Logg<string>();
clsVariable.lastName = "Deepa";
clsVariable.firstName = "Alarka";

let clsNumber = new Logg<number>();
clsNumber.firstName = 10;
clsNumber.lastName = 3;

//Generics in Iterface
interface IMobile<T>{
    name : T;
    password : T;
    gender : T,
    dob : T
}

let user : IMobile<string> = {
    name : "Deepa",
    password : "123",
    gender : "female",
    dob : "03/11/1991"
}

interface ILength{
    length : number;
}

function LoggingIdentity<T extends ILength>(arg : T) : T{
    console.log("ArgumentLength" , arg.length);
    return arg;
}

LoggingIdentity<string>("Deepa");
//LoggingIdentity<number>(1); //Error- Cant extend from Number to Number

interface ILength2{
    length : string;
}

function LoggingIdentity2<T extends ILength>(arg : T) : T{
    console.log("ArgumentLength" , arg.length);
    return arg;
}

LoggingIdentity2<string>("Deepa"); //Doubt- How is string extending string
