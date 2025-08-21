// 1 задание
// В следующем коде несколько раз повторяются похожие операции. Проведите рефакторинг, чтобы избежать дублирования,
// используя функции или другие средства:
/*
const product1 = { name: 'Product 1', price: 10 };
const product2 = { name: 'Product 2', price: 20 };
const total1 = product1.price * 1.2;
const total2 = product2.price * 1.2;
console.log('Total for Product 1:', total1);
console.log('Total for Product 2:', total2);
*/

const products = [
{ name: 'Product 1', price: 10 },
{ name: 'Product 2', price: 20 }
];
function calculateTotal (product, multiply = 1.2) {
  return product.price * multiply;
}

products.forEach(product => {
  console.log('Total for ${product.name}:', calculateTotal(product))
});


// 2 задание
// Код ниже содержит сложные вложенные условия. Упростите его, чтобы улучшить читаемость и уменьшить вероятность ошибок:
/*
if (user.isAdmin) {
  if (user.isActive) {
    if (user.age > 18) {
      console.log('Access granted');
    }
  }
}
*/

if (user.isAdmin && user.isActive && user.age > 18) {
      console.log('Access granted');
    }

// 3 задание
// В следующей функции выполняется слишком много операций. Разделите её на несколько более коротких функций,
// чтобы улучшить читаемость и повторное использование кода:
/*
function checkStock(item) {
  return Math.random() < 0.5; // Возвращает рандомно true или false, это просто иммитация функции!
}
function processOrder(order) {
  // Валидация данных заказа
  if (!order.id || !order.items || order.items.length === 0) {
    console.log('Invalid order');
    return;
  }
  // Рассчет суммы
  let total = 0;
  for (let item of order.items) {
    total += item.price * item.quantity;
  }
  // Проверка наличия на складе
  for (let item of order.items) {
    if (!checkStock(item)) {
      console.log('Item out of stock:', item.name);
      return;
    }
  }
  // Выполнение заказа
  console.log('Order processed with total:', total);
}
*/


function checkStock(item) {
  return Math.random() < 0.5; // Возвращает рандомно true или false, это просто иммитация функции!
}

// Валидация данных заказа
function validateOrder(order) {
  return order.id && order.items && order.items.length > 0;
} 

// Рассчет суммы
function calculateTotal(order) {
  return order.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}  
 
// Проверка наличия на складе
function isOrderInStock(order) {
  return order.items.every(item => checkStock(item));
}

function processOrder(order) {
  if (!validateOrder(order)) {
    console.log('Invalid order');
    return;
  }

  const total = calculateTotal(order);

  if (!isOrderInStock(order)) {
    console.log('Some items are out of stock');
    return;
  }

 // Выполнение заказа
  console.log('Order processed with total:', total);
}
