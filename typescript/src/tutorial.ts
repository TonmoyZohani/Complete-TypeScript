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

const calculatePrice = (price: number, discount?: number): number => {
  return price - (discount || 0);
};

let priceAfterDiscount = calculatePrice(200, 20);
console.log(priceAfterDiscount);

const calculateScore = (initialScore: number, penaltyPoints: number = 0) => {
  return initialScore - penaltyPoints;
};

console.log(calculateScore(250));
