const numbersOutput = [];
const numbersSquares = [];
for (let i = 10;i <= 20; i++){
    numbersOutput.push(i);
    numbersSquares.push(Math.pow(i,2));
}
// Вивести на сторінку в один рядок через кому числа від 10 до 20.
console.log(numbersOutput.join(', '));
// Вивести квадрати чисел від 10 до 20.
console.log(numbersSquares.join(' '));

const multTable = new Array(10);
const multValue = 7;
for (let i = 1; i <= multTable.length; i++) {
    multTable[i - 1] = `${multValue} x ${i} = ${i * multValue}`;
}

// Вивести таблицю множення на 7.
console.log(multTable.join('\n'));

let sumInt = 0;
for (let i = 1; i <= 15; i++){
    sumInt += i;
}

// Знайти суму всіх цілих чисел від 1 до 15.
console.log(sumInt);

let multInt = 1;
for (let i = 15; i <= 35; i++){
    const result = BigInt(multInt) * BigInt(i);
    if ( result <= Number.MAX_SAFE_INTEGER){
        multInt = Number(result);
    } else {
       multInt = result;
    }
}

// Знайти добуток усіх цілих чисел від 15 до 35.
console.log(`BigInt type : ${multInt} , Number type : ${Number(multInt)}`);


// Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
// просто решил использовать вложенный цикл хотя можно и без него
let averageNumberResult = 0;
while(averageNumberResult === 0) {
    const lastNumber = 500;
    let sum = 0;
    for ( let firstNumber = 1;  firstNumber <= lastNumber; firstNumber++){
        sum += firstNumber;
    }
    averageNumberResult = sum/lastNumber;
}
console.log(averageNumberResult);

// Вивести суму лише парних чисел в діапазоні від 30 до 80.
let pairedNumbers = 0;
for (let firstNumber = 30; firstNumber <= 80 ; firstNumber++){
    if(firstNumber % 2 === 0){
        pairedNumbers += firstNumber;
    }
}
console.log(pairedNumbers);

// Вивести всі числа в діапазоні від 100 до 200 кратні 3.
let multiplesNumbers = [];
for (let firstNumber = 100; firstNumber <= 200 ; firstNumber++){
    if(firstNumber % 3 === 0){
        multiplesNumbers.push(firstNumber);
    }
}
console.log(multiplesNumbers.join(' '));

// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
const natNumber = 60;
// let natNumber = Math.floor(Math.random() * 999999999) + 1; если еще увеличивать значения на несколько 0 браузер уходит в непредускозуемо долгий блекаут
console.log(natNumber);
const resultDivNumbers = [];
for (let i = 1; i <= natNumber; i++){
    if(natNumber % i === 0){
        resultDivNumbers.push(i);
    }
}

console.log(resultDivNumbers.join(" "));


// Визначити кількість його парних дільників.
// Знайти суму його парних дільників.
// Может можно проще както но придумал только глубоким перебором массива
let pairDivNatCount = 0;
let pairDivNatSum = 0;
for ( let i = 0 ; i < resultDivNumbers.length;i++){
    for (let j = i ; j < resultDivNumbers.length; j++){
        if(resultDivNumbers[i]*resultDivNumbers[j] === natNumber){
            pairDivNatSum += resultDivNumbers[i] + resultDivNumbers[j]; 
            pairDivNatCount++;
        }
    }
}
console.log(pairDivNatCount);
console.log(pairDivNatSum);


// Надрукувати повну таблицю множення від 1 до 10.
const compMultTable = [];
for ( let i = 1 ; i <= 10;i++){
    compMultTable[i-1] = [];
    for (let j = 1 ; j <= 10 ; j++){
       compMultTable[i-1][j-1] = `${j}x${i}=${i*j}`;
    }
}
console.table(compMultTable);