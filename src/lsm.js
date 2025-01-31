// const age = 20;
// const username = 'Mango';

// console.log(age);
// console.log(username);

// let username = 'Mango';
// console.log(username); // "Mango"

// username = 'Poly';
// console.log(username); // "Poly"

// const quantity = 17;
// console.log(typeof quantity); // виведе "number"

// const message = 'JavaScript is awesome!';
// console.log(typeof message); // виведе "string"

// const isSidebarOpen = false;
// console.log(typeof isSidebarOpen); // виведе "boolean"

// let username;
// console.log(typeof username); // виведе "undefined"

// let status = null;
// console.log(typeof status); // виведе "object"

// const x = 8;
// const y = 5;
// console.log(x + y); // 13

// const username = 'Poly';
// const message = 'Welcome ' + username + '!';
// console.log(message);

// const guestName = 'Mango';
// const roomNumber = 207;
// const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
// console.log(greeting); // "Welcome Mango, your room number is 207!"

// const productName = 'Droid';
// const pricePerItem = 3500;

// const message = `You picked ${productName}, price per item is ${pricePerItem} credits!`;
// console.log(message);

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// console.log(totalPrice); //4850
// const message = `You ordered droids worth ${totalPrice} credits`;
// console.log(message);

// const courseTopic = 'JavaScript essentials';
// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];
// console.log(courseTopic);
// console.log(courseTopicLength);
// console.log(firstElement);
// console.log(lastElement);

// console.log(String(2));
// console.log(String(true));

// let product = 'Droid';
// console.log(product);
// product = 'DrOid';
// console.log(product);

// console.log(5 == 5); // true
// console.log(5 == 3); // false
// console.log(5 != 3); // true
// console.log(5 != 5); // false

// const correctPassword = 'jqueryismyjam';
// const userPassword = 'mangodab3st';
// const isValid = correctPassword === userPassword;
// console.log(isValid);// false

// console.log('10' + true); //10true

// console.log(Number.parseInt('5')); // 5
// console.log(Number.parseInt('5.5')); // 5
// console.log(Number.parseInt('5cm')); // 5
// console.log(Number.parseInt('12qwe74')); // 12
// console.log(Number.parseInt('12.46qwe79')); // 12
// console.log(Number.parseInt('cm5')); // NaN
// console.log(Number.parseInt('')); // NaN
// console.log(Number.parseInt('qweqwe')); // NaN

// console.log(Number.parseFloat('5')); // 5
// console.log(Number.parseFloat('5.5')); // 5.5
// console.log(Number.parseFloat('3.14')); // 3.14
// console.log(Number.parseFloat('5cm')); // 5
// console.log(Number.parseFloat('5.5cm')); // 5.5
// console.log(Number.parseFloat('12qwe74')); // 12
// console.log(Number.parseFloat('12.46qwe79')); // 12.46
// console.log(Number.parseFloat('cm5')); // NaN
// console.log(Number.parseFloat('')); // NaN
// console.log(Number.parseFloat('qweqwe')); // NaN

// const value = '24.5px';
// const numerical = parseFloat(value);
// console.log(Number.parseFloat(value)); // 24.5

// function doStuff() {
//   // Тіло функції
//   console.log('Log inside multiply function');
// }

// doStuff();

// function greetingClient() {
//   console.log('Hello guests!');
// }
// greetingClient();

// function sayHi() {
//   console.log('Hello, this is my first function!');
// }
// sayHi();

// // Оголошення параметрів x, y, z
// function multiply(x, y, z) {
//   console.log(`Result: ${x * y * z}`);
// }

// // Передача аргументів
// multiply(2, 3, 5); // "Result: 30"
// multiply(4, 8, 12); // "Result: 384"
// multiply(17, 6, 25); // "Result: 2550"

// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
// }
// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// function add(a, b, c) {
//   console.log(a + b + c);
//   return a + b + c;
// }
// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// const firstName = prompt('How old are you?');
// console.log(firstName);

// let students = 100;
// students += 50;
// console.log(students);

// function checkStorage(available, ordered) {
//   if (ordered > available) {
//     return 'Not enough goods in stock!';
//   } else {
//     return 'Order is processed, our manager will contact you';
//   }
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 180));

// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return 'There are no products in the order!';
//   } else if (ordered > available) {
//     return 'Your order is too large, there are not enough items in stock!';
//   } else {
//     return 'The order is accepted, our manager will contact you';
//   }
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 250));

// const num = 10;
// let result;

// if (num > 10) {
//   result = 'Число больше 10';
// } else {
//   result = 'Число меньше или равно 10';
// }

// console.log(result);

// const num = 10;
// const result = num > 10 ? 'Число більше 10' : 'Число менше або рівно 10';
// console.log(result);

// function checkPassword(password) {
//   const correctPassword = 'jqueryismyjam';
//   return password === correctPassword
//     ? 'Access granted'
//     : 'Access denied, wrong password!';
// }

// function getSubscriptionPrice(type) {
//   switch (type) {
//     case 'starter':
//       return 0;
//       break;
//     case 'professional':
//       return 20;
//       break;
//     case 'organization':
//       return 50;
//     default:
//       return 'Invalid subscription type!';
//   }
// }
// console.log(getSubscriptionPrice('professional'));
// console.log(getSubscriptionPrice('organization'));
// console.log(getSubscriptionPrice('starter'));
// console.log(getSubscriptionPrice('premium'));

// function isNumberInRange(start, end, number) {
//   return number >= start && number <= end;
// }
// console.log(isNumberInRange(10, 30, 17));
// console.log(isNumberInRange(10, 30, 5));
// console.log(isNumberInRange(20, 50, 24));
// console.log(isNumberInRange(20, 50, 76));

// function checkAccess(subType) {
//   return subType === 'pro' || subType === 'vip';
// }
// console.log(checkAccess('pro'));
// console.log(checkAccess('starter'));
// console.log(checkAccess('vip'));
// console.log(checkAccess('free'));

// const fullName = 'Olga Kozoriz';
// console.log(fullName.slice(0, 5));
// console.log(fullName.slice(5, 10));

// function getSubstring(string, length) {
//   return string.slice(0, length);
// }
// console.log(getSubstring('Hello world', 3));
// console.log(getSubstring('Hello world', 5));
// console.log(getSubstring('Hello world', 8));
// console.log(getSubstring('Hello world', 11));

// const message = 'Welcome to Bahamas!';
// console.log(message.toLowerCase()); // "welcome to bahamas!"
// console.log(message); // "Welcome to Bahamas!"

// const message = "Welcome to Bahamas!";
// console.log(message.toUpperCase()); // "WELCOME TO BAHAMAS!"
// console.log(message); // "Welcome to Bahamas!"

// function normalizeInput(input, to) {
//   if (to === 'upper') {
//     return input.toUpperCase();
//   } else {
//     return input.toLowerCase();
//   }
// }
// console.log(normalizeInput("This ISN'T SpaM", 'lower'));
// console.log(normalizeInput('Big SALE', 'lower'));
// console.log(normalizeInput('Big SALE', 'upper'));
// console.log(normalizeInput('Stay Awhile and Listen', 'lower'));
// console.log(normalizeInput('Stay Awhile and Listen', 'upper'));

// function checkForName(fullName, firstName) {
//   return fullName.toLowerCase().includes(firstName.toLowerCase());
// }
// console.log(checkForName('Jason Neis', 'Jason'));
// console.log(checkForName('Jason Neis', 'jAsOn'));
// console.log(checkForName('Jason Neis', 'Jacob'));
// console.log(checkForName('Caty Stars', 'Caty'));
// console.log(checkForName('Caty Stars', 'cAtY'));
// console.log(checkForName('Caty Stars', 'Andromeda'));

// const string1 = 'Hello, world!';

// console.log(string1.startsWith('Hello')); //true
// console.log(string1.startsWith('hello')); //false

// function checkFileExtension(fileName, ext) {
//   if (fileName.endsWith(ext)) {
//     return 'File extension matches';
//   } else {
//     return 'File extension does not match';
//   }
// }

// console.log(checkFileExtension('styles.css', '.css'));
// console.log(checkFileExtension('styles.css', '.js'));
// console.log(checkFileExtension('app.js', '.js'));
// console.log(checkFileExtension('app.js', '.html'));
// console.log(checkFileExtension('index.html', '.html'));
// console.log(checkFileExtension('index.html', '.css'));
// console.log(checkFileExtension('index.html', '.js'));

