import numpy as np;

matrix1 = np.array([
    [3,8,6],
    [1,2,2],
    [4,5,5]
]);

matrix2 = np.array([
    [1,2,2],
    [3,12,5],
    [22,1,5]
]);

print( np.dot( matrix1, matrix2 ) );

matrix1 = np.array([
    [3,8,6,4,4],
    [1,2,2,2,1],
    [4,5,5,3,1]
]);

matrix2 = np.array([
    [1,2,2],
    [3,12,5],
    [22,1,5],
    [6,2,2],
    [1,1,1]
]);

print( np.dot( matrix1, matrix2 ) );