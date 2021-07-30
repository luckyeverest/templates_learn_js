// if (выражение)
// оператор
username = ''
if (username == null)// Если имя пользователя null или undefined,
    username = "John Doe"; // тогда определить его

//if (выражение)
//оператор1
//else
//оператор2
n = 2
if (n === 1)
    console.log("Вы получили 1 новое сообщение.");
else
    console.log(`Вы получили ${n} новых сообщений.`);

// else if
if (n === 1) {
    // Выполнить блок кода #1
} else if (n === 2) {
    // Выполнить блок кода #2
} else if (n === 3) {
    // Выполнить блок кода #3
} else {
    //Если ни одна из конструкций else не выполнилась, тогда выполнитьблок кода #4
}

//switch (выражение) {
//операторы
//}
switch (n) {
    case 1: //начать если n===1
        // Выполнить блок кода 1 
        break;//остановится здесь
    case 2://начать если n===2
        // Выполнить блок кода 2
        break;//остановится здесь
    case 3://начать если n===3
        // Выполнить блок кода 3 
        break;//остановится здесь
    default:// если все остальное не выполнилось
        // Выполнить блок кода 4
        break;
}

//while (выражение)
//оператор
let count = 0;
while (count < 10) {
    console.log(count);
    count++;
}

// do
// оператор
// while (выражение) ;
printArray = [1, 2, 3]
function printArray(а) {
    let len = a.length, i = 0;
    if (len === 0) {
        console.log("Пустой массив");
    } else {
        do {
            console.log(a[i]);
        } while (++i < len);
    }
}

// for ( инициализация ; проверка ; инкрементирование )
// оператор
for (let count = 0; count < 10; count++) {
    console.log(count);
}

// for/of для циклического прохода по эле­ментам массива чисел и подсчета их суммы:
let data = [1, 2, 3, 4, 5, 6, 7, 8, 9], sum = 0;
for (let element of data) {
    sum += element;
}
sum// => 45

//проходить по свойствам объекта for/of с методом Object.keys();
// метод Obj e c t . keys () возвращает массив имен
//свойств для объекта, а массивы допускают итерацию с помощью for/of
let o = { х: 1, у: 2, z: 3 };
let keys = '';
for (let k of Object.keys(o)) {
    keys += k;
}
keys // => "xyz"

//ключи и значения свойств объекта
//Object.entries() возвращает массив массивов,
let pairs = '';
for (let [k, v] of Object.entries(o)) {
    pairs += k + v;
}
pairs// => "xly2z3"
console.log(pairs)

//for/of со строками
let frequency = {};
for (let letter of "mississippi") {
    if (frequency[letter]) {
        frequency[letter]++;
    } else {
        frequency[letter] = 1;
    }
}
frequency
// => {m: 1, i: 4, s: 4, p: 2}

//по парам “ключ/значение”
let m = new Map([[1, "one"]]);
for (let [key, value] of m) {
    key
    // => 1
    value
    // => "one"
}

//for/in работает с любым объектом после in
// for (переменная in объект)
// оператор
for (let р in o) {// Присвоить имена свойств объекта о переменной р
    console.log(o[р]); // Вывести значение каждого свойства
}

//копирования всех свойств объекта в массив
let о = { х: 1, у: 2, z: 3 };
let a = [], i = 0;
for (a[i++] in о) /* пустое тело */;

for (let i in a) console.log(i);//перечисляет индексы массива 0, 1 и 2

// Помеченные операторы
//идентификатор: оператор
token = null
mainloop: while (token !== null) {
    // Код опущен...
    continue mainloop; //Перейти к следующей итерации именованного цикла
    // Код опущен__
}

//return внутри функции указывает значение вызо­вов этой функции
//return выражение;
function square(х) { return х * х; }// Функция, которая имеет
// оператор return
square(2)// => 4

function displayObject(о) {
    // Немедленный возврат, если аргумент равен null или undefined
    if (!o) return;
    // Остальной код функции...
}

//пре­дупреждение об ошибочном или необычном условии.
//throw выражение;
function factorial(x) {
    // Если входной аргумент не является допустимым,
    // то сгенерировать исключение!
    if (x < 0) throw new Error('Значение х не должно быть отрицательным')
    // Иначе вычислить и возвратить значение обычным образом
    let f;
    for (f = 1; x > 1; f *= x, x--) /* пустое тело */;
    return f;
}
factorial(4)// => 24

//try/catch/finally является механизмом обработки исключе­ний
try {
    // Запросить у пользователя ввод числа

    // Вычислить факториал числа, предполагая, что введенное число допустимо

    // Вывести результат

}
catch (e) {
    // Если введенное пользователем число было
    // недопустимым, то мы оказываемся здесь
    // Сообщить пользователю об ошибке
}

//  JSON.parse() вместо генерации ошибки возвращает undefined
function parseJSON(s) {
    try {
        return JSON.parse(s);
    } catch {
        // Что-то пошло не так, но нас не интересует, что именно
        return undefined;
    }
}

//  with создает временную область видимости со свойствами объекта
// в качестве переменных и затем выполняет оператор внутри области ви­димости.
// with (объект)
// оператор

// набирать выражения чтобы получать доступ к элементам HTML-формы
/*
with (document.forms[0]) {
    // Далее появляется возможность прямого доступа к элементам формы,
    // например:
    name, value = ''
    address.value = ''
    email, value = ''
}
*/