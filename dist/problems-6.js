// problems -6 
// Write a generic function pluckValues that accepts an array of objects (items: T[]) and a valid property key of those objects (key: K), and returns a new array (T[K][]) containing the values of that specific property from each object in the same order.
// Requirements:
// Use generics with the keyof constraint (<T, K extends keyof T>).
// Do not use any.
const pluckValues = (items, key) => {
    return items.map(item => item[key]);
};
const users = [
    { name: "Rahim", age: 25, city: "Dhaka" },
    { name: "Karim", age: 30, city: "Feni" },
    { name: "Saddam", age: 22, city: "Cumilla" }
];
const alluser = pluckValues(users, 'name');
const alluser2 = pluckValues(users, "age");
const alluser3 = pluckValues(users, "city");
console.log(alluser);
console.log(alluser2);
console.log(alluser3);
export {};
