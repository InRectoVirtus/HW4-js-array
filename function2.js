console.log('------------- # 5')

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }

  ask(
    "Вы согласны?",
    () => console.log("Вы согласились.") , // нужно обновить данное место
    () => console.log("Вы отменили выполнение.") // нужно обновить данное место
  );

/* ------------------------------------------------------------------------------------------------------------------------------------ */
console.log('------------- # 6')

let string = 'my-short-string'
  
let arr = string.split('-')

console.log(arr)

/* ------------------------------------------------------------------------------------------------------------------------------------ */
console.log('------------- # 7')

let arr2 = ['JavaScript', 2015]
  
let string2 = arr2.join(' ')

console.log(string2)

/* ------------------------------------------------------------------------------------------------------------------------------------ */
console.log('------------- # 8')

let users = [
    {id: 1, name: "Vic", age: 21},
    {id: 2, name: "Petya", age: 30}, 
    {id: 3, name: "Jon", age: 5}
];

let ageUser = users.filter(item => item.age < 20)
console.log(ageUser);

/* ------------------------------------------------------------------------------------------------------------------------------------ */

console.log('------------- # 9')

let users1 = [
    {id: 2, name: "Petya", age: 30}, 
    {id: 1, name: "Vic", age: 21},  
    {id: 3, name: "Jon", age: 5}
];
let names = users1.map(item => item.name)
console.log( names ); // [Vic, Petya, Jon]

/* ------------------------------------------------------------------------------------------------------------------------------------ */

console.log('------------- # 10')

let filterRangeInPlace = (arr3, a, b) => arr3.forEach((elem, i) => {
    if (a <= elem || elem <= b) {
        arr3.splice(i, 1);
    }
});

let arr3 = [5, 3, 8, 1];
filterRangeInPlace(arr3, 1, 4);
console.log(arr3);

/* ------------------------------------------------------------------------------------------------------------------------------------ */

console.log('------------- # 11')

function arrString (string, split) {
    return string.split(split)
}

console.log(arrString("lalalalal,alalalalla,alalalal", ','))

/* ------------------------------------------------------------------------------------------------------------------------------------ */

console.log('------------- # 12')

function slArray(arr4, sInd, eInd) {
    return arr4.slice(sInd,eInd);
}

let arr4 = [5, 3, 8, 1];
let range = slArray(arr4, 1, 4);
console.log( range ); // 3, 8, 1 
console.log( arr4 ); // 5,3,8,1 (без изменений)

/* ------------------------------------------------------------------------------------------------------------------------------------ */

console.log('------------- # 13')

function sumArr (...arr5) {
    let sum = 0;

    for(let arg of arr5) {
        sum += arg;
    }
    return sum;
}

console.log(sumArr(1 ,3 ,4 ,5 ,6 ,7 ,8, 8, 6))