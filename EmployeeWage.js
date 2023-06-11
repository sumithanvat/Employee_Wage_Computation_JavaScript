
//UC6: Calculate Wages till a condition of total working hours or days is reached for a month

const workingDays = 20;
const wagePerHour = 20;
const maxWorkingHours = 100;
var empWagePerMonth = 0;
var workingHour = 0;
var employeeHour;
var day = 1;

while (day <= workingDays && workingHour <= maxWorkingHours) {
    
let attendance = Math.floor(Math.random()*3);
console.log("Day :"+day);
    switch(attendance) {
        case 0 :
            console.log("Employee is Absent");
            employeeHour = 0;     
            break;
        case 1 :
            console.log("Employee is Present");
            employeeHour = 8;
            break;
        case 2 :
            console.log("Employee is Part-Time");
            employeeHour = 4;
            break;
        default:
            console.log("Invalid");
            break;
    }
    day++;
    let dailyEmployeeWage = employeeHour * wagePerHour;
    empWagePerMonth += dailyEmployeeWage ;
    console.log("Employee Daily Wage : "+dailyEmployeeWage);
}
console.log("Employee Wage per Month : "+empWagePerMonth);

