/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    for(let i=0; i<grid.length; i++){
        for(let j = 0;j<grid[i].length;j++){
            //edge cases
            if(i-1<0 && j-1<0){
                continue;
            }
            if(i-1<0){
                grid[i][j]=grid[i][j]+grid[i][j-1];
                continue;
            }
            if(j-1<0){
                grid[i][j]=grid[i][j]+grid[i-1][j];
                continue;
            }
            //logic: the path to the current is the current + minimum of previous paths
            //you have 2 options for previous paths. the left or up
            grid[i][j]=Math.min(grid[i][j]+grid[i-1][j],grid[i][j]+grid[i][j-1]);
        }
    }
    
    let len = grid.length;
    return grid[len-1][grid[len-1].length-1]
};
