//Arrays
//1
let threeIntegers: number[] = [1, 2, 3];
console.log("An array is: ", threeIntegers);
console.log("The length of an array is", threeIntegers.length);

//2
let twoStrings:string[] = ["cat", "dog"];
console.log("Content of an array is", twoStrings);
twoStrings.push("fish");
console.log("Content of an array is", twoStrings);
console.log("The length of an array is",twoStrings.length);

//3
let threeStrings:string[] = ["cat", "dog", "fish"];
console.log("Content of an array is",threeStrings);
threeStrings.pop()
console.log("Content of an array is",threeStrings);
console.log("The length of an array is",threeStrings.length);

//4
let numbers:number[] = [];
numbers.push(0)
console.log("The length of an array is",numbers.length);
numbers.push(1)
console.log("The length of an array is",numbers.length);

//Loops
//1
let arrayOfFive:number[] = [0,1,2,3,4];
for (let i=0; i<arrayOfFive.length; i++) {
    console.log("Element of an array is", arrayOfFive[i]);
}

//2
let sumOfArray:number[] = [1,2,3,4,5];
let sum = 0;
for (let i=0; i<sumOfArray.length; i++) {
    sum += sumOfArray[i];
}
console.log("Sum of all elements in an array is", sum);

//3
let arrayOfThree:number[] = [11,22,33];
let arrayForDouble:number[] = [];
for (let i=0; i<arrayOfThree.length; i++) {
    arrayForDouble.push(arrayOfThree[i]*2);
}
console.log("Double of elements in an array is", arrayForDouble);

//4
let arrayOfReverse:number[] = [22,44,66];
for (let i=arrayOfReverse.length - 1; i >= 0; i--) {
    console.log("Reversed array looks like", arrayOfReverse[i]);
}

//Typical Interview Task
//Min number from an array
let minArray:number[] = [-4,60,-5,43,24];
let minNumber = minArray[0];
for (let i=1; i<minArray.length; i++) {
    if (minArray[i] < minNumber) {
        minNumber = minArray[i];
    }
}
console.log("Minimum number from an array is", minNumber);

//Max number from an array
let maxArray:number[] = [-4,60,-5,43,24];
let maxNumber = maxArray[0];
for (let i=1; i<maxArray.length; i++) {
    if (maxArray[i] > maxNumber) {
        maxNumber = maxArray[i];
    }
}
console.log("Maximum number from an array is", maxNumber);

//Count even numbers from an array
let evenArray:number[] = [-4,60,-5,43,24];
let evenNumber = 0
for (let i=0; i<evenArray.length; i++) {
    if (evenArray[i] % 2 === 0) {
        evenNumber++;
    }
}
console.log("Number of even numbers in an array is", evenNumber);

//New array from positive numbers
let anArray:number[] = [-4,60,-5,43,24];
let positiveArray:number[] = [];
for (let i=0; i<anArray.length; i++) {
    if (anArray[i] > 0) {
        positiveArray.push(anArray[i]);
    }
}
console.log("An array of positive numbers is",positiveArray);
