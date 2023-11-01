/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  var categoryOfTrans = {};

  transactions.forEach(trans => {
    if (categoryOfTrans[trans.category] === undefined) {
      categoryOfTrans[trans.category] = trans.price;
    } else {
      categoryOfTrans[trans.category] += trans.price;
    }
  });

  // Create an array of objects to represent the total spent by category
  var result = [];
  for (var category in categoryOfTrans) {
    result.push({ "category": category, "totalSpent": categoryOfTrans[category] });
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;

