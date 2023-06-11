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
var partTimeHour = 4;

let dailyEmployeeWage = attendance * wagePerHour * fullDayHour;
let partTimeWage = wagePerHour * partTimeHour;

if (attendance == 1) {
console.log("Employee Daily Wage : "+dailyEmployeeWage);
} else if (attendance == 0){
    console.log("Employee Daily Wage : "+dailyEmployeeWage);
} else {
    console.log("Employee Part-Time Wage : "+partTimeWage);
}
