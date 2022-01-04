const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );


//Loop over employee array
  //pass employee to a function to calculate bonus
  //return the new object

  function calculateBonus(employee) {
    let compensation = {};
    compensation.name = employee.name;
    
    //run through ratings of the employee
    let ratingBonus = 0;
    if (employee.reviewRating <= 2 ){
      ratingBonus = 0;
    }if (employee.reviewRating === 3 ){
      ratingBonus = .04;
    }if (employee.reviewRating === 4){
      ratingBonus = .06;
    }if (employee.reviewRating === 5){
      ratingBonus = .1;
    }
    //if employee.employeeNumber is 4 digits long, add 5%
    let digitBonus = 0;
    if(employee.employeeNumber >= 1000 && employee.employeeNumber < 10000){
      digitBonus = .05;
    }
    // if employee.annualSalary is greater than 65k, subtract 1%
    let salaryPenalty = 0;
    if(employee.annualSalary > 65000){
       salaryPenalty = .01;
    }
    //calculate bonusPercentage (ratingBonus + digitBonus - salaryPenalty)
    console.log(`rating bonus: ${ratingBonus}
    digit bonus: ${digitBonus}
    sub penalty: ${salaryPenalty}`);
    let bonusPercentage = ratingBonus + digitBonus - salaryPenalty;
    // if bonusPercentage is above 13%, reduce it to 13%
    if (bonusPercentage > .13){
      bonusPercentage = .13;
    }
    // if bonusPercentage is below 0%, increase it to 0
    if (bonusPercentage < 0){
      bonusPercentage = 0;
    }

    
    // add totalBonus to the compensation object as bonusPercentage
    compensation.bonusPercentage = bonusPercentage;

    // add totalBonus (annualSalary * bonusPercentage) to the object
    let totalBonus = Math.round(employee.annualSalary * bonusPercentage);
    compensation.totalBonus = totalBonus;

    // add totalCompensation (annualSalary(as a Number, not string) + totalBonus) to the object
    const totalCompensation = parseInt(employee.annualSalary, 10) + totalBonus;
    compensation.totalCompensation = totalCompensation;

    return compensation;
  }
/*
  $( document ).ready(function() {
    console.log("jQuery is ready!");
    
    $('#bonusButton').on('click', function ) {
      console.log("The button was clicked");
      for (let i=0; i<employees.length; i++){
        console.log(calculateBonus(employees[i]));
        //append the list here?
      }
    });
    
  });*/

$( document ).ready( buttonPressed ); // Start here when Doc is ready move to function buttonPressed

function buttonPressed( ){
  console.log('in buttonPressed');
  $( '#bonusButton').on('click', addingData );
}//end function
//when button is clicked, move to function addingData

function addingData () {
  console.log("Button pressed!");
  let el = $( '#bonusList');
  el.empty();
  for (let i=0; i<employees.length; i++){
    let bonus = calculateBonus(employees[i]);
    //add bonuses to our list
    el.append(`<li>Name: ${bonus.name}`);
    el.append(` Total Bonus: ${bonus.totalBonus} `);
    el.append(` | Total Compensation: ${bonus.totalCompensation} `);
    el.append(` | Bonus Percentage: ${bonus.bonusPercentage}</li>`);
  }
}