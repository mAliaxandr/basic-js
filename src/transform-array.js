const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
  // throw new CustomError('Not implemented');
  const array = arr;
            let arrRes = [];
            array.forEach((i, index) => {
                if (i === '--double-next') {
                    if (array[index + 1]) {
                        arrRes.push(array[index + 1]);
                    } 
                } else if (i === '--double-prev') {
                    if (array[index - 1]) {
                        if (array[index - 1] != '_x_') {
                            arrRes.push(array[index - 1]);
                        } 
                    }
                } else if (i === '--discard-next') {
                    array.splice(index+1,1,'_x_');
                } else if (i === '--discard-prev') {
                    if (arrRes[index -1] === array[index-1]) {
                        arrRes.pop()
                    }
                    
                } else {
                    if (i != '_x_') {
                        arrRes.push(i);
                    }
                }
                
                // console.log('i -- ', index);
            }) 
            return arrRes;
};
