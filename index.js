// Code your solution in this file!
/*jshint esversion: 6 */

const logDriverNames = drivers => {
  drivers.forEach(driver => {
    console.log(driver.name);
  });
};

const logDriversByHometown = (drivers, hometown) => {
  drivers.forEach(driver => {
    if (driver.hometown === hometown) {
      console.log(driver.name);
    }
  });
};

const driversByRevenue = (drivers) => {
  return drivers.slice().sort((first, second) => {
    return first.revenue - second.revenue;
  });
};

const driversByName = (drivers) => {
  return drivers.slice().sort((first, second) => {
    return first.name.localeCompare(second.name);
  });
};

const totalRevenue = (drivers) => {
  return drivers.reduce((total, driver) => {
    return driver.revenue + total;
  }, 0);
};

const averageRevenue = (drivers) => {
  return totalRevenue(drivers) / drivers.length;
};