// const message = 'welcome to bahamas mamas';
// // const index = message.indexOf('mamas');
// const index = message.indexOf('hello');
// console.log(index);

// function getFileName(file) {
//   // Знаходимо індекс крапки в імені файлу
//   const dotIndex = file.indexOf('.');

//   // Якщо крапки немає (dotIndex дорівнює -1), повертаємо ім'я файлу без змін
//   if (dotIndex === -1) {
//     return file;
//   }

//   // Якщо крапка є, відрізаємо частину рядка до крапки (не включаючи крапку)
//   return file.slice(0, dotIndex);
// }

// // Приклади використання
// console.log(getFileName('styles.css')); // Поверне 'styles'
// console.log(getFileName('app.js')); // Поверне 'app'
// console.log(getFileName('styles')); // Поверне 'styles'

// function createFileName(name, ext) {
//   const trimmedName = name.trim();
//   const fullFileName = `${trimmedName}.${ext}`;
//   return fullFileName;
// }

// function createFileName(name, ext) {
//   return `${name.trim()}.${ext}`;
// }

// console.log(createFileName(' order ', 'txt'));
// console.log(createFileName('report ', 'csv'));
// console.log(createFileName(' presentation', 'xml'));

// let count = 0;

// while (count < 10) {
//   console.log(`Count: ${count}`);
//   count += 1;
// }

// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

// let count = 10;
// while (count > 0) {
//   console.log(count);
//   count--;
// }

// function calculateTotal(number) {
//   let total = 0;// ініціалізація змінної для зберігання суми
//   let i = 1;// починаємо з 1
//   while (i <= number) { // виконуємо цикл, поки і не перевищить number
//     total += i; // додаємо поточне число і до total
//     i++;//  збільшуємо і на 1
//   }
//   return total;// повертаємо суму
// }

// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(0));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));
// console.log(calculateTotal());

// let count = 0;

// do {
//   console.log(`Count: ${count}`);
//   count += 1;
// } while (count < 5);

// for (let i = 0; i <= 20; i += 5) {
//   console.log(i); // 5, 10, 15, 20
// }

// let x = 5;
// const y = x--;
// console.log(x); // 4
// console.log(y); // 5

// function calculateEvenTotal(number) {
//   let total = 0;
//   for (let i = 0; i <= number; i++) {
//     if (i % 2 === 0) {
//       total += i;
//     }
//   }
//   return total;
// }

// console.log(calculateEvenTotal(1));
// console.log(calculateEvenTotal(3));
// console.log(calculateEvenTotal(7));
// console.log(calculateEvenTotal(18));
// console.log(calculateEvenTotal(27));
// console.log(calculateEvenTotal());

// function findNumber(start, end, divisor) {
//   for (let i = start; i <= end; i++) {
//     // Цикл від start до end включно
//     if (i % divisor === 0) {
//       // Перевіряємо, чи ділиться число на divisor без остачі
//       return i; // Якщо так, повертаємо це число і завершуємо функцію
//     }
//   }
//   return null; // Якщо в діапазоні немає такого числа, повертаємо null
// }

// console.log(findNumber(2, 6, 5)); // 5 (5 ділиться на 5)
// console.log(findNumber(8, 17, 3)); // 9 (9 ділиться на 3)
// console.log(findNumber(6, 9, 4)); // 8 (8 ділиться на 4)
// console.log(findNumber(16, 35, 7)); // 21 (21 ділиться на 7)
// console.log(findNumber(1, 4, 10)); // null (немає числа, що ділиться на 10)

// const b = 130;

// if (true) {
//   const b = 20;
//   console.log('b: ', b);
// }

// if (true) {
//   const b = 100;
//   console.log('b: ', b);
// }

// console.log((1 && null && 2) > 0);

// const planets = ['Earth', 'Mars', 'Venus']; // масив рядків
// // const numbers = [1, 2, 3, 4, 5]; // масив чисел

// console.log(planets[2]);

// console.log(numbers);

// const mixed = ['apple', 10, true]; // масив з елементами різних типів

// console.log(mixed);

// const fruits = ['apple', 'plum', 'pear', 'orange'];
// const [firstElement, secondElement, lastElement] = ['apple', 'plum', 'orange'];
// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);

