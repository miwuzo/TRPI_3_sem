// // // 1
// const productSet = new Set();

// // Функция для добавления товара в список
// function addProduct(product) {
//   productSet.add(product);
//   console.log(`Товар "${product}" добавлен.`);
// }

// // Функция для удаления товара из списка
// function removeProduct(product) {
//   if (productSet.has(product)) {
//     productSet.delete(product);
//     console.log(`Товар "${product}" удален.`);
//   } else {
//     console.log(`Товар "${product}" не найден в списке.`);
//   }
// }

// // Функция для проверки наличия товара в списке
// function hasProduct(product) {
//   return productSet.has(product);
// }

// // Функция для определения количества имеющегося товара
// function getProductCount() {
//   return productSet.size;
// }

// // Пример использования функций
// addProduct("Мышка");
// addProduct("Клавиатура");
// addProduct("Монитор");

// console.log("Текущий список товаров:", Array.from(productSet));

// removeProduct("Мышка");
// console.log("Текущий список товаров:", Array.from(productSet));

// console.log(`Наличие товара "Клавиатура": ${hasProduct("Клавиатура")}`);
// console.log(`Наличие товара "Мышка": ${hasProduct("Мышка")}`);

// console.log(`Количество товаров в списке: ${getProductCount()}`);

/////////////////////////////////////////////////////////////

// const studentSet = new Set();

// function addStudent(student) {
//   studentSet.add(student);
// }

// function otchislyator(studentId) {
//   studentSet.forEach((student) => {
//     if (student.studentId === studentId) {
//       studentSet.delete(student);
//     }
//   });
// }

// function filterStudentsByGroup(group) {
//   const filteredStudents = new Set();
//   studentSet.forEach((student) => {
//     if (student.group === group) {
//       filteredStudents.add(student);
//     }
//   });
//   return filteredStudents;
// }

// function sortStudentsByStudentId() {
//   const sortedStudents = Array.from(studentSet);
//   sortedStudents.sort((a, b) => a.studentId - b.studentId);
//   return sortedStudents;
// }

// const student1 = { studentId: 120939, group: 4, name: "Student First" };
// const student2 = { studentId: 456, group: 5, name: "Jane Smith" };
// const student3 = { studentId: 789, group: 5, name: "Bob Johnson" };
// const student4 = { studentId: 4308, group: 4, name: "Student Second" };

// addStudent(student1);
// addStudent(student2);
// addStudent(student3);
// addStudent(student4);

// console.log("Количество студентов: " + studentSet.size);

// otchislyator(456);
// console.log("Количество студентов после отчисления: " + studentSet.size);

// const groupAStudents = filterStudentsByGroup(4);
// console.log("Количество студентов в 4 группе: " + groupAStudents.size);

// const sortedStudents = sortStudentsByStudentId();
// console.log(sortedStudents);

// ////////////////////////////////////////////////////////////////////////////////////////
// const productStore = new Map();

// function addProductmap(id, name, quantity, price) {
//   if (!productStore.has(id)) {
//     productStore.set(id, { name, quantity, price });
//   } else {
//     const existingProduct = productStore.get(id);
//     existingProduct.name = name;
//     existingProduct.quantity = quantity;
//     existingProduct.price = price;
//   }
// }

// function deleteProductById(id) {
//   productStore.delete(id);
// }

// function removeProductsByName(name) {
//   for (const [id, product] of productStore) {
//     if (product.name === name) {
//       productStore.delete(id);
//     }
//   }
// }

// function updateQuantity(id, newQuantity) {
//   if (productStore.has(id)) {
//     productStore.get(id).quantity = newQuantity;
//   }
// }

// function updatePrice(id, newPrice) {
//   if (productStore.has(id)) {
//     productStore.get(id).price = newPrice;
//   }
// }

// function countItems() {
//   return productStore.size;
// }

// function calculateTotalPrice() {
//   let total = 0;
//   for (const product of productStore.values()) {
//     total += product.quantity * product.price;
//   }
//   return total;
// }

// // Пример использования функций
// addProductmap(1, "Apple", 10, 1.5);
// addProductmap(2, "Banana", 15, 0.75);
// addProductmap(3, "Orange", 12, 2.0);

// console.log("Текущее количество различных товаров:", countItems());

// updateQuantity(2, 20);
// console.log("Новое количество товара 'Banana':", productStore.get(2).quantity);

// updatePrice(3, 2.5);
// console.log("Новая цена товара 'Orange':", productStore.get(3).price);

// removeProductsByName("Banana");
// console.log("Товар 'Banana' удален. Текущее количество товаров:", countItems());

// console.log("Общая стоимость товаров в магазине:", calculateTotalPrice());



// задание 4
let cache = new WeakMap();

function expensiveFunction(input) {
  if (cache.has(input)) {
    console.log("Взято из кэша");
    return cache.get(input);
  }

  const result = input.key * 2;
  cache.set(input, result);

  return result;
}

const input1 = {key: 5};
const input2 = {key: 10};

console.log(expensiveFunction(input1)); 
console.log(expensiveFunction(input1)); 

console.log(expensiveFunction(input2)); 
console.log(expensiveFunction(input2));