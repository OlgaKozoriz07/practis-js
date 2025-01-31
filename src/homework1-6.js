/*------------------------HOMEWORK 1----------------------------------/*

/* 
? Оголоси функцію makeTransaction, яка очікує два параметри,
? значення яких будуть задаватися під час її виклику: 
? • quantity— перший параметр, число, що містить кількість замовлених дроїдів 
? • pricePerDroid — другий параметр, число, що містить вартість одного дроїда

? Доповни код функції так, щоб вона повертала рядок з повідомленням про покупку ремонтних дроїдів: "You ordered <quantity> droids worth <totalPrice> credits!", 
? де: • <quantity> — це кількість замовлених дроїдів 
? • <totalPrice> — це загальна вартість замовлення, тобто вартість усіх замовлених дроїдів
*/

// function makeTransaction(quantity, pricePerDroid) {
//   const totalPrice = quantity * pricePerDroid;
//   return `You order ${quantity} droids worth ${totalPrice} credits!`;
// }

// console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"

/*
? Оголоси функцію getShippingMessage, яка очікує три параметри, 
? значення яких будуть задаватися під час її виклику: 
? • country — перший параметр, рядок, що містить країну доставки 
? • price — другий параметр, число, що містить загальну вартість товару 
? • deliveryFee — третій параметр, число, що містить вартість доставки товару

? Доповни код функції так, щоб вона повертала рядок з повідомленням про доставку товару в країну користувача: "Shipping to <country> will cost <totalPrice> credits", 
? де: • <country> — це країни доставки 
? • <totalPrice> — це загальна вартість замовлення, що включає вартість товару і його доставки
*/

// function getShippingMessage(country, price, deliveryFee) {
//   let totalPrice = price + deliveryFee;
//   return `Shipping to ${country} will cost ${totalPrice} credits`;
// }

// console.log(getShippingMessage('Australia', 120, 50)); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingMessage('Germany', 80, 20)); // "Shipping to Germany will cost 100 credits"
// console.log(getShippingMessage('Sweden', 100, 20)); // "Shipping to Sweden will cost 120 credits"

/*
? Оголоси функцію getElementWidth, яка очікує три параметри, значення яких будуть задаватися під час її виклику: 
? • content— перший параметр, ширина контенту 
? • padding — другий параметр, значення горизонтального падінгу для кожної зі сторін 
? • border — третій параметр, значення товщини бордера для кожної зі сторін 
? Значення всіх параметрів будуть рядками формату Npx де N — це довільне число, ціле або дробове.

? Доповни код функції так, щоб вона повертала число —загальну ширину елемента. 
? При розрахунку загальної ширини орієнтуйся на те, що значення box-sizing дорівнює border-box.
*/

// function getElementWidth(content, padding, border) {
//   content = Number.parseFloat(content);
//   padding = Number.parseFloat(padding);
//   border = Number.parseFloat(border);
//   const result = content + padding * 2 + border * 2;
//   return result;
// }

// console.log(getElementWidth('50px', '8px', '4px')); // 74
// console.log(getElementWidth('60px', '12px', '8.5px')); // 101
// console.log(getElementWidth('200px', '0px', '0px')); // 200

/* --------------HOMEWORK 2------------------------*/

/*
? Станція з продажу ремонтних дроїдів готова до запуску, залишилося написати програмне забезпечення для відділу продажів. Оголоси функцію makeTransaction(quantity, pricePerDroid, customerCredits), яка складає та повертає повідомлення про купівлю ремонтних дроїдів.
? Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:

? quantity — кількість замовлених дроїдів
? pricePerDroid — ціна одного дроїда
? customerCredits — сума коштів на рахунку клієнта

? Доповни функцію таким чином:

? Оголоси змінну для зберігання загальної суми замовлення (загальна вартість усіх замовлених дроїдів) 
? і задай їй вираз розрахунку цієї суми.
? Додай перевірку, чи зможе клієнт оплатити замовлення:
? якщо сума до сплати перевищує кількість кредитів на рахунку клієнта, функція має повертати рядок "Insufficient funds!"
? в іншому випадку функція має повертати рядок "You ordered <quantity> droids worth <totalPrice> credits!", де <quantity> це кількість замовлених дроїдів, а <totalPrice> це їх загальна вартість.

*/

