1
let i = 1
function printArrayValues(arr) {
    console.log(i, 'array');
    i++;
    
    if(i <= arr.length) {
    printArrayValues(arr);
    }
}
printArrayValues([1, 2, 3]);



2
let arr = [4, 5, 6];
let arr1 = [1, 2, 3]
arr.splice(0, 0, 1, 2, 3)
console.log(arr.concat([7, 8, 9, 10]));


3
let arr3 = [1, 2, 3, 4, 5];

console.log( arr.slice(4, 5) )


4
let str = 'loremipsumdolor';
let regexp = /o/gi;
let array = str.match(regexp);

console.log(array);

