/*
 Реализовать функцию-конструктор для создания объекта "пользователь".

 Технические требования:
 - Написать функцию createNewUser(), которая будет создавать и возвращать объект "пользователь".
 - При вызове функция должна спросить у вызывающего имя и фамилию.
 - Используя данные, введенные пользователем, создать объект со свойствами firstName и lastName.
 - Добавить в объект метод getLogin(), который будет возвращать первую букву имени пользователя, соединенную с фамилией пользователя, все в нижнем регистре.
*/

let createNewUser = () => {
    let user = {};
    user.firstName = prompt("Input first name: ");
    user.lastName = prompt("Input last name: ");

    user.getLogin = function() {
        return user.firstName.slice(0, 1).toLowerCase() + user.lastName.toLowerCase();
    };
    return user;
};

let a = createNewUser();
console.log(a);
console.log(a.getLogin());

let b = createNewUser();
console.log(b);
console.log(b.getLogin());

console.log(a === b);