/*******************************************************************************
Your company is giving every employee earning less than $50,000 a 10% raise!

Write a function `employeeRaises(peopleObj)` that takes an array of objects
containing employee names and their salaries and returns an array containing
the employees that need raises, along with their new salaries.

Example:

employees = [
  { name: "Alice", salary: 80000 },
  { name: "Bob", salary: 40000 },
  { name: "Carol", salary: 60000 },
  { name: "Dan", salary: 70000 },
  { name: "Ellen", salary: 100000 },
];

console.log(employeeRaises(employees)); // [ { name: 'Bob', salary: 44000 } ]
*******************************************************************************/

function employeeRaises(employees) {
    let newArray = [];

    for(let i = 0; i < employees.length; i++){
      let employee = employees[i];
      let key = 'salary'
      let currentSalary = employee[key];
      if(currentSalary < 50000)
      {
        let newSalary = currentSalary * 1.10;
        employee[key] = newSalary;
        newArray.push(employee);
      }
    }

    return newArray;
  }

  // employees = [
  //   { name: "Alice", salary: 80000 },
  //   { name: "Bob", salary: 40000 },
  //   { name: "Carol", salary: 60000 },
  //   { name: "Dan", salary: 70000 },
  //   { name: "Ellen", salary: 100000 },
  // ];

  // console.log(employeeRaises(employees)); // [ { name: 'Bob', salary: 44000 } ]

  /*****************DO NOT MODIFY ANYTHING UNDER THIS LINE*********************/
  try {
    module.exports = employeeRaises;
  } catch (e) {
    module.exports = null;
  }
