#!/usr/bin/node

function fibs(length) {
    if (length == 0) {
        return [];
    }
    else if (length == 1) {
        return [0];
    }
    else if (length == 2) {
        return [0, 1]
    }
    else {
        let sequence = [0, 1]; 
        for(let i = 2; i < length; ++i) {
            sequence.push(sequence[i-2] + sequence[i-1]);
        }
        return sequence;
    }
}

function fibsRec(length, array = [0, 1]) {
    return length == 0 ? [] : length == 1 ? [0] : length == 2 ? [0, 1] : array.length == length ? array : fibsRec(length, array.concat([array[array.length - 2] + array[array.length - 1]]));
}

//let length = prompt("Fibonacci sequence length? ");
let length = 8;
console.log(fibs(length));

console.log(fibsRec(length));