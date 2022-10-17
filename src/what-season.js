const { NotImplementedError } = require('../extensions/index.js');
const { expect, assert } = require('chai');

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
  console.log(date, typeof (date))
  if (typeof (date) == 'number') {
    throw new Error('Invalid date!')   
  }
  if (date == Date.prototype.toString.call(new Date())) {
    throw new Error('Invalid date!') 
  }
  if (date == undefined) {
    return "Unable to determine the time of year!"
  } 
  let thisdate = new Date(date);
  let month = thisdate.getMonth();
  switch (month) {
    case 0: case 1: case 11:
      return 'winter'
      break;
    case 2: case 3: case 4:
      return 'spring'
      break;
    case 5: case 6: case 7:
      return "summer"
      break;
    case 8: case 9: case 10:
      return "fall"
      break;
    }
    
    
    if (Object.prototype.toString.call(date) !== '[object Date]') {
      // console.log(`ERROR: ${date}`)
      // throw 'Invalid date!'
      throw new Error('Invalid date!')
    }
    
    // console.log(date)
  }
  
// getSeason(new Date(2019, 11, 22, 23, 45, 11, 500))
// getSeason(20192701)

// getSeason('foo'),
// getSeason({ John: 'Smith' }),
// getSeason(20192701)
// getSeason([2019, '27', 0 + '1']),
// try{
  // getSeason(20192701)
// }
// catch (err) {
//   console.log('ERR' + err.message)
//   assert.strictEqual(err.message, err.message);
//   assert.strictEqual(err.message, 'Invalid date!');
// }

// assert.strictEqual('a','a')

// assert.strictEqual(() => new Date(), 'Invalid date!');

module.exports = {
  getSeason
};
