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
    return array.map((n) =>
        Number.isInteger(Math.sqrt(n)) ? Math.sqrt(n) : n * n,
    );
}
console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));

/* =================================== Count by X (15) ============================ */
function countBy(x, n) {
    let newArray = [];
    for (let i = 1; i <= n; i++) {
        newArray.push(x * i);
    }
    return newArray;
}
console.log(countBy(1, 10));

/* =================================== Remove String Spaces (16) ============================ */
function noSpace(x) {
    return x.split(" ").join("");
}

/* =================================== Invert Values (17) ============================ */
function invert(array) {
    return array.map((x) => -x);
}
console.log(invert([1, -2, 3, -4, 5]));

/* =================================== Convert boolean values to strings 'Yes' or 'No' (18) ============================ */
function boolToWord(bool) {
    return bool ? "Yes" : "No";
}
console.log(boolToWord(false));

/* =================================== Reversing Words in a String (19) ============================ */
function reverse(string) {
    return string.split(" ").reverse().join(" ");
}
console.log(reverse("Hello World"));

/* =================================== Keep Hydrated (20) ============================ */
function litres(time) {
    return Math.floor(time / 2);
}
console.log(litres(6.7));

/* =================================== Convert a Number to a String! (21) ============================ */
function numberToString(num) {
    return `${num}`;
}
console.log(numberToString(123));

/* =================================== Calculate average (22) ============================ */
function findAverage(array) {
    if (array.length === 0) return 0;
    return array.reduce((acc, curr) => acc + curr, 0) / array.length;
}
console.log(findAverage([1, 2, 3, 4]));

/* =================================== Convert a String to a Number! (23) ============================ */
const stringToNumber = function (str) {
    return Number(str);
};
console.log(stringToNumber("123"));

/* =================================== Count the Monkeys! (24) ============================ */
function monkeyCount(n) {
    let newArray = [];
    for (let i = 1; i <= n; i++) {
        newArray.push(i);
    }
    return newArray;
}
console.log(monkeyCount(10));

/* =================================== Welcome! (25) ============================ */
function greet(language) {
    let languages = {
        english: "Welcome",
        czech: "Vitejte",
        danish: "Velkomst",
        dutch: "Welkom",
        estonian: "Tere tulemast",
        finnish: "Tervetuloa",
        flemish: "Welgekomen",
        french: "Bienvenue",
        german: "Willkommen",
        irish: "Failte",
        italian: "Benvenuto",
        latvian: "Gaidits",
        lithuanian: "Laukiamas",
        polish: "Witamy",
        spanish: "Bienvenido",
        swedish: "Valkommen",
        welsh: "Croeso",
    };

    return languages.hasOwnProperty(language)
        ? languages[language]
        : languages["english"];
}
console.log(greet("Arabic"));

/* =================================== Sentence Smash (26) ============================ */
function smash(words) {
    return words.join(" ");
}
console.log(smash(["hello", "world", "this", "is", "great"]));

/* =================================== Switch it Up! (27) ============================ */
function switchItUp(number) {
    switch (number) {
        case 0:
            return "Zero";
        case 1:
            return "One";
        case 2:
            return "Two";
        case 3:
            return "Three";
        case 4:
            return "Four";
        case 5:
            return "Five";
        case 6:
            return "Six";
        case 7:
            return "Seven";
        case 8:
            return "Eight";
        case 9:
            return "Nine";
        default:
            return 0;
    }
}
console.log(switchItUp(1));

/* =================================== Do I get a bonus? (28) ============================ */
function bonusTime(salary, bonus) {
    return bonus ? `\u00A3${salary * 10}` : `£${salary}`;
}
console.log(bonusTime(1000, true));

/* =================================== Exclamation marks (29) ============================ */
function remove(string) {
    return string.replace(/!$/, "");
}
console.log(remove("Hi!"));

/* =================================== Are You Playing Banjo? (30) ============================ */
function areYouPlayingBanjo(name) {
    return name.charAt(0) === "R" || name.charAt(0) === "r"
        ? name + " plays banjo"
        : name + " does not play banjo";
}
console.log(areYouPlayingBanjo("Mohamed"));

/* =================================== Removing Elements (31) ============================ */
function removeEveryOther(arr) {
    return arr.filter((x, i) => i % 2 === 0);
}
console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]));

/* =================================== Unfinished Loop - Bug Fixing #1 (32) ============================ */
function createArray(number) {
    const newArray = [];
    for (let counter = 1; counter <= number; counter++) {
        newArray.push(counter);
    }
    return newArray;
}

/* =================================== Transportation on vacation (33) ============================ */
function rentalCarCost(d) {
    let total = d * 40;
    return d >= 7 ? total - 50 : d >= 3 ? total - 20 : total;
}
console.log(rentalCarCost(1));