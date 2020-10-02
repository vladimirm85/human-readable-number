const NUMBERS = {
    0: "",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
    100: "hundred",
};

const TENS = {
    0: "",
    1: "",
    2: {
        name: "hundred",
        pow: 2,
    },
    3: {
        name: "thousand",
        pow: 3,
    },
    4: {
        name: "thousand",
        pow: 3,
    },
    5: {
        name: "thousand",
        pow: 3,
    },
    6: {
        name: "million",
        pow: 6,
    },
    7: {
        name: "million",
        pow: 6,
    },
    8: {
        name: "million",
        pow: 6,
    },
};

const getReadable = (number) =>
    number < 20
        ? NUMBERS[number]
        : `${NUMBERS[number - (number % 10)]} ${NUMBERS[String(number)[1]] || ""}`;

const toReadable = (number) => {
    const tens = Math.trunc(Math.log10(number));
    if (tens < 2) return getReadable(number);
    return (
        `${toReadable(Math.trunc(number / 10 ** TENS[tens].pow)).trim()} ${
            TENS[tens].name
        } ` + toReadable(number % 10 ** TENS[tens].pow)
    );
};

module.exports = (number) => (number) ? toReadable(number).trim() : 'zero';
