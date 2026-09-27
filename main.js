/* =================================== Even or Odd (1) ============================ */
function evenOrOdd(number) {
    return number % 2 === 0 ? "Even" : "Odd";
}
console.log(evenOrOdd(6));

/* =================================== Sum of positive (2) ============================ */
function positiveSum(arr) {
    return arr.filter((x) => x >= 0).reduce((acc, curr) => acc + curr, 0);
}
console.log(positiveSum([1, 5, -3, 14]));

/* =================================== Sum without highest and lowest number (3) ============================ */
function sumArray(array) {
    if (array == null) return 0;
    return array
        .sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((acc, curr) => acc + curr, 0);
}
console.log(sumArray([6, 2, 1, 8, 10]));

/* =================================== String repeat (4) ============================ */
function repeatStr(num, str) {
    return str.repeat(num);
}
console.log(repeatStr(3, "Hello"));

/* =================================== Convert number to reversed array of digits (5) ============================ */
function digitize(n) {
    return n
        .toString()
        .split("")
        .map((a) => Number(a))
        .reverse();
}
console.log(digitize(123456789));

/* =================================== Counting sheep (6) ============================ */
function countSheep(sheep) {
    let counter = 0;
    sheep.map((m) => (m === true ? counter++ : 0));
    return counter;
}
console.log(countSheep([undefined, null, false, true]));

/* =================================== Opposite number (7) ============================ */
function opposite(number) {
    return -number;
}
console.log(opposite(-3));

/* =================================== Return Negative (8) ============================ */
function makeNegative(num) {
    return num > 0 ? -num : num;
}
console.log(makeNegative(30));

/* =================================== Jenny's secret message (9) ============================ */
function greet(name) {
    return name !== "Johnny" ? "Hello, " + name + "!" : "Hello, my love!";
}
console.log(greet("Johnny"));

/* =================================== A Needle in the Haystack (10) ============================ */
function findNeedle(haystack) {
    return "found the needle at position " + haystack.indexOf("needle");
}
console.log(
    findNeedle([
        "hay",
        "junk",
        "hay",
        "hay",
        "moreJunk",
        "needle",
        "randomJunk",
    ]),
);

/* =================================== Count of positives / sum of negatives (11) ============================ */
function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0) return [];

    let positivesArray = input.filter((x) => x > 0).length;
    let sumNegatives = input
        .filter((x) => x < 0)
        .reduce((acc, curr) => acc + curr, 0);

    return [positivesArray, sumNegatives];
}
console.log(
    countPositivesSumNegatives([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
    ]),
);

/* =================================== Double Char (12) ============================ */
function doubleChar(str) {
    return str
        .split("")
        .map((x) => x.repeat(2))
        .join("");
}
console.log(doubleChar("String"));

/* =================================== Basic Mathematical Operations (13) ============================ */
function basicOp(operation, value1, value2) {
    return eval(value1 + operation + value2);
}
console.log(basicOp("+", 4, 7));

/* =================================== To square(root) or not to square(root) (14) ============================ */
function squareOrSquareRoot(array) {
    return array.map(n => Number.isInteger(Math.sqrt(n)) ? Math.sqrt(n) : n * n)
}
console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));