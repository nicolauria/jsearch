// function borderSums(matrix) {
//     let result = [];
//     let topRow = 0;
//     let bottomRow = matrix.length - 1;
//     let leftCol = 0;
//     let rightCol = matrix.length - 1;
//
//     while (topRow < bottomRow) {
//         let total = matrix[topRow].slice(leftCol, rightCol + 1).reduce((acc, val) => acc + val);
//         total += matrix[bottomRow].slice(leftCol, rightCol + 1).reduce((acc, val) => acc + val);
//
//         for (let i = topRow + 1; i < bottomRow; i++) {
//             total += matrix[i][leftCol];
//             total += matrix[i][rightCol];
//         }
//
//         result.push(total);
//         total = 0;
//
//         topRow += 1;
//         bottomRow -= 1;
//         leftCol += 1;
//         rightCol -= 1;
//     }
//     return result;
// }
//
//
//
// let matrix = [[1,  2,  2,  3],
//               [0,  1,  0,  2],
//               [4, -1, -1, -3],
//               [4, -1, -1,  3]]
// console.log(borderSums(matrix));

function minimumGeneticMutation(startStr, endStr, bank) {
    let count = 0;
    while (true) {
        let found = false;
        for (let i = 0; i < 8; i++) {
            if (startStr[i] !== endStr[i]) {

                for (let j = 0; j < bank.length; j++) {
                    if (bank[j][i] === endStr[i] ) {

                        let temp = startStr.substring(0, i) + endStr[i] + startStr.substring(i+1);

                        if (bank.includes(temp)) {
                            count += 1;
                            found = true;
                            break;
                            startStr = temp;
                        }
                    }
                }

            }
        }
        if (!found) return -1;
        if (startStr === endStr) return count;
    }
}

console.log(minimumGeneticMutation("AACCGGTT", "AACCGGTA", ["AACCGGTA"]))