// function makeTransaction(quantity, pricePerDroid, customerCredits) {
//   const totalPrice = pricePerDroid * quantity;
//   if (totalPrice > customerCredits) {
//     return 'Insufficient funds!';
//   } else {
//     return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
//   }
// }

// console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
// console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
// console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"

/*
? Оголоси функцію formatMessage(message, maxLength), яка приймає рядок (параметр message) та перевіряє його  довжину відповідно до заданої максимальної довжини (параметр maxLength).
? Доповни код функції таким чином, що:

? Якщо довжина рядка дорівнює або менша за maxLength, то функція повертає початковий рядок без змін.
? Якщо довжина перевищує maxLength, то функція обрізає рядок до maxLength символів, 
? додає трикрапку "..." в кінці та повертає обрізану версію.

*/

// function formatMessage(message, maxLength) {
//   return message.length <= maxLength
//     ? message
//     : message.slice(0, maxLength) + '...';
// }

// function formatMessage(message, maxLength) {
//   if (message.length > maxLength) {
//     return message.slice(0, maxLength) + '...';
//   } else {
//     return message;
//   }
// }

// console.log(formatMessage('Curabitur ligula sapien', 16)); // "Curabitur ligula..."
// console.log(formatMessage('Curabitur ligula sapien', 23)); // "Curabitur ligula sapien"
// console.log(formatMessage('Vestibulum facilisis purus nec', 20)); // "Vestibulum facilisis..."
// console.log(formatMessage('Vestibulum facilisis purus nec', 30)); // "Vestibulum facilisis purus nec"
// console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 15)); // "Nunc sed turpis..."
// console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 41)); // "Nunc sed turpis a felis in nunc fringilla"

/*
? Функція checkForSpam(message) приймає рядок (параметр message), 
? перевіряє його на вміст заборонених слів spam і sale, і повертає результат перевірки. 
? Слова в рядку параметра message можуть бути в довільному регістрі, наприклад SPAM або sAlE.
? Доповни код функції таким чином, що:

? Якщо знайдено заборонене слово (spam або sale), то функція повертає буль true
? Якщо в рядку відсутні заборонені слова, функція повертає буль false

*/

// function checkForSpam(message) {
//   let word1 = 'spam';
//   let word2 = 'sale';

//   const forbiddenWords =
//     message.toLowerCase().includes(word1.toLowerCase()) ||
//     message.toLowerCase().includes(word2.toLowerCase());
//   return forbiddenWords;
// }

// console.log(checkForSpam('Latest technology news')); // false
// console.log(checkForSpam('JavaScript weekly newsletter')); // false
// console.log(checkForSpam('Get best sale offers now!')); // true
// console.log(checkForSpam('Amazing SalE, only tonight!')); // true
// console.log(checkForSpam('Trust me, this is not a spam message')); // true
// console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!')); // true
// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

/*
? Оголоси функцію getShippingCost(country), 
? яка повинна перевіряти можливість доставки товару в країну користувача (параметр country) 
? і повертати повідомлення про результат. Обов'язково використовуй інструкцію switch.

? Формат рядка, що повертається "Shipping to <country> will cost <price> credits", 
? де замість <country> і <price> необхідно підставити відповідні значення.

? Список країн і вартість доставки:
? China — 100 кредитів
? Chile — 250 кредитів
? Australia — 170 кредитів
? Jamaica — 120 кредитів

? Зі списку видно, що доставка можлива не скрізь. Якщо зазначена країна відсутня у списку, то функція повинна повернути рядок "Sorry, there is no delivery to your country".

*/

