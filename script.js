// - створити функцію яка виводить масив

// function array(arr) {
//     console.log(arr);
// }
// // let arr = [1, 2, 3];
// // array();


// // - створити функцію яка заповнює масив рандомними числами та виводить його.
// //  Для виведення використати попвередню функцію.
// let arr = []

// function random() {
//     for (let i = 0; i < parseInt(Math.random() * 10); i++) {
//         arr[i] = parseInt(Math.random() * 10)
//     }
//     array(arr)
// }
// random()


// -створити функцію яка приймає три числа та виводить та повертає найменьше.
// let min = (arg1, arg2, arg3) => {
//     let min
//     arg1 < arg2 ? min = arg1 : min = arg2;
//     return (min < arg3) ? min : arg3;

// }
// console.log(min(255855, 5685, 56))


// створити функцію яка приймає три числа та виводить та повертає найбільше.

// let max = (arg1, arg2, arg3) => {
//     let min
//     arg1 > arg2 ? max = arg1 : max = arg2;
//     return (max > arg3) ? max : arg3;

// }
// console.log(max(25, 5, 56))

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше

// function maxMin() {
//     let max = arguments[0]
//     let min = arguments[0]
//     for (let i = 0; i < arguments.length; i++) {
//         if (arguments[i] < min) {
//             min = arguments[i]
//         }
//         if (arguments[i] > max) {
//             max = arguments[i]
//         }
//     }
//     console.log(max + "-max, ")
//     return (min)
// }

// console.log(maxMin(2, 3, 0, -56, 3, 5, 6, 12, 4, 56, 566, 145) + "-min")

// -створити функцію яка повертає найбільше число з масиву

// function arrayMax(arr) {
//     let max = arr[0]
//     console.log(array.length)
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i]
//         }
//     }
//     return (max)
// }

// let array = [25, 2555, 898893];
// console.log(arrayMax(array) + " - max");

// -
// створити функцію яка повертає найменьше число з масиву

// let arrayMin = function(arr) {
//     let min = arr[0]
//     console.log(array.length)
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i]
//         }
//     }
//     return (min)
// }

// let array = [25, 2555, -695, 898893, 2];
// console.log(arrayMin(array) + " - min");

// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.

// let arraySum = function(arr) {
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i]
//     }
//     return (sum)
// }
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//     // console.log(arraySum(array) + " sum")

// // -створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// //  використовую попередню функцію, яка додає всі числа, і ділю на кількість чисел
// let average = function(arg) {
//     let sum = arraySum(arg)
//     return (sum / arg.length)
// }
// console.log(average(array) + " average")

// -Створити функцію яка приймає масив будь яких объектів, - я думала, що любі типи 
// та повертає значення кількості об 'єктів в масиві

// let a = [{ f: "ffff", sdgg: "gjjgg", fkggk: 0 }, { fdff: "nulhh" }, 5, "bnv", 56, { rggtg: "J2335SON", hkjh: 8, jkjk: "undefined" }]

// let count = function(arg) {
//     let count = 0
//     for (const iterator of arg) {
//         if (typeof(iterator) == "object") {
//             count++
//         }
//     }
//     return count
// }
// console.log(count(a))

// Створити функцію яка приймає масив будь яких объектів,та повертає значення кількості об 'єктів в масиві
// let a = [{ f: "ffff", sdgg: "gjjgg", fkggk: 0 }, { jffkgk: 4 }, { fdff: "nulhh" }, { rggtg: "J2335SON", hkjh: 8, jkjk: "undefined" }]

// let count = function(arg) {

//     return arg.length
// }
// console.log(count(a))



// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
// let a = [{ f: "ffff", sdgg: "gjjgg", fkggk: 0 }, { jffkgk: 4 }, { fdff: "nulhh" }, { fdgklfd: "fff", fkjfj: 0 }, { rggtg: "J2335SON", hkjh: 8, jkjk: "undefined" }]

// let count1 = function(arg) {
//     let count1 = 0;
//     for (let i = 0; i < arg.length; i++) {
//         let str = Object.keys(arg[i])
//         count1 = count1 + str.length
//     }
//     return count1

// }
// console.log(count1(a))

// - створити функцію  яка скаладає значення елементів з однаковими індексами
//   та повертає новий результуючий масив.
//   Приклад
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]

// let a = [1, 2, 3, 4]
// let b = [2, 3, 4, 5]
// let sumArray = function(arg1, arg2) {
//     let c = []
//     for (let i = 0; i < arg1.length; i++) {
//         c[i] = arg1[i] + arg2[i]
//     }
//     return c
// }

// console.log(sumArray(a, b))

// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// let a = [{ 1: "ffff", sdgg: "gjjgg", fkggk: 0 }, { l2k: 4 }, { l3fdff: "nulhh" }, { l4fdgklfd: "fff", fkjfj: 0 }, { l5rggtg: "J2335SON", j6hkjh: 8, jkjk: "undefined" }]

// let change = function(arr, i) {
//     let temp
//     temp = arr[i + 1]
//     arr[i + 1] = arr[i]
//     arr[i] = temp
//     return arr
// }



// console.log(change(a, 4))

// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець масиву.
//  Зберігаючи при цьому порядок не нульових значень.
// Довжина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
// let s = [5, 5, 0, 0, 1, 2, 3, 4, 0, 0, 0, 0, 0, 0, 22222, 5, 0, 56, 000, 12, 00, 0, 2, 0, 0, 0, 1, 2, 5, 000, 555, 5, 6, 0]
// let a = [1, 0, 6, 0, 3]
// let b = [0, 1, 2, 3, 4]
// let c = [0, 0, 1, 0]

