export function getTimeLeft(hours, minutes) {
  // Create a Date object for the current time
  const now = new Date();

  // Create a Date object for the specified time today
  const targetTime = new Date(now);
  targetTime.setHours(hours);
  targetTime.setMinutes(minutes);
  targetTime.setSeconds(0);
  targetTime.setMilliseconds(0);

  // Calculate the time difference in milliseconds
  let timeDiff = targetTime.getTime() - now.getTime();

  // If the specified time is before the current time, adjust to the next day
  if (timeDiff < 0) {
    targetTime.setDate(targetTime.getDate() + 1);
    timeDiff = targetTime.getTime() - now.getTime();
  }

  // Calculate hours and minutes left
  const hoursLeft = Math.floor(timeDiff / (1000 * 60 * 60));
  const minutesLeft = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

  // Return an object representing the time left
  return { hours: hoursLeft, minutes: minutesLeft };
}

// Example usage:
// const timeLeft = getTimeLeft(17, 10); // Calculate time left until 5:10 PM
// console.log(timeLeft); // Output the time left