// const planets = ['Earth', 'Mars', 'Venus', 'Uranus'];
// planets[0] = 'Jupiter';
// planets[2] = 'Neptune';
// console.log(planets); // ['Jupiter', 'Mars', 'Neptune', 'Uranus']

// const fruits = ['apple', 'plum', 'pear', 'orange'];
// console.log(fruits);
// fruits[1] = 'peach';
// fruits[3] = 'banana';
// console.log(fruits);

// function getOrderQuantity(order) {
//   return order.length;
// }
// console.log(getOrderQuantity(['apple', 'peach', 'pear', 'banana']));
// console.log(getOrderQuantity(['apple', 'banana']));
// console.log(getOrderQuantity(['apple', 'banana', 'pear']));
// console.log(getOrderQuantity([]));

// const planets = ['Earth', 'Mars', 'Venus'];
// const lastElementIndex = planets.length - 1;
// console.log(planets[lastElementIndex]); // "Venus"

// const array = [false];
// const result = array ? 'A' : 'B';
// console.log(result);

// function getExtremeElements(array) {
//   return [array[0], array[array.length - 1]];
// }

// function getLength(array) {
//   let newString = array.join('');
//   return newString.length;
// }
// console.log(getLength(['Mango', 'hurries', 'to', 'the', 'train']));
// console.log(getLength(['M', 'a', 'n', 'g', 'o']));
// console.log(getLength(['top', 'picks', 'for', 'you']));

// const slug = 'amazing-french-recipes';
// const slugParts = slug.split('-');
// console.log(slugParts);

// function calculateEngravingPrice(message, pricePerWord) {
//   const word = message.split(' ');
//   const countWord = word.length;
//   const totalPrice = countWord * pricePerWord;
//   return totalPrice;
// }
// console.log(calculateEngravingPrice('JavaScript is in my blood', 10));
// console.log(calculateEngravingPrice('JavaScript is in my blood', 20));
// console.log(calculateEngravingPrice('Web-development is creative work', 40));
// console.log(calculateEngravingPrice('Web-development is creative work', 20));

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, -1);
// const lastThreeEls = fruits.slice(-3);
// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];
// const allClients = oldClients.concat(newClients);
// console.log(allClients);

// function getSlice(array, value) {
//   const index = array.indexOf(value); // Знаходимо індекс елемента зі значенням value
//   if (index === -1) {
// Якщо індекс дорівнює -1, елемент не знайдено, повертаємо порожній масив
//     return [];
//   }
// Повертаємо підмасив від початку до індексу value включно
//   return array.slice(0, index + 1);
// }

// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Poly'));
// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Ajax'));
// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Mango'));
// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Jacob'));
// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Casey'));

// const planets = ['Earth', 'Mars', 'Venus'];

// planets.push('Jupiter');
// console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter']

