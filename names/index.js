let getPeopleINames = require("../country/state/city/index.js");
let getFirstNames = require("../utilities/utils/index.js");

const getPeopleInCity = (getPeopleINames) => {
  return getFirstNames(getPeopleINames);
};
module.exports = getPeopleInCity;
