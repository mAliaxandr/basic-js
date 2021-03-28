const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  // throw new CustomError('Not implemented');
  const d = date.getMonth();
  if (d === 0 || d === 1 || d === 11) {
    return 'winter'
  }
  if (d === 2 || d === 3 || d === 4) {
    return 'spring'
  }
  if (d === 5 || d === 6 || d === 7) {
    return 'summer'
  }
  if (d === 8 || d === 9 || d === 10) {
    return 'autumn'
  }
  
  console.log('date ------', date , d);
};
