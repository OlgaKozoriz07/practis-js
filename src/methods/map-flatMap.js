/*
 * Array.prototype.map()
 * - Поелементо перебирає оригінальний масив
 * - Не змінює оригінальний масив
 * - Повертає новий масив такої ж довжини
 */
/*

/*
? Напиши функцію doubleNumbers(numbers), яка приймає масив чисел 
? і повертає новий масив, де всі числа помножені на 2.

*/
// function doubleNumbers(numbers) {
//   return numbers.map(num => num * 2);
// }
// console.log(doubleNumbers([1, 2, 3, 4, 5]));

/*
? Створи функцію getWordLengths(words), яка приймає масив слів 
? і повертає новий масив, де кожен елемент це довжина відповідного слова.
*/

// function getWordLengths(words) {
//   return words.map(word => word.length);
// }
// console.log(getWordLengths(['яблуко', 'банан', 'ківі']));

// const getWordLengths = words => words.map(word => word.length);

/*
? Напиши функцію addTen(numbers), яка приймає масив чисел 
? і повертає новий масив, де до кожного числа додано 10.
*/

// function addTen(numbers) {
//   return numbers.map(elem => elem + 10);
// }
// console.log(addTen([5, 15, 25]));

/*
? Створи функцію getFirstLetters(words), яка приймає масив слів 
? і повертає масив перших літер кожного слова.

*/

// function getFirstLetters(words) {
//   return words.map(word => word[0]);
// }
// console.log(getFirstLetters(['Оля', 'Андрій', 'Марина']));

// const getFirstLetters = words => words.map(word => word[0]);

/*
 * Метод flatMap
 */

/*
? Напиши функцію splitSentences(sentences), яка приймає масив речень 
? і повертає масив усіх слів у цих реченнях.
*/
// const splitSentences = sentences => sentences.flatMap(item => item.split(' '));

// console.log(splitSentences(['Я люблю JavaScript', 'Методи масивів це круто!']));

/*
? Є масив постів у соцмережах. Кожен пост містить масив тегів. 
? Твоє завдання повернути масив всіх тегів без вкладеності.

*/
// const posts = [
//   { id: 1, tags: ['javascript', 'coding'] },
//   { id: 2, tags: ['html', 'css'] },
//   { id: 3, tags: ['javascript', 'react'] },
// ];

// const getAllTags = posts => posts.flatMap(post => post.tags);

// console.log(getAllTags(posts));

/*
? Напиши функцію countLetterOccurrences(words, letter), яка приймає масив слів 
? і букву, а потім рахує, скільки разів ця буква зустрічається у всіх словах разом.


*/
// function countLetterOccurrences(words, letter) {
//   return words
//     .flatMap(word => word.split('')) // Розбиваємо слова на букви
//     .filter(l => l === letter).length; // Залишаємо тільки ті букви, що нам потрібні // Рахуємо, скільки їх
// }

// console.log(countLetterOccurrences(['банан', 'яблуко', 'груша'], 'а')); // 3
