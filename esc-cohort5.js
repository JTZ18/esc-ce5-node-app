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
    // const stream = fs.createReadStream(filename);
    // const rl = readline.createInterface({ input: stream });
    // let data = [];
    
    // rl.on("line", (row) => {
    //     data.push(row.split(","));
    // });
    
    // rl.on("close", () => {
    //     //console.log(data);
    // });

    // return data;
    let output = [];
    fs.readFileSync(filename, 'utf8', function (err, data) {
            /* parse data */
            let lines = data.split('\n');
            lines.map(line => {
                let row = line.split(',');
                output.push(row);
            });
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

//console.log(gcd(100, 10))

console.log(parseCSV('csvfile.csv'))

console.log(quickSort([1, 3, 5, 2, 4, 6]))