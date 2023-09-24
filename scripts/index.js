let age = prompt("Hello, what ur age?");
let role;
if (age >= 0 && age <=12) {
role = "дитина";
} else if (age >= 13 && age <= 18) {
    role = "підліток";
} else if (age >= 19 && age <= 60) {
    role = "дорослий";
} else {
    role = "пенсіонер";
}
alert(role);

let num = prompt("Hello, say number?");
let simvol;

if (num === "0") {
    simvol = ")";
} else if (num === "1") {
    simvol = "!";
} else if (num === "2") {
    simvol = "@";
} else if (num === "3") {
    simvol = "#";
} else if (num === "4") {
    simvol = "$";
} else if (num === "5") {
    simvol = "%";
} else if (num === "6") {
    simvol = "^";
} else if (num === "7") {
    simvol = "&";
} else if (num === "8") {
    simvol = "*";
} else if (num === "9") {
    simvol = "(";
} else {
    simvol = "некоректний номер";
}

alert(`Ваш символ "${simvol}"`);

let year = prompt("Введіть рік:");
year = parseInt(year);

if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
    alert("Цей рік є високосним.");
} else {
    alert("Цей рік не є високосним.");
}