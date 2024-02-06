//1
function basicOperation(operation, value1, value2) {
  let result;
  if (operation === '+') {
    result = value1 + value2;
  } else if (operation === '-') {
    result = value1 - value2;
  } else if (operation === '*') {
    result = value1 * value2;
  } else if (operation === '/') {
    if (value2 === 0) {
      result = 'Деление на ноль недопустимо';
    } else {
      result = value1 / value2;
    }
  } else {
    result = 'Неподдерживаемая операция';
  }
  return result;
}
result = basicOperation('-', 1, 10);
console.log(result);

//2
let sumOfCubes = n => {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i ** 3;
  }

  return sum;
}
const n = 3; 
const result2 = sumOfCubes(n);
alert(`Сумма кубов чисел от 1 до ${n} равна ${result2}`);


// 3
function calculateAverage(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  let sum3 = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum3 += numbers[i];
  }
  const average = sum3 / numbers.length;
  return average;
}

const numbers = [5, 10, 15, 20];
const result3 = calculateAverage(numbers);
alert(`Среднее арифметическое элементов массива: ${result3}`);


//4

let str = prompt("stroka: ");
function string(str1){
    let reverse = str1.replace(/[а-яё]/gi, '').split('').reverse().join('');
    return reverse;
}
alert(string(str));


//5
function repeatString(n, s) {
  if (n5 <= 0) {
    return '';
  }

  let result5 = '';

  for (let i = 0; i < n5; i++) {
    result5 += s;
  }

  return result5;
}
const n5 = 3; 
const s = 'abc'; 
const repeatedString = repeatString(n, s);
alert(repeatedString); 


//6
function findStringsNotInArray(arr6, arr66) {
  let arr666 = [];

  for (let i = 0; i < arr6.length; i++) {
    let isFound = false;
    for (let j = 0; j < arr66.length; j++) {
      if (arr6[i] === arr66[j]) {
        isFound = true;
        break;
      }
    }
    if (!isFound) {
      arr666.push(arr6[i]);
    }
  }

  return arr666;
}
const arr6 = ['sun', 'banana', 'cherry', 'date'];
const arr66 = ['banana', 'date', 'car'];
const arr666 = findStringsNotInArray(arr6, arr66);

alert(arr666); 


//---------------------------


let str7 = prompt("stroka: ");
function string(str8){
    let reverse1 = str8.replace(/[а-яё]/gi, '');
    let reverse2 = reverse1.split('');
    let reverse3 = reverse2.reverse();
    let reverse4 = reverse3.join('');
    return reverse4;
}
alert(string(str7));