
var allPathsSourceTarget = function(graph) {
  var output = []; /* collection of paths that will be returned */
    var path = [];  /* current path */		
    path.push(0); /* add start index to current path */
    function helper(node) {
        if (node == graph.length - 1) {
            output.push(path.slice(0)); 
			/*
				if we are at the last node, we add the current path to the ouput, for
				some reason, if we just try to push the array it only adds the first
				element, so we need to do a slice from 0 (so it contains everything) and
				then push it into the output array
			*/
        } 
        else {
            for(var i=0; i<graph[node].length; i++){ 
			/*go through all of the connections*/
                path.push(graph[node][i]); /* add to the current path */
                helper(graph[node][i]);
                path.pop(); 
				/* remove the added node so that the next iteration is not affected by
				it */
				
            }
        }
    }
    helper(0); 
    return output;
   }
   
   Example:
Input: [[1,2], [3], [3], []] 
Output: [[0,1,3],[0,2,3]] 
Explanation: The graph looks like this:
0--->1
|    |
v    v
2--->3
There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.
