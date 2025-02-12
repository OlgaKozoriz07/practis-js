/*
 * Метод forEach(callback)
 * - Поелементо перебирає оригінальний масив
 * - Нічого не повертає
 * - Замінює класичний for, якщо не потрібно переривати цикл
 */

/*
? Створи функцію doubleNumbers(numbers), яка отримує масив чисел 
? і виводить у консоль кожне число, помножене на 2.
doubleNumbers([1, 2, 3, 4, 5]);

*/
// function doubleNumbers(numbers) {
//   const extraNumbers = [];
//   numbers.forEach(function (number) {
//     extraNumbers.push(number * 2);
//   });
//   console.log(extraNumbers);
// }
// doubleNumbers([1, 2, 3, 4, 5]);

/*
? Напиши функцію logWordLengths(words), яка отримує масив слів 
? і виводить у консоль довжину кожного слова.
*/

// function logWordLengths(words) {
//   const newArray = [];
//   words.forEach(function (word) {
//     newArray.push(word.length);
//   });
//   console.log(newArray);
// }
// logWordLengths(['apple', 'banana', 'kiwi']);

/*
? Створи функцію sumEvenNumbers(numbers), яка отримує масив чисел 
? і повертає суму всіх парних чисел у масиві.

*/
// function sumEvenNumbers(numbers) {
//   let total = 0;// початкова сума
//   numbers.forEach(function (number) {
//     if (number % 2 === 0) { // перевіряємо парність чисел
//       total += number;//додаємо до суми
//     }
//   });
//   return total;
// }

// function sumEvenNumbers(numbers) {
//   return numbers.reduce(
//     (total, number) => (number % 2 === 0 ? total + number : total),
//     0
//   );
// }

// console.log(sumEvenNumbers([10, 15, 20, 25, 30]));

/*
? Напиши функцію greetUsers(users), яка отримує масив імен та виводить 
? у консоль привітання для кожного.

*/
// function greetUsers(users) {
//   users.forEach(function (user) {
//     console.log(`Hello my dear ${user}`);
//   });
// }
// greetUsers(['Оля', 'Андрій', 'Марина']);

/*
? Напиши функцію formatPrices(prices), яка приймає масив чисел (цін у доларах) 
? і виводить їх у консоль у форматі $ціна.00.


*/

// function formatPrices(prices) {
//   prices.forEach(function (price) {
//     console.log(`$${price.toFixed(2)}`);
//   });
// }
// formatPrices([5, 12, 99]);

/*
? Напиши функцію logWordsWithA(words), яка отримує масив слів 
? і виводить у консоль лише ті, що містять літеру "а".

*/

// function logWordsWithA(words) {
//   const newFruits = []; // Масив для слів, які містять "a"

//   words.forEach(function (word) {
//     if (word.includes('a')) {
//       // Перевіряємо, чи є "a" у слові
//       newFruits.push(word); // Додаємо слово в масив
//     }
//   });

//   console.log(newFruits); // Виводимо масив після завершення forEach()
// }

// logWordsWithA(['apple', 'banana', 'kiwi', 'grape', 'cherry']);

// function changeEven(numbers, value) {
//   const newNumbers = []; // Створюємо новий порожній масив

//   numbers.forEach(function (number) {
//     // Перебираємо кожне число у списку
//     if (number % 2 === 0) {
//       // Якщо число парне
//       newNumbers.push(number + value); // Додаємо до нього value і записуємо в новий масив
//     } else {
//       // Якщо число НЕпарне
//       newNumbers.push(number); // Просто додаємо його без змін
//     }
//   });

//   return newNumbers; // Повертаємо новий список
// }

// // Перевіряємо, як працює:
// console.log(changeEven([1, 2, 3, 4, 5], 10)); // [1, 12, 3, 14, 5]
