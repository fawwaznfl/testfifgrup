const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numbers = [];

function askInput() {
    rl.question('Masukkan angka (0 untuk selesai): ', (input) => {
        let num = parseInt(input);

        if (num === 0) {
            processData();
            rl.close();
        } else {
            numbers.push(num);
            askInput();
        }
    });
}

function processData() {
    let sum = numbers.reduce((a, b) => a + b, 0);
    let avg = sum / numbers.length;

    console.log(`\nRata-rata: ${avg}`);

    numbers.forEach((num) => {
        if (num > avg) {
            console.log(`${num} di atas rata-rata`);
        } else if (num < avg) {
            console.log(`${num} di bawah rata-rata`);
        } else {
            console.log(`${num} sama dengan rata-rata`);
        }
    });
}

askInput();