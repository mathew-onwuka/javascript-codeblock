const numbers = [1, 2, 3, 4, 5];
let numbersDoubled = numbers.map(function(double){
    return double * 2;
})
console.log(numbersDoubled);

const scores = [250, 300, 350, 200, 400, 180, 160];
let greatScores = scores.filter((greater) => {
    return greater >= 300;
})
console.log(greatScores);

const sum = [2000, 3000, 400, 100, 600];
let counter = 0;
sumTotal = sum.reduce(function(total, firstValue){
    return total + firstValue
}, counter);
console.log(sumTotal);

const colors = ["blue", "yellow", "red"];
colors.push("green");
colors.pop(colors);
console.log(colors);