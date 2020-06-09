const getMinGates = (landingTimes, takeOffTimes, maxWatiTime, initialPlanes) => {
  const terminals = {
    terminalsOccupied: initialPlanes,
    takeOffTimesIndex: 0,
    terminalsNeeded: initialPlanes,
  };

  if (takeOffTimes[terminals.takeOffTimesIndex] < landingTimes[0]) {
    for (terminals.takeOffTimesIndex; terminals.takeOffTimesIndex < takeOffTimes.length; terminals.takeOffTimesIndex += 1) {
      if (landingTimes[0] < takeOffTimes[terminals.takeOffTimesIndex]) {
        break;
      } else if (terminals.terminalsOccupied > 0) {
        terminals.terminalsOccupied -= 1;
      };
    };
  };

  landingTimes.forEach(el => {
    if (planeCanSit(el, takeOffTimes[terminals.takeOffTimesIndex], maxWatiTime) === false) {
      terminals.terminalsOccupied += 1;
      if (terminals.terminalsOccupied > terminals.terminalsNeeded) { terminals.terminalsNeeded = terminals.terminalsOccupied; };
      return;
    };
    terminals.takeOffTimesIndex += 1;
  });
  return terminals.terminalsNeeded;
};


const planeCanSit = (landing, takeoff, wait) => {
  const landingHour = Math.trunc(landing / 100);
  const takeoffHour = Math.trunc(takeoff / 100);
  const hourDiff = takeoffHour - landingHour;

  return hourDiff ? ((takeoff - landing) - (40 * hourDiff) < wait) : ((takeoff - landing) < wait);
};




const LandingTime = [630, 645, 730, 1100];
const TakeOffTimes = [700, 845, 1015, 1130];
const MaxWatiTime = 20;
const InitialPlanes = 1;

console.log(getMinGates(LandingTime, TakeOffTimes, MaxWatiTime, InitialPlanes));


