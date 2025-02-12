/*
 * Метод toSorted
 *
 * - Свій порядок сортування чисел
 * - Свій порядок сортування рядків
 * - Сортування об'єктів
 *
 * За замовчуванням:
 * - сортує за зростанням
 * - приводить елементи до рядка і сортує за [Unicode](https://unicode-table.com/en/)
 */

/*
? Напиши функцію sortWords(words), 
? яка сортує масив слів у правильному алфавітному порядку.
*/

// const sortWords = words => words.toSorted((a, b) => a.localeCompare(b, 'uk'));

// console.log(sortWords(['яблуко', 'апельсин', 'банан', 'груша']));
// ["апельсин", "банан", "груша", "яблуко"]

/*
? Напиши функцію sortNames(names), 
? яка сортує масив імен без урахування регістру (sensitivity: "base").
 */

// const sortNames = names =>
//   names.toSorted((a, b) => a.localeCompare(b, 'uk', { sensitivity: 'base' }));

// console.log(sortNames(['Оля', 'андрій', 'Марина', 'Василь']));
// // ["андрій", "Василь", "Марина", "Оля"]

/*
? Напиши функцію sortUsersByName(users), 
? яка сортує масив об'єктів за ім'ям користувача.

*/

// const users = [
//   { name: "Оля", age: 25 },
//   { name: "Андрій", age: 30 },
//   { name: "Марина", age: 20 }
// ];

// console.log(sortUsersByName(users));
// /*
// [
//   { name: "Андрій", age: 30 },
//   { name: "Марина", age: 20 },
//   { name: "Оля", age: 25 }
// ]
