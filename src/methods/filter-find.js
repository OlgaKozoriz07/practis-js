/*
 * Метод filter
 *
 * - Поелементно перебирає оригінальний массив
 * - Повертає новий масив (з елементами або порожній)
 * - Додає в масив, що повертається, елементи, які задовольняють умові коллбек-функції
 *    - якщо коллбек повернув true елемент додається в масив, що повертається
 *    - якщо коллбек повернув false елемент НЕ додається в масив, що повертається
 */

/*
? Знайти парні числа (filter())
? Напиши функцію getEvenNumbers(numbers), 
? яка отримує масив чисел і повертає тільки парні.

*/
// function getEvenNumbers(numbers) {
//   return numbers.filter(num => num % 2 === 0);
// }
// console.log(getEvenNumbers([10, 15, 20, 25, 30]));

/*
? Знайти всі продукти дорожчі за 50 (filter())
? Напиши функцію getExpensiveProducts(products), 
? яка отримує масив товарів і повертає тільки ті, що дорожчі за 50 грн.
*/
// const products = [
//   { name: 'Молоко', price: 40 },
//   { name: 'Сир', price: 80 },
//   { name: 'Хліб', price: 30 },
//   { name: 'Кава', price: 100 },
// ];
// function getExpensiveProducts(products) {
//   return products.filter(product => product.price > 50);
// }
// console.log(getExpensiveProducts(products));

// const getExpensiveProducts = products =>
//   products.filter(product => product.price > 50);

/*
? Знайти всі фільми певного жанру (filter())
? Напиши функцію getMoviesByGenre(movies, genre), 
? яка отримує масив фільмів та жанр, 
? а потім повертає всі фільми цього жанру.

*/
// const movies = [
//   { title: 'Inception', genre: 'sci-fi' },
//   { title: 'Titanic', genre: 'romance' },
//   { title: 'The Matrix', genre: 'sci-fi' },
//   { title: 'The Notebook', genre: 'romance' },
// ];

// function getMoviesByGenre(movies, genre) {
//   return movies.filter(movie => movie.genre === genre);
// }

// console.log(getMoviesByGenre(movies, 'sci-fi'));

// const getMoviesByGenre = (movies, genre) =>
//   movies.filter(movie => movie.genre === genre);

/*
 * Метод find
 *
 * - Поелементно перебирає оригінальний масив
 * - Повертає перший елемент, що задовольняє умові або undefined
 */

/*
? Знайти користувача за email (find())
? Напиши функцію findUserByEmail(users, email), 
? яка отримує масив користувачів і email, 
? а потім знаходить першого користувача з цим email.
*/
// const users = [
//   { name: 'Оля', email: 'olya@example.com' },
//   { name: 'Андрій', email: 'andriy@example.com' },
//   { name: 'Марина', email: 'marina@example.com' },
// ];
// const findUserByEmail = (users, email) =>
//   users.find(user => user.email === email);

// console.log(findUserByEmail(users, 'marina@example.com'));

/*
? Знайти перший елемент, більший за 100 (find())
? Напиши функцію findFirstBigNumber(numbers), 
? яка знаходить перше число, більше за 100.
*/
// const findFirstBigNumber = numbers => numbers.find(num => num > 100);

// console.log(findFirstBigNumber([10, 50, 150, 200, 5]));
