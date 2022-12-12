// Your code here
// let employeesArr =[["Clare", "Moesha", "Ms", 40], ["David", "Mwigai", "Mr", 50], ["Denzel", "Moses", "Mr", 50]];

// let newRec = [
//     {
//     firstName: 'Clare',
//     familyName: 'Moesha',
//     title: 'Ms',
//     payPerHour: 40,
//     timeInEvents: [
//         {
//             type: 'TimeIn',
//             hour: 847,
//             date: '2022-12-12'
//         },
//         {
//             type: 'TimeIn',
//             hour: 1147,
//             date: '2022-10-12'
//         }
//         ],
//     timeOutEvents: [
//         {
//             type: 'TimeOut',
//             hour: 1578,
//             date: '2022-12-12'
//         },
//          {
//             type: 'TimeOut',
//             hour: 1578,
//             date: '2022-10-12'
//         },
//         ]
//     },
//     {
//     firstName: 'Ella',
//     familyName: 'Milly',
//     title: 'Ms',
//     payPerHour: 40,
//     timeInEvents: [
//         {
//             type: 'TimeIn',
//             hour: '847',
//             date: '2022-12-12'
//         },
//         {
//             type: 'TimeIn',
//             hour: '1147',
//             date: '2022-10-12'
//         }
//         ],
//     timeOutEvents: [
//         {
//             type: 'TimeOut',
//             hour: '1578',
//             date: '2022-12-12'
//         },
//          {
//             type: 'TimeOut',
//             hour: '1578',
//             date: '2022-10-12'
//         },
//         ]
//     }
// ];

function createEmployeeRecord(arr){
    let arroObj = {
        firstName:arr[0],
        familyName:arr[1],
        title: arr[2],
        payPerHour:arr[3],
        timeInEvents:[],
        timeOutEvents:[],
    }
return arroObj
}
// console.log(createEmployeeRecord(employeesArr[0]))

function createEmployeeRecords(employeesArr){
    let newArrObj= [];
    employeesArr.forEach(employee=>{
        let newObj = createEmployeeRecord(employee);
        newArrObj.push(newObj)
    })
    return newArrObj
}
// console.log(createEmployeeRecords(employeesArr))

function createTimeInEvent(obj, date){
    let dateSplit = date.split(' ')
    let addTimeIn ={
        type:"TimeIn",
        hour:parseInt(dateSplit[1], 10),
        date:dateSplit[0],
    }
obj.timeInEvents.push(addTimeIn)
return obj

}
// console.log(createTimeInEvent(newRec[0], "2022-08-12 800"))

function createTimeOutEvent(obj, date){
    let dateSplit = date.split(' ')
    let addTimeOut ={
        type:"TimeOut",
        hour:parseInt(dateSplit[1], 10),
        date:dateSplit[0],
    }
obj.timeOutEvents.push(addTimeOut);
return obj;
}
// console.log(createTimeOutEvent(newRec[0], "2021-07-12 1800"))


function hoursWorkedOnDate(obj, selectDate){
let timeInEventsArr = obj.timeInEvents;
let timeOutEventsArr = obj.timeOutEvents;
let dayTimeIn;
let dayTimeOut;
timeInEventsArr.map(item =>{
 if (item.date === selectDate){
        dayTimeIn= item.hour;
    }
})
timeOutEventsArr.map(item =>{
 if (item.date === selectDate){
        dayTimeOut= item.hour;
    }
})
let hoursWorked = Math.floor((dayTimeOut-dayTimeIn)/100)
return hoursWorked
}
// console.log(hoursWorkedOnDate(newRec[0], "2022-10-12"))
function wagesEarnedOnDate(obj, selectDate){
    let hours = hoursWorkedOnDate(obj, selectDate);
    let wages = hours*obj.payPerHour;
    return wages;
}
// console.log(wagesEarnedOnDate(newRec[0], '2022-12-12'))

function allWagesFor(obj){
let timeInEventsArr = obj.timeInEvents;
let timeOutEventsArr = obj.timeOutEvents
let total = 0;
timeInEventsArr.map(item=>{
    timeOutEventsArr.map(item2=>{
                 if(item.date === item2.date){

                let wages = Math.floor(((item2.hour-item.hour)/100)*obj.payPerHour)
                total+=wages
            }
    })
})
return total
}
// console.log(allWagesFor(newRec[0]))

function calculatePayroll(arr){
let eachWage = []
arr.map(obj=>{
    let x = allWagesFor(obj);
    eachWage.push(x);
})
let totalWages = eachWage.reduce((accum, item)=>{    
return accum + item;
})
return totalWages
}
// console.log(calculatePayroll(newRec))
