// solved problem 4:

// Create a generic function concatenateArrays that accepts multiple arrays of the same type T using rest parameters (...arrays: T[][]) and returns a single combined array containing all elements in the order they were passed.

// Requirements:
// Must use a generic type parameter <T> and rest parameters.
// Do not use any.

const concatenateArrays = <T>(...arrays: T[][]) => {
    return arrays.flat();
}

const allarrays = concatenateArrays<number>([1, 2], [3, 4], [5, 6]);

const allarray2 = concatenateArrays<string>(["Hello"], ["World"], ["TypeScript"], ["kanamama"]);

console.log(allarrays);
console.log(allarray2);