/*
? Вивести числа від 1 до 10.
? Використай for або while.
*/
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

/*
? Порахувати суму чисел від 1 до N.
? (Де N це будь-яке введене число).
? Використай for.
*/
// let N = 10;
// let sum = 0;
// for (let i = 1; i <= N; i++) {
//   sum += i;
// }
// console.log(sum);

/*
? Вивести всі парні числа від 1 до 20.
? Використай for.
*/
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

/*
? Знайти факторіал числа N (5! = 5 × 4 × 3 × 2 × 1 = 120).
? Використай for або while.
*/
// let factorial = 1;
// let N = 3;
// for (let i = 1; i <= N; i++) {
//   factorial *= i;
// }
// console.log(factorial);

/*
? Перебрати масив чисел та знайти їхню суму.
? Використай for або for...of.
*/
// const numbers = [10, 20, 30, 40, 50]; // Очікуваний результат: 150
// let sum = 0;
// for (const number of numbers) {
//   sum += number;
// }
// console.log(sum);

/*
? Порахувати кількість голосних літер у слові.
? (Голосні літери: a, e, i, o, u)
? Використай for або for...of.

*/
// const word = 'javascript'; // Очікуваний результат: 3 (a, a, i) // Слово, у якому будемо рахувати голосні
// let vowel = 0; // Лічильник голосних
// const vowels = ['a', 'e', 'i', 'o', 'u']; // створюємо масив голосних літер
// for (const letter of word) {
//   // перебираємо букви в слові
//   if (vowels.includes(letter)) {//і якшо голосна буква є в масиві
//     vowel++;//то додаємо її до лічильника
//   }
// }
// console.log(vowel);
// console.log(vowels);

/*
? Перевернути рядок (reverse string).
? (Наприклад, "hello" → "olleh").
? Використай for.

*/
// const word = 'hello';
// const reversedWord = word.split('').reverse().join('');
// console.log(reversedWord);

// const word = "hello";
// let reversedWord = "";

// for (let i = word.length - 1; i >= 0; i--) {
//   reversedWord += word[i]; // Додаємо букву до нового рядка
// }
// console.log(reversedWord); // "olleh"

/*
? Перебрати об'єкт і вивести всі ключі та значення.
? Використай for...in.

*/
// const person = { name: 'Olya', age: 28, city: 'Warsaw' };
// for (const key in person) {
//   console.log(`${key}: ${person[key]}`);
// }

/*
? Знайти найбільше число у масиві.
? Використай for або for...of.

*/
// const numbers = [23, 78, 45, 98, 15, 67]; // Очікуваний результат: 98
// console.log(Math.max(...numbers));

// let maxNumber = numbers[0]; // окрема змінна для макс числа, починаємо з першого числа в масиві
// for (const num of numbers) {
// перебираємо числа у масиві
//   if (num > maxNumber) {
//     maxNumber = num; //Оновлюємо maxNumber, якщо знайшли більше число
//   }
// }
// console.log(maxNumber);

/*
? Запитувати у користувача числа, поки він не введе число більше 100.
? Використай while
*/

// let number = 0; // Початкове значення, щоб цикл запустився

// while (number <= 100) {
//   // Працюємо, поки число <= 100
//   number = Number(prompt('Введи число більше 100:')); // Запитуємо у користувача число
// }
// console.log('Готово! Ти ввів:', number); // Виводимо результат після завершення циклу

/*
? Перебрати масив і знайти всі унікальні числа.
? (Тобто без повторів).
*/
// const numbers = [1, 2, 3, 2, 4, 5, 1, 6]; // Очікуваний результат: [1, 2, 3, 4, 5, 6]
// let uniqueNumber = []; // Створюємо порожній масив для унікальних чисел
// for (const number of numbers) {
//   if (!uniqueNumber.includes(number)) {
//     // перевіряємо чи числа ще нема в масиві і тоді додаємо до нового масиву
//     uniqueNumber.push(number);
//   }
// }
// console.log(uniqueNumber);
