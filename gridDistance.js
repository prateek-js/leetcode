function coverPoints (A, B){ console.log(A);
        var curX = A[0];
    	var curY = B[0];
    	// Counter
    	var count = 0;
    	for (let i = 1; i < A.length; i++) {
		// Get destination x and y
		let dstX = A[i];
		let dstY = B[i];

		    // While we are not at the target position
    		while (curX != dstX || curY != dstY) {
    			// Check x
    			if (curX < dstX) curX++;
    			else if (curX > dstX) curX--;
    
    			// Check y
    			if (curY < dstY) curY++;
    			else if (curY > dstY) curY--;
    
    			count++;
    		}
    	}

	    return count;
	}
  
  coverPoints([1, 2, 6], [1, 2, 6])
