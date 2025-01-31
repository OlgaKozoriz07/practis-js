/*
? Виведи на екран загальну кількість яблук та винограду. Різницю яблук та винограду.
 */

// const apples = 47;
// const grapes = 135;

// const totalFruit = apples + grapes;
// console.log(totalFruit);

// const diff = apples - grapes;
// console.log(diff);

/*
? Дано 90 хвилин, дізнайтеся скільки в цьому числі міститься годин і хвилин.
? Результат виведіть у консоль.
*/

// const totalMinutes = 90;

// let hours = totalMinutes / 60;
// hours = Math.floor(hours);

// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// const res1 = Number.parseInt('23.34');
// console.log('res1:', res1);

// const top = '100.23px';
// const left = '5px';

// const res2 = Number.parseFloat(top);
// const res3 = Number.parseFloat(left);
// console.log('res2:', res2);
// console.log('res3:', res3);

/*
? Запросіть у користувача число, якщо число дорівнює 10,
? то виведіть 'Вірно', інакше виведіть 'Невірно'.
*/

// const number = Number(prompt('Enter a number'));
// if (number === 10) {
//   alert('Good');
// } else {
//   alert('Bad');
// }

/*
? Перевірте чи є гроші на балансі, якщо є то виведіть до консолі 'Positive', інакше 'Negative'.
*/
// const balance = 1000;
// if (balance > 0) {
//   alert('Positive');
// } else {
//   alert('Negative');
// }

// console.log(balance);

/*
? Напиши скрипт для відображення часу дедлайну здачі проекту. Використовуй if...else.
?
? Якщо до дедлайну 0 днів - виведи рядок "Today"
? Якщо до дедлайну 1 день - виведи рядок "Tomorrow"
? Якщо до дедлайну 2 дні - виведи рядок "Overmorrow"
? Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"
? В інших випадках - виведи рядок "Incorrect value of days"
 */

// const daysUntilDeadline = 0;
// if (daysUntilDeadline === 0) {
//   alert('Today');
// } else if (daysUntilDeadline === 1) {
//   alert('Tomorrow');
// } else if (daysUntilDeadline === 2) {
//   alert('Overmorrow');
// } else if (daysUntilDeadline >= 3) {
//   alert('date in the future;');
// } else {
//   alert('Inncorect value of days');
// }

/*
? Перепишіть конструкцію if з використанням тернарного оператора.
*/
// const numA = 4;
// const numB = 1;

// if (numA + numB < 4) {
//   result = 'Мало';
// } else {
//   result = 'Багато';
// }

// console.log(result);

// const numA = 4;
// const numB = 1;
// const result = numA + numB < 4 ? 'Less' : 'Big';
// console.log(result);

/*
? Нормалізація рядка
?
? Напишіть код, який запитуватиме:
? 'Яка «офіційна» назва JavaScript?'
? Якщо користувач вводить ECMAScript,
? то показати: «Вірно!», інакше  відобразити: «Не знаєте? ECMAScript!»
*/

// const answer = 'ECMAScript';
// let userInput = prompt('Яка «офіційна» назва JavaScript?');
// if (userInput.toLowerCase() === answer.toLowerCase()) {
//   alert('Good');
// } else {
//   alert('Dont know? ECMAScript');
// }

/*
? Форматування посилання (endsWith)
?
? Напиши скрипт який перевіряє чи закінчується значення
?  змінної link символом /. Якщо ні, додай до кінця
?  значення link цей символ.
? Використовуй конструкцію if...else.
*/

// let link = 'https://my-site.com/about';
// if (!link.endsWith('/')) {
//   link = link + '/';
// }
// console.log(link);

/*
? Форматування посилання (includes та логічне «І»)
? Напиши скрипт який перевіряє чи закінчується значення
? змінної link символом /. Якщо ні, додай до кінця
? значення link цей символ, але тільки в тому випадку,
? якщо в link є підрядок "my-site".
? Використовуй конструкцію if...else або тернарний оператор.
*/

// let link = 'https://my-site.com/about';
// if (!link.endsWith('/') && link.includes('my-site')) {
//   link = link + '/';
// }
// console.log(link);

/*
? Пошук у рядку методом includes()
? Потрібно перевірити чи є в рядку заборонені слова. 
? Заборонені слова зберігаються у змінних blacklistedWord1 та blacklistedWord2.
*/

