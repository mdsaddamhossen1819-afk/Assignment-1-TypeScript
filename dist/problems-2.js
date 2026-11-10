// solved problem -2 :
// Create a function processInput that accepts a value which may be a string, number, or boolean, and returns a formatted result based on the value's type:
// If the input is a string → trim any leading/trailing spaces and return it in lowercase.
// If the input is a number → return the number multiplied by 10.
// If the input is a boolean → return "Active" if true, or "Inactive" if false.
// Requirements:
// Write the correct union type for the function parameter and the return type.
// Use type narrowing (typeof) to handle each case safely.
const processInput = (value) => {
    if (typeof value === "string") {
        return value.toLowerCase();
    }
    else if (typeof value === "number") {
        return value * 10;
    }
    else {
        return value ? "Active" : "Inactive";
    }
};
processInput("Hello world");
processInput(12);
processInput(true);
processInput(false);
export {};
