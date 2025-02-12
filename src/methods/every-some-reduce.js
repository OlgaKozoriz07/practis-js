/*
 * Метод every
 *
 * - Поелементно перебирає оригінальний масив
 * - Повертає true якщо всі елементи масиву задовольняють умову
 */

/*
? Напиши функцію areAllEven(numbers), 
? яка перевіряє, чи всі числа в масиві парні.
*/

// const areAllEven = numbers => {
//   return numbers.every(num => num % 2 === 0);
// };
// console.log(areAllEven([2, 4, 6, 8])); // true
// console.log(areAllEven([2, 3, 6, 8])); // false

/*
? Напиши функцію didAllPass(students), яка перевіряє, 
? чи всі студенти набрали бал більше або рівний 60.
*/

// const students = [
//   { name: 'Оля', score: 85 },
//   { name: 'Андрій', score: 78 },
//   { name: 'Марина', score: 92 },
//   { name: 'Ігор', score: 59 },
// ];
// const didAllPass = students => {
//   return students.every(student => student.score >= 60);
// };

// console.log(didAllPass(students)); // false (бо Ігор набрав 59)
// console.log(
//   didAllPass([
//     { name: 'Олег', score: 80 },
//     { name: 'Катя', score: 90 },
//   ])
// ); // true

/*
 * Метод some
 *
 * - Поелементно перебирає оригінальний масив
 * - Повертає true якщо хоча б один елемент масиву задовольняє умову
 */

/*
? Напиши функцію hasAdult(people), яка перевіряє, 
? чи є хоча б одна людина, старша за 18 років.
*/
// const people = [
//   { name: 'Оля', age: 17 },
//   { name: 'Андрій', age: 21 },
//   { name: 'Марина', age: 19 },
//   { name: 'Ігор', age: 16 },
// ];

// const hasAdult = people => {
//   return people.some(person => person.age >= 18);
// };

// console.log(hasAdult(people)); // true
// console.log(
//   hasAdult([
//     { name: 'Діма', age: 15 },
//     { name: 'Юля', age: 12 },
//   ])
// ); // false

/*
? Напиши функцію hasVIP(clients), яка перевіряє, 
? чи є хоча б один клієнт із VIP-статусом (isVIP: true).
*/
// const clients = [
//   { name: 'Оля', isVIP: false },
//   { name: 'Андрій', isVIP: true },
//   { name: 'Марина', isVIP: false },
// ];

// const hasVIP = clients => {
//   return clients.some(client => client.isVIP === true);
// };

// const hasVIP = clients => clients.some(client => client.isVIP);

// console.log(hasVIP(clients)); // true
// console.log(
//   hasVIP([
//     { name: 'Ігор', isVIP: false },
//     { name: 'Юля', isVIP: false },
//   ])
// ); // false

/*
 * Метод reduce
 *
 * - Поелементно перебирає оригінальний масив
 * - Значення, що повертається, залежить від розробника
 */

/*
? Напиши функцію sumNumbers(numbers), 
? яка підраховує суму всіх чисел у масиві.
*/

// const sumNumbers = numbers =>
//   numbers.reduce((total, number) => {
//     return total + number;
//   }, 0);
// console.log(sumNumbers([10, 20, 30, 40])); // 100
// console.log(sumNumbers([5, 15, 25])); // 45

// const sumNumbers = numbers =>
//   numbers.reduce((total, number) => total + number, 0);

/*
? Напиши функцію findLongestWord(words), 
? яка знаходить найдовше слово у масиві.
*/

// const findLongestWord = words =>
//   words.reduce((bigger, word) =>
//     word.length >= bigger.length ? word : bigger
//   );// ананас

//   const findLongestWord = words =>
//     words.reduce((bigger, word) =>
//       word.length > bigger.length ? word : bigger
//     );//яблуко

// console.log(findLongestWord(['яблуко', 'банан', 'кавун', 'ананас'])); // "ананас"
// console.log(findLongestWord(['JavaScript', 'HTML', 'CSS'])); // "JavaScript"
//Якщо потрібно перше найдовше слово → використовуємо >
//Якщо потрібно останнє найдовше слово → використовуємо >=