// function name(params) {
//     let k = params.length
//     for (let i = 0; i < k; i++) {
//         if (params[i] == 0) {
//             k = k - 1
//             let j = i
//             while (j < k) {
//                 change(params, j)
//                 j++
//                 i--
//             }
//         }
//     }
//     return params
// }
// console.log(name(s))
// console.log(name(a))
// console.log(name(b))
// console.log(name(c))

// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"


// let createDive = function() {
//     let blok = document.createElement("div")
//     blok.innerText = "Hello owu"
//     document.body.appendChild(blok)
//     blok.style.backgroundColor = "#39c9a1"
// }
// createDive()

// -Додає в боді елемент з текстом.Тип елементу та текст отримати через аргументи

// let createDive = function(el, str) {
//     let blok = document.createElement(el)
//     blok.innerText = str
//     document.body.appendChild(blok)
//     blok.style.backgroundColor = "#39c9a1"
// }
// createDive("p", "fghf")
// createDive("div", "fghf")
// createDive("h1", "fghf")
// createDive("li", "fghf")
// createDive("header", "fghf")

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  
// індентифікатор елементу в який потрібно додати список цих автомобілів.

let cars = [
    { age: 2, color: 'black', engine_size: 1.4, weight: 0.5, brand: "toyota" },
    { age: 12, color: 'black', engine_size: 2.3, weight: 1.5, brand: "matiz" },
    { age: 12, color: 'black', engine_size: 3.4, weight: 1.5, brand: "lada" },
    { age: 5, color: 'black', engine_size: 2.8, weight: 5.5, brand: "toyota" },
    { age: 3, color: 'black', engine_size: 4.4, weight: 3.5, brand: "toyota" },
]

// let createDive = function(arr, el) {
//     let bloс = document.createElement(el)
//     bloс.innerText = arr
//     document.body.appendChild(bloс)
//     bloс.style.backgroundColor = "#39c9a1"
// }
// createDive(cars, "p")

// Для кожного автомобіля створити свій блок, та додати його в елемент,
//  індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  
// індентифікатор елемнту в який потрібно додати список цих автомобілів.

// let createBlocs = function(arr, el) {
//     for (let i = 0; i < arr.length; i++) {
//         let bloс = document.createElement(el)
//         bloс.innerText = `${arr[i].age} ${arr[i].weight} ${arr[i].engine_size} ${arr[i].brand}`;
//         document.body.appendChild(bloс)
//         bloс.style.backgroundColor = "rgb(" + (i + 1) * 25 + "," + (i + 1) * 45 + "," + (i + 1) * 70 + ")"
//     }
// }
// createBlocs(cars, "p")

// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок


// let createBlocs = function(arr, el) {
//     for (let i = 0; i < arr.length; i++) {
//         let bloс = document.createElement(el)
//         bloс.innerText = `${arr[i].age} ${arr[i].weight} ${arr[i].engine_size} ${arr[i].brand}`;

//         bloс.style.backgroundColor = "rgb(" + (i + 1) * 25 + "," + (i + 1) * 45 + "," + (i + 1) * 70 + ")"
//         for (const key in arr[i]) {

//             let bloс1 = document.createElement(el)
//             bloс1.innerText = `${arr[i][key]} `;
//             bloс.appendChild(bloс1)
//             bloс1.style.backgroundColor = "rgb(" + (i + 1) * 35 + "," + (i + 1) * 65 + "," + (i + 1) * 50 + ")"
//         }
//         document.body.appendChild(bloс)
//     }
// }

// createBlocs(cars, "p")

// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один 
// об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
// let usersWithId = [{ id: 1, name: 'vasya', age: 31, status: false }, { id: 2, name: 'petya', age: 30, status: true }, { id: 3, name: 'kolya', age: 29, status: true }, { id: 4, name: 'olya', age: 28, status: false }, ];
// let citiesWithId = [{ user_id: 3, country: 'USA', city: 'Portland' }, { user_id: 1, country: 'Ukraine', city: 'Ternopil' }, { user_id: 2, country: 'Poland', city: 'Krakow' }, { user_id: 4, country: 'USA', city: 'Miami' }, ];
// // Частковий приклад реультату:
// // let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]

// function userCities(arr1, arr2) {
//     let usersWithCities = []
//     let userWithCity1 = {
//         id: null,
//         name: '',
//         age: null,
//         status: false,
//         address: { user_id: null, country: '', city: '' },
//     };
//     let user = JSON.stringify(userWithCity1)
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i].id == arr2[j].user_id) {
//                 console.log(1)
//                 let userWithCity = JSON.parse(user)
//                 userWithCity.id = arr1[i].id,
//                     userWithCity.name = arr1[i].name,
//                     userWithCity.age = arr1[i].age,
//                     userWithCity.status = arr1[i].status,
//                     userWithCity.address.country = arr2[j].country,
//                     userWithCity.address.user_id = arr2[j].user_id,
//                     userWithCity.address.city = arr2[j].city,
//                     usersWithCities.push(userWithCity)
//             }


//         }
//     }
//     console.log(usersWithCities)
// }
// userCities(usersWithId, citiesWithId)



// ===========додаткове від віктора========
// 1) Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!

function power(n) {

    if (n % 2 == 1) {
        console.log("No")
        return
    }
    if (n == 2) {
        console.log("Yes")
        return
    }
    n = n / 2
    power(n)
}
k = prompt("k")
power(k)