// 1 Problem Simple calculator through string numbers 
function add(numbers) {
    if (numbers === "") {
        return 0;
    }

    let delimiter = ","; 
    let customDelimiterMatch = numbers.match(/^\/\/(.+)\n/);

    if (customDelimiterMatch) {
        delimiter = customDelimiterMatch[1]; 
        numbers = numbers.split("\n").slice(1).join("\n");
    }

    numbers = numbers.replace(/\n/g, delimiter);

    let numArray =numbers.split(delimiter).map(num => parseInt(num, 10));

    let negatives = numArray.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
    }


 
    let sum = numArray.reduce((acc, current) => {
        return acc + parseInt(current, 10);
    }, 0);

    return sum;
}



// console.log(add(""));      
// console.log(add("1"));
// console.log(add("1,5"));     

// 2. Allow the add method to handle any amount of numbers.

// check with first 70 numbers
// console.log(add("1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,56,57,57,58,59,60,61,62,63,64,65,66,67,68,69,70"));    

let numbers = [...Array(1000000).keys()].map(i => i + 1).join(',');
// console.log(add(numbers)) 

// 3 Allow the add method to handle new lines between numbers (instead of commas)
// console.log(add("1\n2,3"));

// // 3.1 more test cases fir that
// console.log(add("6,10\n15,20"));
// console.log(add("100\n200\n300"));

// 4 Support different delimiters:
// console.log(add("//;\n1;2"));  

// 4.1 Support different delimiters test cases
console.log(add("//|\n4|5|6"));      
console.log(add("//***\n7***8***9")); 

// 5 negative number throw error
// Example Usage and Test Cases
try {
    console.log(add("//;\n1;2"));    
    console.log(add("//;\n1;2;-3")); 
} catch (e) {
    console.error(e.message);
}

//negative number test cases
try {
    console.log(add("//;\n-1;2;-3"));
} catch (e) {
    console.error(e.message);
}

try {
    console.log(add("1,-2,3")); 
} catch (e) {
    console.error(e.message);
}


try {
    console.log(add("//***\n-7***-8***9"));  
} catch (e) {
    console.error(e.message);
}