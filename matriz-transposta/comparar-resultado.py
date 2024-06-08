import numpy as np;

#Transpondo matrix
transp = np.transpose([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]);

print(transp);
print('\n');

#Invertendo o processo
retransp = np.transpose(transp);

print(retransp);