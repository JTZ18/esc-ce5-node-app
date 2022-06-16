const fs = require('fs');
const readline = require("readline");

function gcd(a, b) {
    if (b == 0) {
        return a;
    }
    return gcd(b, a % b);
}

// Write a javascript function that parses a CSV file and returns an array containing every line
// of the CSV file, itself stored as an array.

function parseCSV(filename) {
    const data = fs.readFileSync(filename, 'utf8', function (err, data) {});
    let output = [];
    /* parse data */
    let lines = data.split('\n');
    lines.map(line => {
        let row = line.split(',');
        // remove "/r" from the end of the last element in row
        row[row.length - 1] = row[row.length - 1].slice(0, -1);
        output.push(row);
    });
    return output;
}

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let pivot = arr[0];
    let left = [];
    let right = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}

console.log('================================Q1================================');
console.log(gcd(100, 10))
console.log('===================================================================');
console.log('\n');

console.log('================================Q2================================');
console.log(parseCSV('csvfile.csv'))
console.log('===================================================================');
console.log('\n');

console.log('================================Q3================================');
console.log(quickSort([1, 3, 5, 2, 4, 6]));
console.log('===================================================================');
console.log('\n');