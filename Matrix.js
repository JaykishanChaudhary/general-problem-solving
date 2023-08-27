// Problem 
// Greater than and less than in a matrix

// Detect values in a matrix that is greater than or equal to every element in its row and less than or equal to every element in its column.
// So say you have a matrix-like so:
//     1  2  3
//   |---------
// 1 | 7  8  7
// 2 | 5  4  2    value at column 1, row 2, with 5 (Ans)
// 3 | 8  6  7
// A matrix may have zero or more values like these which are greater than or equal and less than or equal.
// Your code should be able to provide a list of all the values for any given matrix. If no values are found it should return an empty list.
// The matrix can have a different number of rows and columns (Non-square matrix).


// ----------------------------------------------------------------------------------------------------

// Solutions : 


// Brute Force Approach -  O(n * m) * O(n + m) Time Complexity

function CheckMatrixBrute(matrix){
    let Res=[];
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            let rowCount=0;
            let ColumnCount=0;
            for(let k=0;k<matrix[i].length;k++){
                if(matrix[i][j]>=matrix[i][k]){
                    rowCount++;
                }
            }
            for(let k=0;k<matrix.length;k++){
                if(matrix[i][j]<=matrix[k][j]){
                    ColumnCount++;
                }
            }
            if((rowCount==matrix[i].length)&&(ColumnCount==matrix.length)){
                Res.push(matrix[i][j]);
            }
        }
    }
    return Res
}


// Time Efficient Approach - O(n * m) Time Complexity

function CheckMatrixBetter(matrix){
    ithRowMaxArray = Array(matrix.length).fill(-Infinity);
    jthColumnMinArray = Array(matrix[0].length).fill(+Infinity);
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            if (ithRowMaxArray[i] < matrix[i][j]) {
                ithRowMaxArray[i] = matrix[i][j]
            }
            if (jthColumnMinArray[j] > matrix[i][j]) {
                jthColumnMinArray[j] = matrix[i][j]
            }
        }
    }

    let Res=[];
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            if ((ithRowMaxArray[i] == matrix[i][j]) && (jthColumnMinArray[j] == matrix[i][j])) {
                Res.push(matrix[i][j]);
            }
        }
    }
    
    return Res
}



let matrix=[[7,8,7],[5,4,2],[8 ,6,7]]

console.log(CheckMatrixBrute(matrix));
console.log(CheckMatrixBetter(matrix));