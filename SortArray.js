// Create two single dimensional arrays
const numbers = [24, 65, 21, 5, 9, 32, 42, 80, 57];
const names = ["Zenvo", "Erica", "Jordie", "Alicia", "Redon"];

// Merge the arrays
const mergedArray = numbers.concat(names);

// Sort numbers in reverse numerical order
numbers.sort((a, b) => b - a);

// Sort names alphabetically
names.sort();

// Log the results to the console
console.log("Merged array:", mergedArray);
console.log("Numbers (reverse sorted):", numbers);
console.log("Names (alphabetical sorted):", names);
