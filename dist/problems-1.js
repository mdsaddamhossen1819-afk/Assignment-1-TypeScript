const multiplyValue = (value, multiplier) => {
    if (multiplier === undefined) {
        return value * 2;
    }
    return value * multiplier;
};
const multivalue = multiplyValue(40);
const multivalue2 = multiplyValue(20, 10);
const multivalue3 = multiplyValue(12);
console.log(multivalue);
console.log(multivalue2);
console.log(multivalue3);
export {};
