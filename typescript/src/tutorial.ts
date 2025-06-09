/************Type Annotations************ */

// let greeting:string = "This is just a game";
// console.log(greeting.toUpperCase());
// let age:number = 50;
// console.log(age-20);
// let isAdult:boolean = age>=18;
// console.log(isAdult)

/************Union Type****************** */

// let tax: number | string;
// tax = 10;
// console.log(tax)

// const books = ["Rich Dad & Poor Dad", "1984", "My Name Is Khan"];
// let foundBook: string | undefined ;

// for (let book of books) {
//   if (book === "1983") {
//     foundBook = book;
//     break;
//   }
// }

// console.log(foundBook?.length);

// let status: "success" | "pending" | "error";

// status = "success";
// console.log(status);

/*******************Array****************** */

// let randomArr: (number | string)[] = ["Tonmoy", 12];
// console.log("Print", randomArr);

/*******************Objects****************** */

// let car: { brand: string; year: number } = { brand: "Toyota", year: 1984 };
// console.log("Print", car);

// type Person = {
//   name: string;
//   age?: number;
// };

// const person1: Person = {
//   name: "Tonmoy",
//   age: 28,
// };

// const person2: Person = {
//   name: "Karim",
// };

// console.log("Print", person1);
// console.log("Print", person2);

/*******************Functions****************** */

// const names: string[] = ["Rasel", "Karim", "Zabir", "Hamim"];

// const isNameInList = (name: string): boolean => {
//   return names.includes(name);
// };

// let givenName: string = "Karim";

// if (isNameInList(givenName)) {
//   console.log(`${givenName} in the list`);
// } else {
//   console.log(`Not in the list`);
// }

// const calculatePrice = (price: number, discount?: number): number => {
//   return price - (discount || 0);
// };

// let priceAfterDiscount = calculatePrice(200, 20);
// console.log(priceAfterDiscount);

// const calculateScore = (initialScore: number, penaltyPoints: number = 0) => {
//   return initialScore - penaltyPoints;
// };

// console.log(calculateScore(250));

// const sum = (message: string, ...numbers: number[]): string => {
//   const doubled = numbers.map((num) => num * 2);
//   console.log(doubled);

//   let total = numbers.reduce((prev, crr) => {
//     return prev + crr;
//   }, 0);

//   return `${message}: ${total}`;
// };

// let result = sum(`The total is`, 1, 2, 3, 4, 5);
// console.log(result);

// const createStudent = (student: { id: number; name: string }): void => {
//   console.log(`Welcome ${student?.name.toUpperCase()} to our course...`);
// };

// const newStudent = {
//   name: "Tonmoy",
//   id: 846,
// };

// createStudent(newStudent);

// const processData = (
//   input: string | number,
//   config: { reverse: boolean } = { reverse: false }
// ): any => {
//   if (typeof input === "number") {
//     return input * input;
//   } else {
//     return input.toUpperCase();
//   }
// };

// console.log(processData(10, { reverse: true }));

/*******************Type Alias****************** */

// const john: { name: string; id: number; isActive: boolean } = {
//   id: 1,
//   name: "John",
//   isActive: true,
// };

// const susan: { name: string; id: number; isActive: boolean } = {
//   id: 2,
//   name: "Susan",
//   isActive: false,
// };

// const createUser = (user: {
//   name: string;
//   id: number;
//   isActive: boolean;
// }): { name: string; id: number; isActive: boolean } => {
//   return `Hello ${user.name},your is is ${user.id}`;
// };

// console.log(createUser(susan));

// type StringOrNumber = string | number;
// let value: StringOrNumber;
// value = "Tonmoy";
// value = 52;

type Employee = { id: number; name: string; department: string };
type Manager = { id: number; name: string; employees: Employee[] };
type Staff = Employee | Manager;

const printStaffDetails = (staff: Staff): void => {
  if ("employees" in staff) {
    console.log(
      `${staff.name} is the manager who has ${staff.employees.length} employees`
    );
  } else {
    console.log(
      `${staff.name} is an employee in the ${staff.department} department.`
    );
  }
};

const karim: Employee = { id: 1, name: "Karim", department: "IT" };
const selim: Employee = { id: 2, name: "Selim", department: "Sales" };
const tonmoy: Manager = { id: 3, name: "Tonmoy", employees: [karim, selim] };

printStaffDetails(tonmoy);
printStaffDetails(karim);
