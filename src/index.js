module.exports = function toReadable(numb) {
    let res = numb.toString();

    let numbers;
    let tens;
    let hundreds;

    let numbersArr = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    let tensArr = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    let additionalArr = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    let numbersRes;
    let tensRes;
    let hundredsRes;

    for (let i = 1; i <= res.length; i++) {
        switch (res.length) {
            case 1:
                numbers = parseInt(res[res.length - 1]);
                break;
            case 2:
                numbers = parseInt(res[res.length - 1]);
                tens = parseInt(res[res.length - 2]);
                break;
            case 3:
                numbers = parseInt(res[res.length - 1]);
                tens = parseInt(res[res.length - 2]);
                hundreds = parseInt(res[res.length - 3]);
                break;
        }
    }
    if (hundreds !== undefined) {
        hundredsRes = `${numbersArr[hundreds]} hundred`;
    } else {
        hundredsRes = undefined;
    }
    if (tens === 1) {
        tensRes = additionalArr[numbers];
    } else if (tens !== 1 && tens !== 0) {
        tensRes = tensArr[tens];
    } else {
        tensRes = undefined;
    }

    if (tens === 1 || ((hundreds !== 0 || tens !== 0) && numbers === 0)) {
        numbersRes = undefined;
    } else {
        numbersRes = numbersArr[numbers];
    }

    if (numbers === 0 && tens === undefined && hundreds === undefined) {
        numbersRes = "zero";
    }

    let resultArr = [hundredsRes, tensRes, numbersRes];

    return resultArr.filter((el) => el !== undefined).join(" ");
};
