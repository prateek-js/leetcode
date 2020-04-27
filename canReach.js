var canReach = function(arr, start) {
    class Node{
        constructor(value) {
            this.value = value;
            this.left = null; this.right = null;
        }
    }
    
    var root = new Node(start);
    console.log("start root" +root);
    var result = rootSearch(root, arr);
    console.log(result);
    return result;
    
    function rootSearch(root, arr) {
      console.log("-----" + root.value + "-----" +arr[root.value]);
        while(arr[root.value] != 0) {
          console.log(root);
            root.right = new Node(root.value + arr[root.value]);
            if(root.right >= arr.length) {
               root.right = null; 
            } else {
                rootSearch(root.right,arr);
            }
            
            root.left = new Node(root.value-arr[root.value]);
            if(root.left >= arr.length) {
               root.right = null; 
            } else {
                rootSearch(root.left,arr);
            }
        }
        if(arr[root.value] === 0) {
            return true;
        }
        return false;
    }
};

canReach([4,2,3,0,3,1,2], 5)
