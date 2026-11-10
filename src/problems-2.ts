//  solved problems 2 :


const formatCoordinate = (
    coordinate:readonly[number, number, string]
) => {
    // destructuring kora holo coordinate ke :
    const [latitude, longitude, locationName] = coordinate;

    return `Location: ${locationName} ${latitude} ${longitude}`;

}
const allcoordinate = formatCoordinate([23.8103, 90.4125, "Dhaka"]);
console.log(allcoordinate);