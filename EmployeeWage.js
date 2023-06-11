console.log("Welcome to Employee Wage Computation Problem");
// UC1
let attendance = Math.floor(Math.random()*2);
if (attendance === 1){
    console.log("Employee is prasent");
}else {
    console.log("Employee is absent ")
}
// UC2

var wagePerHour = 20;
var fullDayHour = 8;

let dailyEmployeeWage = attendance * wagePerHour * fullDayHour;
if (attendance === 1) {
    console.log("Employee Wage per Day : "+dailyEmployeeWage);
}else {
    console.log("Employee Wage per Day : "+dailyEmployeeWage);
}