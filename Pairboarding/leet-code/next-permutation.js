var nextPermutation = function(nums) {
    let idx = nums.length - 1
    while (idx > 0) {
        for (let idx2 = idx - 1; idx2 >= 0; idx2--) {
            if (nums[idx] > nums[idx2]) {
                const temp = nums[idx];
                nums[idx] = nums[idx2];
                nums[idx2] = temp;

                return nums.slice(0,idx2 + 1).concat(nums.slice(idx2 + 1).sort());
            }
        }
        idx -= 1
    }

    return nums.reverse();
};