// const blacklistedWord1 = 'spam';
// const blacklistedWord2 = 'sale';

// const string1 =
//   "Hello, I'm Prince Abdul, this is not spam, I'm offering you a million!";
// const isString1IncludesForbiddenWords =
//   string1.toLowerCase().includes(blacklistedWord1) ||
//   string1.toLowerCase().includes(blacklistedWord2);
// console.log(isString1IncludesForbiddenWords);

// const string2 = "Biggest SALE this week, don't miss out!";

// const isString1IncludesForbiddenWords =
//   string2.toLowerCase().includes(blacklistedWord1) ||
//   string2.toLowerCase().includes(blacklistedWord2);
// console.log(isString1IncludesForbiddenWords);

// const string3 = '#fatlivesmatter advertising campaign';
// const isString1IncludesForbiddenWords =
//   string3.toLowerCase().includes(blacklistedWord1) ||
//   string3.toLowerCase().includes(blacklistedWord2);
// console.log(isString1IncludesForbiddenWords);

/*
? Напишіть цикл, який пропонує prompt ввести число більше за 100.
? Якщо відвідувач введе інше число  попросити ввести ще раз, і так далі.
*/

// Через цикл while
// let userInput = +prompt('Введіть число більше за 100');
// while (userInput > 100)

/*
? За допомогою циклу for виведіть парні числа від 2 до 10.
*/

// const fn1 = function () {
//   console.log('fn1 execution'); // знайшов, виводиться лог \\2

//   fn2(); // виклик і шукає fn2 \\3

//   console.log('After fn2 execution'); //а вже після завершення усього, виводиться ось цей лог\\8
// };

// const fn2 = function () {
//   console.log('fn2 execution'); // знайшов, виоводиться лог \\4

//   fn3(); // виклик і шукає fn3 \\5

//   console.log('After fn3 execution'); //після завершення fn3, виконується цей лог\\7
// };

// const fn3 = function () {
//   console.log('fn3 execution'); // знайшов, виводить лог \\ 6
// };

// fn1(); //виклик і шукає fn1\\1

// const fnP = function () {
//   console.log('fnP execution');
//   if (Math.random() > 0.5) {
//     fnQ();
//   }
//   console.log('After fnQ execution');
// };

// const fnQ = function () {
//   console.log('fnQ execution');
//   fnR();
//   console.log('After fnR execution');
// };

// const fnR = function () {
//   console.log('fnR execution');
// };

// fnP();

/*===============================================*/

/*
? Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами,
? значення яких буде передано до параметра dimensions у вигляді рядка.
? Значення гарантовано розділені пробілом.
*/

// function getRectArea(dimensions) {
//   const sides = dimensions.split(' '); //розділяємо рядко пробілами
//   return +sides[0] * +sides[1]; // додаємо + аби перетворити рядок в число і вказуємо індекси[], а потім перемножуємо сторони аби отрмати площу
// }

// console.log(getRectArea('8 11')); // 88
// console.log(getRectArea('18 11')); // 198
// console.log(getRectArea('8 21')); // 168

/*
? Напиши функцію checkCaseOfLetter(letter), яка буде перевіряти регістр літери.
? В параметр letter будуть передавати рядок із однією літерою.
? Якщо літера знаходиться у верхньому регістрі, то буде повертатися 'upper case' інакше 'lower case'.
*/

// function checkCaseOfLetter(letter) {
//   if (letter === letter.toLowerCase()) {
//     return 'upper case';
//   } else {
//     return 'lower case';
//   }
// }

// console.log(checkCaseOfLetter('a')); // 'lower case'
// console.log(checkCaseOfLetter('A')); // 'upper case'

/*
? Напиши функцію changeCaseOfLetters(str), яка буде повертати рядок із зміненим регістром літер.
? В параметр str будуть передавати рядок.
*/

// function changeCaseOfLetters(str) {
//   let resultedStr = '';
// перетворюємо літери на малі або великі
//   for (const letter of str) {
//     if (letter === letter.toLowerCase()) {
//       resultedStr += letter.toUpperCase();
//     } else {
//       resultedStr += letter.toLowerCase();
//     }
//   }

//   return resultedStr;
// }

// console.log(changeCaseOfLetters('AbCdE')); // aBcDe
// console.log(changeCaseOfLetters('abc')); // ABC
// console.log(changeCaseOfLetters('CBA')); // cba

