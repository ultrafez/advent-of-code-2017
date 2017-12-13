const fs = require('fs');
const { promisify } = require('util');

async function main() {
    let input = (await promisify(fs.readFile)('input.txt', 'utf8')).trim();
    
    input += input[0];

    const sum = input.split('').map((a) => parseInt(a, 10)).reduce(({sum, last}, cur) => {
        if (cur === last) {
            return {sum: sum+cur, last: cur};
        } else {
            return {sum, last: cur};
        }
    }, {sum: 0, last: -1});

    console.log(sum.sum);
}

main();
