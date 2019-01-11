const permutations = nums => {
    if (nums.length <= 1) return [nums];
    let val = nums.shift();
    let perms = getAllPerms(nums);

    let totalPerms = [];
    perms.forEach(perm => {
        for (let i = 0; i <= perm.length; i++) {
            let result = perm.slice(0, i).concat([val]).concat(perm.slice(i))
            totalPerms.push(result);
        }
    })

    return totalPerms.sort();
}