// function getShippingCost(country) {
//   let price;
//   switch (country) {
//     case 'China':
//       price = 100;
//       return `Shipping to ${country} will cost ${price} credits`;
//     case 'Chile':
//       price = 250;
//       return `Shipping to ${country} will cost ${price} credits`;
//     case 'Australia':
//       price = 170;
//       return `Shipping to ${country} will cost ${price} credits`;
//     case 'Jamaica':
//       price = 120;
//       return `Shipping to ${country} will cost ${price} credits`;
//     default:
//       return 'Sorry, there is no delivery to your country';
//   }
// }

// console.log(getShippingCost('Australia')); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingCost('Germany')); // "Sorry, there is no delivery to your country"
// console.log(getShippingCost('China')); // "Shipping to China will cost 100 credits"
// console.log(getShippingCost('Chile')); // "Shipping to Chile will cost 250 credits"
// console.log(getShippingCost('Jamaica')); // "Shipping to Jamaica will cost 120 credits"
// console.log(getShippingCost('Sweden')); // "Sorry, there is no delivery to your country"

/*----------------------HOMEWORK 3----------------------------*/

/*
? Напиши функцію slugify(title), яка приймає заголовок статті, 
? параметр title і повертає slug, створений із цього рядка.

? Значенням параметра title будуть рядки, слова яких розділені лише пробілами.
? Усі символи slug повинні бути в нижньому регістрі.
? Усі слова slug повинні бути розділені тире.
*/

// function slugify(title) {
//   const slug = title
//     .toLowerCase()
//     .split(' ')
//     .join('-')
//     .replace((/\s+/g, ' ')); //замінює кілька пробілів на один, щоб уникнути випадків із зайвими пробілами.
//   return slug;
// }

// console.log(slugify('Arrays for beginners')); // "arrays-for-beginners"
// console.log(slugify('English for developer')); // "english-for-developer"
// console.log(slugify('Ten secrets of JavaScript')); // "ten-secrets-of-javascript"
// console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')); // "how-to-become-a-junior-developer-in-two-weeks"

/*
? Напиши функцію під назвою makeArray, яка приймає три параметри: 
? firstArray (масив), secondArray (масив) і maxLength (число). 
? Функція повинна створювати новий масив, який містить усі елементи з firstArray, а потім усі елементи з secondArray.

? Якщо к-сть елементів у новому масиві перевищує maxLength, 
? функція повинна повернути копію масиву з довжиною maxLength елементів.
? В іншому випадку функція повинна повернути весь новий масив.
*/

// function makeArray(firstArray, secondArray, maxLength) {
//   const newArray = firstArray.concat(secondArray);
//   if (newArray.length >= maxLength) {
//     return newArray.slice(0, maxLength);
//   } else {
//     return newArray;
//   }
// }

// console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)); // ["Mango", "Poly", "Ajax"]
// console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3)); // ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2)); // ["Earth", "Jupiter"]
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)); // []

/*
? Напиши функцію filterArray(numbers, value), 
? яка приймає масив чисел (numbers) та значення (value) як параметри. 
? Функція повинна повертати новий масив лише тих чисел із масиву numbers, які більші за значення value.
? Усередині функції:

? Створи порожній масив, у який будеш додавати підходящі числа.
? Використай цикл для ітерації кожного елемента масиву numbers.
? Використовуй умовний оператор if усередині циклу для перевірки кожного елемента i додавання до свого масиву.
? Поверни свій новий масив з підходящими числами як результат.
*/

// function filterArray(numbers, value) {
//   const arrayOfNumbers = []; // Створюємо порожній масив для результату
//   for (let i = 0; i < numbers.length; i++) {
// Перебираємо всі елементи масиву
//     if (numbers[i] > value) {
// Якщо елемент більше value
//       arrayOfNumbers.push(numbers[i]); // Додаємо його до нового масиву
//     }
//   }
//   return arrayOfNumbers; // Повертаємо масив із підходящими числами
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

/*--------------------HOMEWORK 4----------------*/
