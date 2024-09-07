// interface someValue {
//   name: string;
//   id: number;
// }

// let someObj: someValue = {
//   name: "Tonmoy",
//   id: 153,
// };

// console.log(someObj)

// let awesomeName: string = "shakeAndBake";
// awesomeName = awesomeName.toUpperCase();
// console.log(awesomeName);

// let amount: number = 10;
// let age: number = 19;
// console.log(amount);

// let isOlder: boolean = age < 18;

// let isAwesome: boolean = true;
// console.log(isAwesome);
// console.log(isOlder);

// let requestStatus: "success" | "pending" | "reject" = "pending";
// requestStatus = "success";

// console.log(requestStatus);

// let notSure: any = 4;
// notSure = "This is a game";
// console.log(notSure);

// notSure =false;
// console.log(notSure);

// const books = ["1984", "Brave New World", "Fahrenheit 451"];

// let foodBank: string | undefined;

// for (let book of books) {
//   if (book === "1984") {
//     foodBank = book;
//     foodBank = foodBank.toUpperCase();
//     break;
//   }
// }

// console.log(foodBank?.length);

// let prices:number[] =[100,75,42];
// let fruits:string[] = ['Apple','Litchi','Orange'];

// let mixedArray:(string | number)[] = [1,'two',3];
// mixedArray.push("Three");

// console.log(mixedArray);

//*********************Objects*************************/

// let person: { name: string; id: number; age: number } = {
//   name: "Tonmoy",
//   id: 15454,
//   age: 15,
// };

// person.name = "Silmun";
// console.log(person);

// type Car = {
//   brand: string;
//   isBlack: boolean;
//   price: number;
// };

// let car: Car = {
//   brand: "Ford",
//   isBlack: true,
//   price: 5000,
// };

// console.log(car);

// interface Student {
//   name: string;
//   id: number;
//   isAdult: boolean;
// }

// let student: Student = {
//   name: "Karim",
//   id: 565,
//   isAdult: true,
// };

// console.log(student);

// let book = { title: "book", cost: 20 };
// let pen = { title: "pen", cost: 5 };
// let notebook = { title: "notebook" };

// let items: { readonly title: string; cost?: number }[] = [book, pen, notebook];
// console.log(items);

// let product1 = { title: "Shirt", price: 20 };
// let product2 = { title: "Pants" };

// let products: { title: string; price?: number }[] = [product1, product2];

// console.log(products);

//*********************Functions*************************/

// function printHi(name: string) {
//   console.log(`Hello,${name}`);
// }

// printHi("Tonmoy");

// function calculateDiscount(price: number): number {
//   // price.toUpperCase();
//   const hasDiscount = true;
//   if (hasDiscount) {
//     return price;
//     // return 'Discount Applied';
//   }
//   return price * 0.9;
// }

// const finalPrice = calculateDiscount(200);
// console.log(finalPrice);

// const names: string[] = ["John", "Jane", "Jim", "Jill"];

// function isNameInList(name: string): boolean {
//   return names.includes(name);
// }

// let nameToCheck = "Johnny";

// if (isNameInList(nameToCheck)) {
//   console.log(`${nameToCheck} is in the list`);
// } else {
//   console.log(`${nameToCheck} is not in the list`);
// }

// function calculatePrice(price: number, discount?: number) {
//   return price - (discount | 0);
// }

// console.log(calculatePrice(100,5))

// function sum(message: string, ...numbers: number[]): string {
//   let summation = numbers.reduce((acc, curr) => acc + curr, 0);

//   return `${message} ${summation}`;
// }

// console.log(sum("The Sum Is:", 1, 2, 3, 4, 5));

// function processInput(input: string | number) {
//   if (typeof input === "number") {
//     console.log(input * 2);
//   } else {
//     console.log(input.toUpperCase());
//   }
// }

// processInput(10);
// processInput("Hello");

// function createStudent(student: { id: number; name: string }): void {
//   console.log(`Hello ${student.name.toUpperCase()}!!!`);
// }

// const newStudent = {
//   id: 5,
//   name: "Tonmoy",
// };

// createStudent(newStudent);

// function processData(input:string|number,config:{reverse:boolean}={reverse:false}):string | number{
//   if (typeof input ==="number"){
//     return input*input
//   }else{
//     return config?.reverse?
//   }
// }

// type stringOrNumber = string | number;
// let value: stringOrNumber;

// value = "Red";
// value = 1;

// console.log(value);

// type Theme = "light" | "dark";

// let theme: Theme;

// theme = "light";
// theme = "dark";

// type Employee = {
//   id: number;
//   name: string;
//   department: string;
// };

// type Manager = {
//   id: number;
//   name: string;
//   employees: Employee[];
// };