/*
? Напиши функцію logItems(items), яка отримує масив та використовує цикл,
? який для кожного елемента масиву буде виводити в консоль повідомлення у
? форматі <номер елемента> - <значення елемента>. Нумерація елементів
? повинна починатися з 1.
?
? Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з
? індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax.
*/

// function logItems(items) {
//   for (let i = 0; i < items.length; i++) {
//перебериємо масив

//     console.log(`${i + 1} - ${items[i]}`); //Виводимо значення елемента з індексом i та додаємо 1 до індексу, щоб почати нумерацію з 1. Для кожного елемента виводиться повідомлення у форматі: <номер елемента> - <значення елемента>
//   }
// }

// console.log(logItems(['Mango', 'Poly', 'Ajax']));
// console.log(logItems(['🍎', '🍇', '🍑', '🍌', '🍋']));

/*
? Напиши функцію printInfo(names, phones) яка виводить
? у консоль ім'я та телефонний номер користувача. У параметри
? names та phones будуть передані рядки імен та телефонних номерів,
? розділені комами. Порядковий номер імен та телефонів у рядках
? вказують на відповідність. Кількість імен та телефонів
? гарантовано однакова.
*/

// function printInfo(names, phones) {
//   const namesArr = names.split(','); // Розбиваємо рядок з іменами на масив
//   const phonesArr = phones.split(','); // Розбиваємо рядок з телефонами на масив

//   // Для кожної пари ім'я та телефон виводимо в консоль
//   for (let i = 0; i < namesArr.length; i++) {
//     console.log(`${namesArr[i]} - ${phonesArr[i]}`);
//   }
// }
// printInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300'
// );

/*
? Метод splice().
?
? Напишіть функції для роботи з колекцією навчальних курсів courses:
? addCourse(name) - додає курс в кінець колекції
? removeCourse(name) - видаляє курс з колекції
? updateCourse(oldName, newName) - змінює назву курса
*/

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// // Додаємо курс
// function addCourse(name) {
//   if (courses.includes(name)) {
//     console.log('У вас вже є такий курс');
//   } else {
//     courses.push(name); // Додаємо курс в кінець
//   }
// }

// // Видаляємо курс
// function removeCourse(name) {
//   const index = courses.indexOf(name);
//   if (index !== -1) {// перевіряємо чи є курс, -1 повертає, лтш тоді коли значення не знайдено
//     courses.splice(index, 1); // Видаляємо курс
//   } else {
//     console.log('Курс не знайдено');
//   }
// }

// // Оновлюємо курс
// function updateCourse(oldName, newName) {
//   const index = courses.indexOf(oldName);
//   if (index !== -1) {
//     courses.splice(index, 1, newName); // Оновлюємо назву
//   } else {
//     console.log('Курс не знайдено');
//   }
// }

// addCourse('Express');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse('CSS'); // 'У вас вже є такий курс'

// removeCourse('React');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse('React'); // 'Курс з такою назвою не знайдено'

// updateCourse('HTML', 'NestJS');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']

// const books = [
//   { title: 'The Last Kingdom', author: 'Bernard Cornwell' },
//   { title: 'Beside Still Waters', author: 'Robert Sheckley' },
//   { title: 'The Dream of a Ridiculous Man', author: 'Fyodor Dostoevsky' },
// ];

// const authorToSearchFor = 'Robert Sheckley';

// for (const book of books) {
//   if (book.author === authorToSearchFor) {
//     console.log(book);
//     console.log(book.title);
//     console.log(book.rating);
//   }
// }

// const atTheOldToad = {//this
//   potions: ['Speed potion', 'Stone skin', 'Bla Bla'],
//   getPotions() {
//     return this.potions;
//   },
// };

// console.log(atTheOldToad.getPotions());

// const bookShelf = {
//   books: ['The Last Kingdom'],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
// bookShelf.addBook('The Mist');
// bookShelf.addBook('Dream Guardian');
// console.log(bookShelf.getBooks()); // ["The Last Kingdom", "The Mist", "Dream Guardian"]

// // ✅ Логічно й синтаксично згруповані сутності
// const bookShelf = {
//   books: ['The Last Kingdom', 'Dream Guardian'],
//   // Це метод об'єкта
//   getBooks() {
//     return 'Returning all books';
//   },
//   // Це метод об'єкта
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
// };

