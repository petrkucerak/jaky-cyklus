
const type = ["C", "A", "B"];

function digitalSum(number) {
    let ret = 0;
    while (number > 0) {
        ret = ret + (number % 10);
        number = Math.floor(number / 10);
    }
    return ret;
}

export function getYearType() {
    const today = new Date();
    const sum = digitalSum(today.getFullYear());

    return type[sum % 3];
}

/**
 * ciferny soucet % 3
 * 0 = C
 * 1 = A
 * 2 = B
 * 
 */