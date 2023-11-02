function quickSort(array) {
    let i = 0, L, R, swap;
    const beg = [];
    const end = [];
    beg[0] = 0;
    end[0] = array.length; // input array length
  
    while (i >= 0) {
        L = beg[i];
        R = end[i] - 1;
  
        if (L < R) {
            const piv = array[L];
        
            while (L < R) {
                // partition
                while (array[R] >= piv && L < R) R--;
                if (L < R) array[L++] = array[R];

                while (array[L] <= piv && L < R) L++;
                if (L < R) array[R--] = array[L];
            }
    
            array[L] = piv;
            beg[i + 1] = L + 1;
            end[i + 1] = end[i];
            end[i++] = L;
    
            if (end[i] - beg[i] > end[i - 1] - beg[i - 1]) {
                //  reducing the number of recursive calls for very unbalanced partitions
                [beg[i], beg[i - 1]] = [beg[i - 1], beg[i]];
                [end[i], end[i - 1]] = [end[i - 1], end[i]];
            }
        } else {
            i--;
        }
    }
    return array;
}
// console.log(quickSort([12, 11, 13, 5, 6, 7]))
// help from TA and resource from: https://alienryderflex.com/quicksort/
