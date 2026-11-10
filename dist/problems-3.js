//  solved problems 3 :
//  Create a function formatCoordinate that accepts a readonly tuple representing a coordinate and location name in the exact order [latitude, longitude, locationName] ([number, number, string]), and returns a formatted location string.
// Requirements:
// Apply the readonly modifier to the tuple parameter so it cannot be mutated inside the function.
// Return the exact string format: "Location: [locationName] ([latitude], [longitude])" without rounding the numbers.
const formatCoordinate = (coordinate) => {
    const [latitude, longitude, locationName] = coordinate;
    return `Location: ${locationName} ${latitude} ${longitude}`;
};
const allcoordinate = formatCoordinate([23.8103, 90.4125, "Dhaka"]);
console.log(allcoordinate);
export {};
