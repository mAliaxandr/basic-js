const CustomError = require("../extensions/custom-error");

module.exports = function countCats(array) {
  const arr = array;
            let count = 0;
            arr.forEach( i => {
                i.forEach( k => {
                    if ( k == "^^") {
                        count = count + 1;
                    }
                })
            })
            return count;
};
