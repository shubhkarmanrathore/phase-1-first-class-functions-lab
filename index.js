const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers() {
    return drivers.slice(0,2)
}

function returnLastTwoDrivers() {
    return drivers.slice(2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare*multiplier
    }
}

function fareDoubler(fare) {
    const doubleFare = createFareMultiplier(2);
    return doubleFare(fare);
  }
 
  function fareTripler(fare) {
    const tripleFare = createFareMultiplier(3);
    return tripleFare(fare);
  }


function selectDifferentDrivers(arrayOfDrivers, driverSelectorFunction) {
    return driverSelectorFunction(arrayOfDrivers);
  }