// type Staff = Employee | Manager;

// function printStaffDetails(staff: Staff): void {
//   if ("employees" in staff) {
//     console.log(
//       `${staff.name} is a manager of ${staff.employees.length} employees.`
//     );
//   } else {
//     console.log(
//       `${staff.name} is an employee in the ${staff.department} department.`
//     );
//   }
// }

// const alice: Employee = {
//   id: 1,
//   name: "Alice",
//   department: "Sales",
// };

// const tonmoy: Employee = {
//   id: 1,
//   name: "Tonmoy",
//   department: "Tech",
// };

// const modon: Manager = {
//   id: 2,
//   name: "Damra Modon",
//   employees: [alice, tonmoy],
// };

// printStaffDetails(alice);
// printStaffDetails(modon);

// type Book = { id: number; name: string; price: number };

// const book1: Book = {
//   id: 1,
//   name: "Lal Sontrash",
//   price: 50,
// };

// const book2: Book & { discount: number } = {
//   id: 1,
//   name: "Lal Sontrash",
//   price: 50,
//   discount: 0.15,
// };

// console.log(book2);

// const propName = 'age';

// type Animal = {
//   [propName]: number;
// };

// let tiger: Animal = { [propName]: 5 };

// interface Book {
//   readonly isbn: number;
//   title: string;
//   authon: string;
//   genre?: string;
//   printAuthor(): void;
//   printTitle(message: string): string;
// }

// const deepWork: Book = {
//   isbn: 5345465454,
//   title: "Lal Sontrash",
//   authon: "Mohiuddin Ahmed",
//   genre: "History",
//   printAuthor() {
//     console.log(`${this.authon} is the author`);
//   },
//   printTitle(message) {
//     return `${this.title} is an ${message}`;
//   },
// };

// const deepWork2: Book = {
//   isbn: 5345455554,
//   title: "Ek Egaro",
//   authon: "Mohiuddin Ahmed",
// };

// console.log(deepWork);
// deepWork.printAuthor();
// console.log(deepWork.printTitle("awsome book"));
// console.log(deepWork2);

// interface Computer {
//   readonly id: number;
//   brand: string;
//   ram: number;
//   storage?: number;
//   upgradeRam(increseAmnt: number): number;
// }

// const laptop: Computer = {
//   id: 1,
//   brand: "Samsung",
//   ram: 8,
//   upgradeRam(increseAmnt) {
//     this.ram += increseAmnt;
//     return this.ram;
//   },
// };

// laptop.storage = 256;
// laptop.upgradeRam(4);

// console.log(laptop);

// interface Student {
//   id: number;
//   name: string;
//   department: string;
// }

// interface Faculty extends Student {
//   facId: number;
// }

// const student: Student = {
//   id: 123,
//   name: "Tonmoy",
//   department: "CSE",
// };

// const teacher: Faculty = {
//   id: 124,
//   name: "Zahir",
//   department: "CSE",
//   facId: 5,
// };

// console.log(teacher);

// interface Person {
//   name: string;
// }

// interface DogOwner extends Person {
//   dogName: string;
// }

// interface Manager extends Person {
//   managePeople(): void;
//   delegateTasks(): void;
// }

// function getEmployee(): Person | DogOwner | Manager {
//   const random = Math.random();

//   if (random < 0.33) {
//     return {
//       name: "Tonmoy",
//     };
//   } else if (random < 0.66) {
//     return {
//       name: "Karim",
//       dogName: "Sara",
//     };
//   } else {
//     return {
//       name: "John",
//       managePeople: () => console.log("Managing people..."),
//       delegateTasks: () => console.log("Delegating tasks..."),
//     };
//   }
// }

// const employee: Person | DogOwner | Manager = getEmployee();
// console.log(employee);

// let person: [string, number] = ["John", 25];
// console.log(person[0]);
// console.log(person[1]);

// let john: [string, number?] = ["John"];

// function getPerson(): [string, number] {
//   return ["Tonmoy", 28];
// }

// let randomPerson = getPerson();
// console.log(randomPerson[0]);
// console.log(randomPerson[1])

// enum ServerResponseStatus {
//   Success = 200,
//   Error = "Error",
// }

// interface ServerResponse {
//   result: ServerResponseStatus;
//   data: string[];
// }

// function getServerResponse(): ServerResponse {
//   return {
//     result: ServerResponseStatus.Success,
//     data: ["first item", "second item"],
//   };
// }

// const response: ServerResponse = getServerResponse();
// console.log(response);

// enum ServerResponseStatus {
//   Success = 200,
//   Error = 500,
// }

// Object.values(ServerResponseStatus).forEach((value) => {
//   if (typeof value === "number") {
//     console.log(value);
//   }
// });

