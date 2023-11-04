// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0 ,2)
}
// Code your solution in this file!

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(- 2);   
}
// Code your solution in this file!
const selectingDrivers = [returnFirstTwoDrivers , returnLastTwoDrivers]

// Code your solution in this file!

const createFareMultiplier = function(int) {
    return function (fare) {
        return int * fare 
    }
}
// Code your solution in this file!

const fareDoubler = function(fare) {
    return fare * 2
}

// Code your solution in this file!

const fareTripler = function (fare) {
    return fare *3
}

// Code your solution in this file!
const selectDifferentDrivers = function(arrayOfDrivers, yes) {
    return yes(arrayOfDrivers)
}
selectDifferentDrivers()