// 1 Problem Simple calculator through string numbers 
function add(numbers) {
    if (numbers === "") {
        return 0;
    }

    let numArray = numbers.split(",");


    let sum = numArray.reduce((acc, current) => {
        return acc + parseInt(current, 10);
    }, 0);

    return sum;
}


console.log(add(""));      
console.log(add("1"));
console.log(add("1,5"));     