// // Виклики методів
// console.log(bookShelf.getBooks()); // поверне "Returning all books"
// console.log(bookShelf.addBook('New book 1')); // поверне "Adding book New book 1"
// console.log(bookShelf.addBook('New book 2')); // поверне "Adding book New book 2"

// const atTheOldToad = {
//   potions: [],

//   getPotions() {
//     return 'List of all available potions';
//   },

//   addPotion(potionName) {
//     return `Adding ${potionName}`;
//   },
// };
// console.log(atTheOldToad.addPotion('Invisibility'));
// console.log(atTheOldToad.addPotion('Power potion'));

// const atTheOldToad = {
//   potions: ['Speed potion', 'Stone skin'],
//   getPotions() {
//     return this.potions;
//   },
// };
// console.log(atTheOldToad.getPotions());

// const bookShelf = {
//   books: ['The Last Kingdom'],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
// bookShelf.addBook('The Mist');
// bookShelf.addBook('Dream Guardian');
// console.log(bookShelf.getBooks()); // ["The Last Kingdom", "The Mist", "Dream Guardian"]

// const atTheOldToad = {
//   potions: ['Speed potion', 'Stone skin'],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     this.potions.push(potionName);
//   },
// };

// // Перевірка роботи коду:
// console.log(atTheOldToad.getPotions()); // ["Speed potion", "Stone skin"]

// atTheOldToad.addPotion('Invisibility');
// console.log(atTheOldToad.getPotions()); // ["Speed potion", "Stone skin", "Invisibility"]

// atTheOldToad.addPotion('Power potion');
// console.log(atTheOldToad.getPotions()); // ["Speed potion", "Stone skin", "Invisibility", "Power potion"]

// const bookShelf = {
//   books: [
//     { title: 'The Last Kingdom', rating: 8 },
//     { title: 'The Mist', rating: 6 },
//   ],
//   getBooks() {
//     return this.books;
//   },
//   addBook(newBook) {
//     this.books.push(newBook);
//   },
// };

// bookShelf.addBook({ title: 'Dream Guardian', rating: 9 });
// console.log(bookShelf.getBooks());

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);
//   },
//   getTotalPrice() {
//     let totalPrice = 0;
//     for (const potion of this.potions) {
//       totalPrice += potion.price;
//     }
//     return totalPrice;
//   },
// };

// atTheOldToad.addPotion({ name: 'Invisibility', price: 620 });
// console.log(atTheOldToad.getPotions());

// atTheOldToad.addPotion({ name: 'Power potion', price: 270 });
// console.log(atTheOldToad.getPotions());

// console.log(atTheOldToad.getTotalPrice());

// const bookShelf = {
//   books: [
//     { title: 'The Last Kingdom', rating: 8 },
//     { title: 'The Mist', rating: 6 },
//   ],
//   changeRating(bookName, newRating) {
//     for (const book of this.books) {
//       if (book.title === bookName) {
//         book.rating = newRating;
//       }
//     }
//   },
// };

// // Змінюємо рейтинг книги
// bookShelf.changeRating('The Mist', 9);
// bookShelf.changeRating('The Last Kingdom', 4);

// // Виводимо оновлений масив книг у консоль
// console.log(bookShelf.books);

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//       }
//     }
//   },
// };

// console.log(
//   'Before first update:',
//   JSON.parse(JSON.stringify(atTheOldToad.getPotions()))
// );

// atTheOldToad.updatePotionName('Stone skin', 'Invisibility');
// console.log(
//   'After first update:',
//   JSON.parse(JSON.stringify(atTheOldToad.getPotions()))
// );

// atTheOldToad.updatePotionName('Speed potion', 'Polymorth');
// console.log(
//   'After second update:',
//   JSON.parse(JSON.stringify(atTheOldToad.getPotions()))
// );

// console.log(atTheOldToad.getPotions()); // Виведе початковий стан масиву

// atTheOldToad.updatePotionName('Stone skin', 'Invisibility');
// console.log(atTheOldToad.getPotions()); // Виведе оновлений масив після першої зміни

// atTheOldToad.updatePotionName('Speed potion', 'Polymorth');
// console.log(atTheOldToad.getPotions()); // Виведе масив після другої зміни
