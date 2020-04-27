var maxNumber = function(nums1, nums2, k) {
    let map = new Map();

    const check = (ai,bi,k) => {
        if (map.has(ai + ',' + bi + ',' + k)) {
            return map.get(ai + ',' + bi + ',' + k);
        }
        let output = [];
        while(k > 0) {
            let maxa = -Infinity;
            let maxai = 0;
            let maxb = -Infinity;
            let maxbi = 0;
            for(let i = ai; i < nums1.length && nums1.length + nums2.length - (i + bi) >= k; i++) {
                if (nums1[i] > maxa) {
                    maxa = nums1[i];
                    maxai = i;
                }
            }
            for(let i = bi; i < nums2.length && nums1.length + nums2.length - (ai + i) >= k; i++) {
                if (nums2[i] > maxb) {
                    maxb = nums2[i];
                    maxbi = i;
                }
            }
            if (maxa === maxb) {
                output.push(maxa);
                let ca = map.get(ai+','+(maxbi+1)+','+(k-1)) || check(ai, maxbi+1, k-1);
                let cb = map.get((maxai+1)+','+bi+','+(k-1)) || check(maxai+1,bi,k-1);
                map.set(ai+','+(maxbi+1)+','+(k-1), ca);
                map.set((maxai+1)+','+bi+','+(k-1), cb);
                if (ca.join('') > cb.join('')) {
                    return [...output, ...ca];
                } else {
                    return [...output, ...cb];
                }
            } else if (maxa > maxb) {
                output.push(maxa);
                ai = maxai + 1;
            } else {
                output.push(maxb);
                bi = maxbi + 1;
            }
            k--;
        }
        map.set(ai + ',' + bi + ',' + k, output);
        return output;
    }
    return check(0,0,k);
};

Input:
nums1 = [3, 4, 6, 5]
nums2 = [9, 1, 2, 5, 8, 3]
k = 5
Output:
[9, 8, 6, 5, 3]
