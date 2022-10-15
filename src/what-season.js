const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!arguments.length) return 'Unable to determine the time of year!';
  if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw new Error("Invalid date!");
  }

  if (Object.getOwnPropertyNames(date).length) {
    throw new Error("Invalid date!");
  }
  const seasons = {
    'winter': [12, 1, 2],
    'spring': [3, 4, 5],
    'summer': [6, 7, 8],
    'autumn': [9, 10, 11]
  }
  let month = date.getMonth() + 1;
  for (let season in seasons) {
    if (seasons[season].find(item => item === month)) return season;
  }
}

module.exports = {
  getSeason
};
