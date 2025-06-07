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

type Person = {
  name: string;
  age?: number;
};

const person1: Person = {
  name: "Tonmoy",
  age: 28,
};

const person2: Person = {
  name: "Karim",
};

console.log("Print", person1);
console.log("Print", person2);
