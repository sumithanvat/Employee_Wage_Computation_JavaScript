//UC5: Employee Wage per Month

const workingDays = 20;
const wagePerHour = 20;
var employeeHour;

let attendance = Math.floor(Math.random()*3);

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
        break
}
let dailyEmployeeWage = employeeHour * wagePerHour;
let empWagePerMonth = dailyEmployeeWage * workingDays;
console.log("Employee Daily Wage : "+dailyEmployeeWage);
console.log("Employee Wage per Month : "+empWagePerMonth);



