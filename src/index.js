
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let newArr = [];
    if(!matrix) {return newArr}
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j <= i; j++) {
            if(!newArr.includes(matrix[i])) {
                if(i % 2 == 1) {
                    newArr.push(matrix[i].reverse())
                } else {newArr.push(matrix[i])}
             }
        }
    }
    return newArr.flat()
}
