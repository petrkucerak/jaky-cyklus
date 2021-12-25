const type = ["C", "A", "B"];
const today = new Date();

function digitalSum(number) {
    let ret = 0;
    while (number > 0) {
        ret = ret + (number % 10);
        number = Math.floor(number / 10);
    }
    return ret;
}

function corrector() {
    // set to date of Christmas Eve
    let date = new Date(today.getFullYear() + "-12-24");
    // set to date of 4th Advent Sunday
    while (date.getDay() != 0) {
        date.setDate(date.getDate() - 1);
    }
    // get date of the 1st Advent Sunday
    date.setDate(date.getDate() - (3 * 7));
    if (today >= date) return 1;
    return 0;
}

export function getYearType() {
    const sum = digitalSum(today.getFullYear()) + corrector();
    return type[sum % 3];
}
