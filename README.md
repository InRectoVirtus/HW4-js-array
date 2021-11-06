[5-ое задание](https://github.com/InRectoVirtus/HW3-js-functions#4-%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5)  
[6-ое задание](https://github.com/InRectoVirtus/HW3-js-functions#5-%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5)  
[7-ое задание](https://github.com/InRectoVirtus/HW3-js-functions#6-%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5)  
[8-ое задание](https://github.com/InRectoVirtus/HW3-js-functions#7-%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5)  
[9-ое задание](https://github.com/InRectoVirtus/HW3-js-functions#8-%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5)  
[10-ое задание](https://github.com/InRectoVirtus/HW3-js-functions#9-%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5)  
[11-ое задание](https://github.com/InRectoVirtus/HW3-js-functions#9-%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5)  
[12-ое задание](https://github.com/InRectoVirtus/HW3-js-functions#9-%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5)  
[13-ое задание](https://github.com/InRectoVirtus/HW3-js-functions#9-%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5)  
#  5-ое задание # 

## Замените код Function Expression стрелочной функцией ##  

    function ask(question, yes, no) {
        if (confirm(question)) yes()
        else no();
    }

    ask(
        "Вы согласны?",
        () => console.log("Вы согласились.") , // нужно обновить данное место
        () => console.log("Вы отменили выполнение.") // нужно обновить данное место
    );

> Произвёл замену на стрелочную упрощённую запись<br/>  

#  6-ое задание # 

## Напишите код который преобразует строку 'my-short-string' в массив значений ['my', 'short', 'string'] ##

    let string = 'my-short-string'
  
    let arr = string.split('-')

    console.log(arr)
> Метод split создаёт масив благодаря указанию на разделитель<br/>  

#  7-ое задание # 

## Напишите код который преобразует массив ['JavaScript', 2015] в строку вида 'JavaScript 2015' ##

    let arr2 = ['JavaScript', 2015]
  
    let string2 = arr2.join(' ')

    console.log(string2)
> Метод join объеденяет массив, в скобках можно указать разделитель<br/>  

#  8-ое задание # 

## Отфильтровать всех пользователей которые старше 20 лет. Дан массив данных ##

        let users = [
        {id: 1, name: "Vic", age: 21},
        {id: 2, name: "Petya", age: 30}, 
        {id: 3, name: "Jon", age: 5}
        ]  ;

        let ageUser = users.filter(item => item.age < 20)
        console.log(ageUser);
> При помощи метода фильтра я указал условие при котором проверяются и допускаются все те кому меньше 20<br/>  

#  9-ое задание # 

## У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён. ##

    let users1 = [
    {id: 2, name: "Petya", age: 30}, 
    {id: 1, name: "Vic", age: 21},  
    {id: 3, name: "Jon", age: 5}
    ];
    let names = users1.map(item => item.name)
    console.log( names ); // [Vic, Petya, Jon]
> Метод map позволяет выбрать в массив лишь имена </br>

#  10-ое задание # 

## Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b. Функция должна изменять принимаемый массив и ничего не возвращать. ##

    let filterRangeInPlace = (arr3, a, b) => arr3.forEach((elem, i) => {
    if (a <= elem || elem <= b) {
        arr3.splice(i, 1);
    }
    });

    let arr3 = [5, 3, 8, 1];
    filterRangeInPlace(arr3, 1, 4);
    console.log(arr3);
> Здесь ввёл условие при котором числа от а до б сохраняются, а другие удаляются </br>  

#  11-ое задание # 

## Написать функцию которая будет преобразовывать строку в массив. Первый аргумент функции должен принимать строку, второй аргумент функции должен принимать разделитель (сепаратор).  Функция должна возвращать полученный массив. ##

    function arrString (string, split) {
    return string.split(split)
    }
> В функции первый параметр принял строку, а во втором пишем разделитель для создания массива </br>  

#  12-ое задание # 

## Напишите функцию slArray(arr, startIndex, endIndex), которая принимает массив arr,  и возвращает новый массив, в который должна скопировать значения в рендже с  startIndex, endIndex.Функция должна возвращать новый массив и не изменять исходный. ##

    function slArray(arr4, sInd, eInd) {
    return arr4.slice(sInd,eInd);
    }

    let arr4 = [5, 3, 8, 1];
    let range = slArray(arr4, 1, 4);
    console.log( range ); // 3, 8, 1 
    console.log( arr4 ); // 5,3,8,1 (без изменений)

> Метод slice позволяет копировать промежуток и вставлять совершенно новый массив не меняя старый </br>  

#  13-ое задание # 

## ННапишите функцию суммирования sum, которая принимает аргументы с помощью spread operator. Функция sum должна возвращать результат суммирования всех значений которые передаются в функцию. ##

    function sumArr (...arr5) {
    let sum = 0;

    for(let arg of arr5) {
        sum += arg;
    }
    return sum;
    }

    console.log(sumArr(1 ,3 ,4 ,5 ,6 ,7 ,8, 8, 6))

> При помощи цикла организован был код который вычисляет из всех ввёденых в параметр функции чисел сумму </br>  