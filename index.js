// Code your solution in this file!
const logDriverNames = function(array) {
  for (const driver of array) {
    console.log(driver.name);
  }
}

const logDriversByHometown = function(array, location) {
  for (const driver of array) {
    if (driver.hometown == location) {
      console.log(driver.name);
    }
  }
}

const driversByRevenue = function(array) {
  const arrayCopy = [...array];
  return arrayCopy.sort(function (a, b) {
    return a.revenue - b.revenue;
  });
}

const driversByName = function(array) {
  const arrayCopy = [...array];
  return arrayCopy.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
}

const totalRevenue = function(array) {
  return array.reduce(function(agg, el, i, arr), 0) {
    if (i === arr.length - 1) {
      agg += el.revenue;
    }
    return agg
  }
}
