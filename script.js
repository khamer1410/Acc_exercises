// 1. Napisz funkcję reverseNumber, która odwraca liczbę. Np. wywołanie z '123456' zwraca '654321'.

function reverseNumber(num) {
    if (num.toString().includes(0)) {console.warn('numbers containing "0" may be displayed with error');} //if num starts or ends with 0.

    const reversedItem = num
        .toString()
        .split('')
        .reverse()
        .join('');
    return Number(reversedItem); //ParseInt() also possible
}

console.log(`reverseNumber is: ${reverseNumber(123456)}`);

// 2. Napisz funkcje która przyjmuje na wejściu stringa "javascript" i zwraca stringa posortowanego alfabetycznie ("aacijprstv");

function sortLetters(string) {
    const sortedItem = string
        .toLowerCase()
        .split('')
        .sort()
        .join('');
    return sortedItem;
}

console.log(`sorted letters are: ${sortLetters('javaScript')}`);

// 3. Napisz funkcję która przyjmuje na wejściu dowolny argument i zwraca jego typ.

const string = "kto tam";
const number = 1234;
const bool = true;
const undef = undefined;
const nothing = null;
const noNum = NaN;
const arr = [1,2,3];
const obj = {a: 1, b:2};
const myFunc = function() {return 1;}

const valArr = [string, number, bool, undef, nothing, noNum, arr, obj, myFunc];

function checkType(input) {
    let checkResult = (typeof(input));
    if (checkResult === 'object') {
        if (Array.isArray(input)) { checkResult = 'Array';}
        if (input === null) { checkResult = 'null';}
    }
    return checkResult;
}

console.group('Check types');
    valArr.forEach((el)=> {
        const check = checkType(el);
        console.log(`${el}: ${check}`);
    });
console.groupEnd('Check types');

// 4. Napisz funkcję która przyjmuje na wejściu tablicę [1,2,3,4,5,6] i zwraca tablicę w której każdy element jest pomnożony razy 2.

function multiply2(arr) {
    if (!Array.isArray(arr)) {console.error('argument is not an Array'); return;}
    return arr.map((el)=> el * 2);
}

console.log('Array times 2! : ', multiply2([1, 2, 3, 4, 5, 6]));

// 5. Napisz funkcję która za każdym wywołaniem generuje unikalny ciąg znaków.

function getRandomId(length = 10) {
    const symbols = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*()';
    let id = "";
    for (let i = 0; i < length; i++) {
        id += symbols[Math.floor(Math.random() * symbols.length)];
    }
    return id;
}

console.log('random id: ' + getRandomId());

// 6. Napisz funkcję multiply aby poniższe wywołania dawały poprawny wynik:

function multiply(x) {
    function addNo(y) {
        return y*x;
    }
    return addNo;
}

const multiply5 = multiply(5);
console.group('multiply check');
console.log(multiply5(2));
console.log(multiply5(5));
console.log(multiply5(10));
console.groupEnd('multiply check');

// var multiply5 = multiply(5);

// multiply5('2'); // zwraca 10
// multiply5('5'); // zwraca 25
// multiply5('10'); // zwraca 50

// 7. Napisz funkcję która przyjmuje dowolną ilość argumentów i zwraca ostatni z nich.

function getLastArg(...arg) {
    const argList = [...arg];
    return argList.pop();
}

console.log('The final argument is: ', getLastArg(1, 'slon', 333, 'jaskolka afrykanska'));

// 8. Napisać algorytm, który przestawi wszystkie elementy '0' na początek tablicy w czasie O(n).
// np. [1, 0, 2, 0, 0] -> [0, 0, 0, 1, 2]

function sortByZero(arr) {
    const sortArr = [1, 0, 2, 0, 0];
    sortArr.sort((a, b)=> {
       return a > b ? 1 : -1; 
    });
    return sortArr;
}

console.time('sort');
    sortByZero();
console.timeEnd('sort');

// Co znaczy "w czasie O(n)"? Chodzi o określenie czasu wykonania danej funkcji (timeout?)