// enum UserRole {
//   Admin,
//   Manager,
//   Employee,
// }

// type User = {
//   id: number;
//   name: string;
//   role: UserRole;
//   contact: [string, string];
// };

// function createUser(user: User): User {
//   return user;
// }

// const user: User = createUser({
//   id: 1,
//   name: "Tonmoy Zohani",
//   role: UserRole.Employee,
//   contact: ["zohani@gmail.com", "zohani0804"],
// });

// console.log(user);

// let someValue: any = "This is a string";

// let strLength: number = someValue.length;
// console.log(strLength);

// type Bird = {
//   name: string;
// };

// let birdString = '{"name": "Eagle"}';
// let dogString = '{"breed": "Poodle"}';

// let birdObject = JSON.parse(birdString);
// let dogObject = JSON.parse(dogString);

// let bird = birdObject as Bird;
// let dog = dogObject as Bird;

// console.log(bird);
// console.log(dog);

// enum Status {
//   Pending = "pending",
//   Declined = "declined",
// }

// console.log(Status.Pending);

// type User = {
//   name: string;
//   status: Status;
// };

// const statusValue = "pending";
// const user: User = { name: "Tonmoy", status: statusValue as Status };
// console.log(user);

// enum Color {
//   Red,
//   Blue,
// }

// function getColorName(color: Color): Color {
//   return color
// }

// console.log(getColorName(Color.Red));

// type ValueType = string | number | boolean;

// let value: ValueType;
// const random = Math.random();

// value = random < 0.33 ? "Hello" : random < 0.66 ? 123.653 : true;

// function checkValue(value: ValueType) {
//   if (typeof value === "string") {
//     console.log(value.toLowerCase());
//     return;
//   }

//   if (typeof value === "number") {
//     console.log(value.toFixed(2));
//     return;
//   }

//   console.log(`boolean:${value}`);
// }

// checkValue(value);

// function identity<T>(arg: T): T {
//     return arg;
// }

// let output1 = identity<string>("Hello, TypeScript!");
// let output2 = identity<number>(42);

// function getFirstElement<T>(arr: T[]): T {
//     return arr[0];
// }

// let firstString = getFirstElement<string>(["apple", "banana", "cherry"]);
// let firstNumber = getFirstElement<number>([1, 2, 3, 4, 5]);

// function genericFunction<T>(arg: T): T {
//   return arg;
// }

// const someStringValue = genericFunction<string>("Hello World");
// const someNumberValue = genericFunction<number>(2);

// console.log(someNumberValue);
// console.log(someStringValue);

// interface GenericInterface<T> {
//   value: T;
//   getValue: () => T;
// }

// const genericString: GenericInterface<string> = {
//   value: "Hello World",
//   getValue() {
//     return this.value;
//   },
// };

// async function someFunc(): Promise<string> {
//   return "Hello World";
// }

// const result = someFunc();

// function generateStringArray(length: number, value: string): string[] {
//   let result: string[] = [];
//   result = Array(length).fill(value);
//   return result;
// }

// console.log(generateStringArray(3, "Allah"));

// function createArray<T>(length: number, value: T): T[] {
//   let result: T[] = [];
//   result = Array(length).fill(value);
//   return result;
// }

// console.log(createArray<string>(3, "Muhammad (PBUH)"));

// function pair<T, U>(param1: T, param2: U): [T, U] {
//   return [param1, param2];
// }

// type Car = {
//   brand: string;
//   model: string;
// };

// const car: Car = {
//   brand: "ford",
//   model: "mustang",
// };

// type Product = {
//   name: string;
//   price: number;
// };

// const product: Product = {
//   name: "shoes",
//   price: 1.99,
// };

// type Student = {
//   name: string;
//   age: number;
// };

// const student: Student = {
//   name: "peter",
//   age: 20,
// };

// function printName<T extends { name: string }>(input: T): void {
//   console.log(input.name);
// }

// printName(student);
// printName(product);
// printName(car);

// interface StoreData<T = any> {
//   data: T[];
// }

// const storeNumbers: StoreData<number> = {
//   data: [2, 5, 1, 4],
// };

// const randomStaff: StoreData = {
//   data: ["random", 2, 4],
// };

// console.log(storeNumbers);
// console.log(randomStaff);

const url = "https://www.course-api.com/react-tours-project";

async function fetchData(url: string) {
  try {
    const response = await fetch(url);

    // Check if the request was successful.
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    const errMsg =
      error instanceof Error ? error.message : "there was an error...";
    console.error(errMsg);
    // throw error;
    return [];
  }
}

const tours = await fetchData(url);
tours.map((tour: any) => {
  console.log(tour.name);
});