let n = 1000;
let counter = 0;

while (n / 2 > 50) {
    n = n / 2;
    counter++;
}

console.log(`Количество итераций: ${counter}`);