console.log("Let's build a pyramid using JavaScript basics");
console.log("#");
console.log("###");
console.log("#####");
console.log("#######");

let character = "Hello";
let count = 8;
let rows = [];

console.log(character);

character = "World";
console.log(character);

let secondCharacter;
secondCharacter = character;
console.log(secondCharacter);

let profession;
let age;
profession = "SoftwareEntwickler";
console.log(professioin);
console.log(age);

console.log(count + 1);

// Step 21

rows = ["Naomi", "Quincy", "CamperChan"];
console.log(rows[0]);
rows[2] = 10;
console.log(rows);

//  Step 22

rows[rows.length -1];

//  Step 23

//  Step 24

let cities = ["London", "New York", "Mumbai"];
console.log(cities);
cities[cities.length - 1] = "Mexico City";
console.log(cities);

//  Step 25

//  Step 26

rows.push("freeCodeCamp");
console.log(rows);

//  Step 27

let popped = rows.pop();
console.log(popped);

//  Step 28

let pushed = rows.push("freeCodeCamp");
console.log(pushed);

//  Step 29

//  Step 30

rows = [];

//  Step 31

const characterNew = "Hallo";
const countNew = 8;
const rowsNew = [];

//  Step 32

characterNew = "#";

//  Step 33

for("iterator"; "condition", "iteration"){
    logic;
}

//  Step 34

for(let i=0; "condition"; "iteration"){
    logic;
}

//  Step 35

for(let i=0; i < countNew; "iteration"){
    logic;
}

//  Step 36

for(let i = 0; i < countNew; i = i + 1){
    logic;
}

//  Step 37

for(let i = 0; i < countNew; i = i + 1){
    console.log(i);
}

//  Step 38

for(let i = 0; i < countNew; i = i + 1){
    rows.push(i);
}

//  Step 39

let result = "";

//  Step 40

console.log(result);                    //depending on which console you use, you may not see anything printed

//  Step 41

for(const rowNew of rowsNew){

}

//  Step 42

for(let i = 0; i < countNew; i = i + 1){
    result = result + rowNew;

}

//  Step 43

for(let i = 0; i < count; i = i + 1){
    result = result + rowNew + "\n";
}

//  Step 44

for(let i = 0; i < countNew; i = i + 1){
    rowsNew.push(character);
}

//  Step 45

for(let i = 0; i < count; i = i + 1){

    rowsNew.push(character.repeat(i));

}

//  Step 46

for(let i = 0; i < count; i = i + 1){

    rowsNew.push(character.repeat(i + 1));

}

//  Step 47

function padRow(){

}

//  Step 48

function padRow(){

}
padRow();

//  Step 49

function padRow(){

}
const call = padRow();

//  Step 50

function padRow(){

}
const callNew = padRow();
console.log(callNew);

//  Step 51

function padRow2(){
    return "Hello!";
}

//  Step 52 and Step 53

function padRow3(name){
    return name
}

//  Step 54

function padRow4(name){
    return name;
}

const call4 = padRow4("Gaesigua");

//  Step 55

function addTwoNumbers(number1, number2){
    return number1 + number2;
}
let sum = addTwoNumbers(5, 10);
console.log(sum);

//  Step 56

function padRow5(name){
    return character + name;
}

//  Step 57

function padRow6(name){
    const test = "Testing";
    return character + name;
}

//  Step 58

function padRow7(name){
    const test = "Testing";
    return test;
}

//  Step 59

function padRow8(){
    const test = "Testing";
    return test;                //to check back 
}

//  Step 60

function padRow9(name){
    const test = "Testing";
    console.log("This will work!";
    return test;
    console.log("This will not work!");
}

//  Step 61

function padRow10(){
    const test = "Testing";
    return test;
}
const call10 = padRow10();
console.log(call10);

//  Step 62

function padRow11(){

}
const call11 = padRow11();
console.log(call11);

//  Step 63

function padRow12(){

}

//   Step 64

function padRow13(rowNumber, rowCount){

}

//  Step 65

function padRow14(rowNumber, rowCount){
    return character.repeat(rowNumber);
}

//  Step 66

for(let i = 0; i < count; i = i + 1){
    rows.push(padRow());
}

//  Step 67

for(let i = 0; i < count; i = i + 1){
    rows.push(padRow(i + 1, count));
}

//  Step 68

function padRow15(rowNumber, rowCount){
    return " " + character.repeat(rowNumber) + " ";
}

//  Step 69

function padRow16(rowNumber, rowCount){
    return " ".repeat(rowCount - rowNumber) + character.repeat() + " ".repeat(rowCount - rowNumber);
}

//  Step 70

function padRow17(rowNumber, rowCount){
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}