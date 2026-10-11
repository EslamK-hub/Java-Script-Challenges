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

/* =================================== Exclusive "or" (xor) Logical Operator (34) ============================ */
function xor(a, b) {
    return a === b ? false : true;
}
console.log(xor(false, false));

/* =================================== Find the first non-consecutive number (35) ============================ */
function firstNonConsecutive(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - 1 !== arr[i - 1]) return arr[i];
    }
    return null;
}
console.log(firstNonConsecutive([6, 7, 8, 9, 10, 11, 13, 14, 15]));

/* =================================== Volume of a Cuboid (36) ============================ */
class Kata {
    static getVolumeOfCuboid(length, width, height) {
        return length * width * height;
    }
}
console.log(Kata.getVolumeOfCuboid(1, 2, 3));

/* =================================== Formatting decimal places #0 (37) ============================ */
function twoDecimalPlaces(n) {
    return Number(n.toFixed(2));
}
console.log(twoDecimalPlaces(5.5589));

/* =================================== Dollars and Cents (38) ============================ */
function formatMoney(amount) {
    return `$${amount.toFixed(2)}`;
}
console.log(formatMoney(3));

/* =================================== Find the position! (39) ============================ */
function position(letter) {
    let alphabet = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
    ];
    return `Position of alphabet: ${alphabet.indexOf(letter) + 1}`;
}
console.log(position("a"));

/* =================================== Opposites Attract (40) ============================ */
function lovefunc(flower1, flower2) {
    return flower1 % 2 !== flower2 % 2;
}
console.log(lovefunc(2, 3));

/* =================================== No zeros for heroes (41) ============================ */
function noBoringZeros(n) {
    let str = String(n);
    while (str.endsWith(0)) {
        str = str.slice(0, str.length - 1);
    }
    return Number(str);
}
console.log(noBoringZeros(960000));

/* =================================== Get the mean of an array (42) ============================ */
function getAverage(marks) {
    return Math.floor(
        marks.reduce((acc, curr) => acc + curr, 0) / marks.length,
    );
}
console.log(getAverage([1, 2, 3, 4]));

/* =================================== Vowel remover (43) ============================ */
function shortcut(string) {
    const vowels = ["a", "e", "i", "o", "u"];
    let result = [];
    for (let i = 0; i < string.length; i++) {
        if (!vowels.includes(string[i])) result.push(string[i]);
    }
    return result.join("");
}
console.log(shortcut("hello"));

/* =================================== Remove exclamation marks (44) ============================ */
function removeExclamationMarks(s) {
    return s.replaceAll("!", "");
}
console.log(removeExclamationMarks("hel!lo!"));

/* =================================== Reversed Strings (45) ============================ */
function solution(str) {
    return str.split("").reverse().join("");
}
console.log(solution("world"));

/* =================================== Beginner - Reduce but Grow (46) ============================ */
function grow(x) {
    return x.reduce((acc, curr) => acc * curr);
}
console.log(grow([1, 2, 3, 4]));

/* =================================== Is it a palindrome? (47) ============================ */
function isPalindrome(x) {
    return x.toLowerCase() === x.toLowerCase().split("").reverse().join("");
}
console.log(isPalindrome("CwDmKZAy"));

/* =================================== Grasshopper - Summation (48) ============================ */
var summation = function (num) {
    let result = 0;
    for (let i = 0; i <= num; i++) {
        result += i;
    }
    return result;
};
console.log(summation(8));

/* =================================== Printing Array elements with Comma delimiters (49) ============================ */
function printArray(array) {
    return array.join(",");
}
console.log(printArray(["h", "o", "l", "a"]));

/* =================================== How many stairs will Suzuki climb in 20 years? (50) ============================ */
var sunday = [
        6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274,
        7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478,
        6063, 5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381,
        5936, 8496, 6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032,
        9871, 5990, 6309, 7825,
    ],
    monday = [
        9175, 7883, 7596, 8635, 9274, 9675, 5603, 6863, 6442, 9500, 7468, 9719,
        6648, 8180, 7944, 5190, 6209, 7175, 5984, 9737, 5548, 6803, 9254, 5932,
        7360, 9221, 5702, 5252, 7041, 7287, 5185, 9139, 7187, 8855, 9310, 9105,
        9769, 9679, 7842, 7466, 7321, 6785, 8770, 8108, 7985, 5186, 9021, 9098,
        6099, 5828, 7217, 9387,
    ],
    tuesday = [
        8646, 6945, 6364, 9563, 5627, 5068, 9157, 9439, 5681, 8674, 6379, 8292,
        7552, 5370, 7579, 9851, 8520, 5881, 7138, 7890, 6016, 5630, 5985, 9758,
        8415, 7313, 7761, 9853, 7937, 9268, 7888, 6589, 9366, 9867, 5093, 6684,
        8793, 8116, 8493, 5265, 5815, 7191, 9515, 7825, 9508, 6878, 7180, 8756,
        5717, 7555, 9447, 7703,
    ],
    wednesday = [
        6353, 9605, 5464, 9752, 9915, 7446, 9419, 6520, 7438, 6512, 7102, 5047,
        6601, 8303, 9118, 5093, 8463, 7116, 7378, 9738, 9998, 7125, 6445, 6031,
        8710, 5182, 9142, 9415, 9710, 7342, 9425, 7927, 9030, 7742, 8394, 9652,
        5783, 7698, 9492, 6973, 6531, 7698, 8994, 8058, 6406, 5738, 7500, 8357,
        7378, 9598, 5405, 9493,
    ],
    thursday = [
        6149, 6439, 9899, 5897, 8589, 7627, 6348, 9625, 9490, 5502, 5723, 8197,
        9866, 6609, 6308, 7163, 9726, 7222, 7549, 6203, 5876, 8836, 6442, 6752,
        8695, 8402, 9638, 9925, 5508, 8636, 5226, 9941, 8936, 5047, 6445, 8063,
        6083, 7383, 7548, 5066, 7107, 6911, 9302, 5202, 7487, 5593, 8620, 8858,
        5360, 6638, 8012, 8701,
    ],
    friday = [
        5000, 5642, 9143, 7731, 8477, 8000, 7411, 8813, 8288, 5637, 6244, 6589,
        6362, 6200, 6781, 8371, 7082, 5348, 8842, 9513, 5896, 6628, 8164, 8473,
        5663, 9501, 9177, 8384, 8229, 8781, 9160, 6955, 9407, 7443, 8934, 8072,
        8942, 6859, 5617, 5078, 8910, 6732, 9848, 8951, 9407, 6699, 9842, 7455,
        8720, 5725, 6960, 5127,
    ],
    saturday = [
        5448, 8041, 6573, 8104, 6208, 5912, 7927, 8909, 7000, 5059, 6412, 6354,
        8943, 5460, 9979, 5379, 8501, 6831, 7022, 7575, 5828, 5354, 5115, 9625,
        7795, 7003, 5524, 9870, 6591, 8616, 5163, 6656, 8150, 8826, 6875, 5242,
        9585, 9649, 9838, 7150, 6567, 8524, 7613, 7809, 5562, 7799, 7179, 5184,
        7960, 9455, 5633, 9085,
    ];

function stairsIn20(s) {
    return s.flat(Infinity).reduce((total, n) => total + n, 0) * 20;
}
const stairs = [sunday, monday, tuesday, wednesday, thursday, friday, saturday];
console.log(stairsIn20(stairs));
