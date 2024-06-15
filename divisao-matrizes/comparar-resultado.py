import numpy as np;

#Testando
matrix1 = np.array([[ 1,  2,  3],
                    [-2, -5,  3],
                    [ 3,  3,  4]]);

matrix2 = np.array([[ 0.3,  0.6,  0.9],
                    [-0.6, -1.5,  0.9],
                    [ 0.9,  0.9,  1.2]]);

print( matrix1 / matrix2 );