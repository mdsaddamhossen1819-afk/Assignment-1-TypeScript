// solved first problem :
// Create a function multiplyValue that accepts a number value and an optional number multiplier.
// If multiplier is provided, return value multiplied by multiplier.
// If multiplier is not provided (undefined), return value multiplied by 2 by default.
// Requirements:
// Handle 0 properly when passed as multiplier (multiplying by 0 must return 0).
const multiplyValue = (value, multiplier) => {
    if (multiplier === undefined) {
        return value * 2;
    }
    return value * multiplier;
};
const multivalue = multiplyValue(40);
const multivalue2 = multiplyValue(20, 10);
const multivalue3 = multiplyValue(12);
const multivalue4 = multiplyValue(12, 0);
console.log(multivalue);
console.log(multivalue2);
console.log(multivalue3);
console.log(multivalue4);
export {};
