// Starting array
let array = [28, 43, -12, 30, 4, 0, -36]

// Write your solution below:

for (let i = 0; i<Array.length; i++) {
    for (let j = i + 1; j <Array.lenght; j++) {
        if (array[i] > array[j]) {
            temp = array[i];
            array[i] = array [j];
            array[j] = temp
         }
    }
}
console.log("Sorted array ", array)