// planets.push('Saturn', 'Neptune');
// console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter', "Saturn", "Neptune"]

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   for (let i = min; i <= max; i++) {
//     numbers.push(i);
//   }
//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));
// console.log(createArrayOfNumbers());

// const planets = ['Earth', 'Mars', 'Venus'];

// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }

// function checkStorage(storage, item) {
//   const lowerCaseItem = item.toLowerCase(); // Перетворення item у нижній регістр; Цей рядок дозволяє порівнювати товар без урахування регістру, незалежно від того, як було введено назву

//Цикл проходить через всі елементи масиву storage.
//   for (let i = 0; i < storage.length; i++) {
// Перевірка кожного елемента; storage[i].toLowerCase() перетворює поточний елемент масиву у нижній регістр; Порівнюється з lowerCaseItem (також у нижньому регістрі).
//     if (storage[i].toLowerCase() === lowerCaseItem) {
//Якщо знайдено відповідний елемент, функція повертає/// Використовується саме storage[i], щоб відобразити назву товару у тому вигляді, як вона записана в масиві.
//       return `${storage[i]} is available to order!`;
//     }
//   }

//   return 'Sorry! We are out of stock!';
// }

// function checkStorage(storage, item) {
// Приводимо item до нижнього регістру для порівняння
//   const lowerCaseItem = item.toLowerCase();

// Перевіряємо, чи є товар у масиві (незалежно від регістру)
//   for (let i = 0; i < storage.length; i++) {
//     if (storage[i].toLowerCase() === lowerCaseItem) {
//       return `${storage[i].toLowerCase()} is available to order!`; // Повертаємо товар у нижньому регістрі
//     }
//   }

//   return 'Sorry! We are out of stock!'; // Якщо товар не знайдено
// }

// console.log(checkStorage(['apple', 'plum', 'pear'], 'plum'));
// console.log(checkStorage(['apple', 'plum', 'pear'], 'pLuM'));
// console.log(checkStorage(['apple', 'plum', 'pear'], 'pEAr'));
// console.log(checkStorage(['apple', 'plum', 'pear'], 'orange'));
// console.log(checkStorage(['apple', 'plum', 'pear'], 'carrot'));

// const numbers = [];
// for (let i = 1; i <= 1000; ++i) {
//   numbers.push(i);
// }
// console.log(numbers);

// const audience = ['🐸', '🐶', '🐱'];

// audience[5] = '🐌';

// console.log(audience); // ['🐸', '🐶', '🐱', empty × 2, '🐌']

// const arr1 = [1, 2, 3];
// const arr2 = arr1.slice();
// console.log(arr1);
// console.log(arr2);

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

// for (let i = 0; i < friends.length; i++) {
//   console.log(friends[i]);
// }

// function sum(a, b) {
//   console.log(arguments);
//   return a + b;
// }

// sum(2, 5);

// function multiply() {
//   let total = 1;

//   for (const arg of arguments) {
//     total *= arg;
//   }

//   return total;
// }

// console.log(multiply(1, 2, 3)); //  6
// console.log(multiply(1, 2, 3, 4)); //  24
// console.log(multiply(1, 2, 3, 4, 5)); //  120

// function count(from, to, step = 1) {
//   console.log(`from: ${from}, to: ${to}, step: ${step}`);

//   for (let i = from; i <= to; i += step) {
//     // ...
//   }
// }

// count(1, 15, 4); // "from: 1, to: 15, step: 4"
// count(1, 15); // "from: 1, to: 15, step: 1"

// // ✅ Працює виклик перед оголошенням
// multiply(1, 2, 3);

// function multiply(x, y, z) {
//   console.log(x * y * z);
// }

// // ✅ Працює виклик після оголошення
// multiply(4, 5, 6);

// function bar() {
//   console.log('bar');
// }

// function baz() {
//   console.log('baz');
// }

// function foo() {
//   console.log('foo');
//   bar();
//   baz();
// }

// foo();

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };
// console.log(apartment);

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];
// console.log(ownerName);
// console.log(ownerPhone);
// console.log(ownerEmail);
// console.log(numberOfTags);
// console.log(firstTag);
// console.log(lastTag);

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };
// console.log(apartment);

// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];
// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };

// for (const key in book) {
//   console.log(key); // Ключ
//   console.log(book[key]); // Значення властивості з таким ключем
// }

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };

// const keys = [];
// const values = [];

// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };

// const keys = Object.keys(apartment);
// const values = [];
// for (const key of keys) {
//   values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);

// function countProps(object) {
//   return Object.keys(object).length;
// }
// console.log(countProps({})); //0
// console.log(countProps({ name: 'Mango', age: 2 })); //2
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); //3

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   const salaryValues = Object.values(salaries);
//   for (const salary of salaryValues) {
//     totalSalary += salary;
//   }
//   return totalSalary;
// }

// console.log(countTotalSalary({}));
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];
// const hexColors = [];
// const rgbColors = [];
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

// function getProductPrice(productName) {
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];

//   // Проходимо через кожен продукт у масиві
//   for (const product of products) {
//     // Якщо ім'я продукту збігається з productName
//     if (product.name === productName) {
//       return product.price; // Повертаємо його ціну
//     }
//   }
//   return null; // Якщо продукт не знайдено, повертаємо null
// }
// console.log(getProductPrice('Radar'));
// console.log(getProductPrice('Grip'));
// console.log(getProductPrice('Scanner'));
// console.log(getProductPrice('Kola'));

// function getAllPropValues(propName) {
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];
// }

// function addOverNum(value, ...args) {
//   let totalSum = 0;//для загальної суми

//   for (let num of args) {// проходимось по всіх переданих числах
//     if (num > value) {//Якщо число більше, ніж value
//       totalSum += num;// Додаємо його до totalSum
//     }
//   }

//   return totalSum;
// }

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };

// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

// const fourth = { ...second, ...first };
// console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }
