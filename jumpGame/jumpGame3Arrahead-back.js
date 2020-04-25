var canReach = function(arr, start) {
    const seen = new Array(arr.length).fill(false);
    const dfs = (index) => {
        if(seen[index] || index < 0 || index > arr.length) return false;
        if(arr[index] === 0) return true;
        seen[index] = true;
        return dfs(index + arr[index]) || dfs(index - arr[index]);
    }
    return dfs(start);
};
