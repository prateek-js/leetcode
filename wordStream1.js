function isWordBreakable (s, dict, answer) {
  var strLen = s.length;

  // console.log(s + '  ' + answer);
  if (strLen === 0) {
    console.log(answer);
    return true;
  } else {
    var i = 0;
    var prefix = '';

    while (i < strLen) {

      // add one char at a time
      prefix += s.charAt(i);

      // check if prefix exists in dictionary
      // if (dict.includes(prefix)) { // Array.prototype.includes() is an ES7 Feature
      if (dict.indexOf(prefix) > -1) {

        //add prefix to the answer and make a recursive call
        answer += prefix + ' ';
        var suffix = s.slice(i + 1);
        if (isWordBreakable(suffix, dict, answer)) {
          return true;
        } else {
          //console.log(prefix + '  backtrack');
          i++;
        }
      } else {
        i++;
      }
    }
    return false;
  }
}

var inputStr = 'Ihavedog';
var inputDict = ['I', 'have', 'ha' , 'am', 'this', 'dog'];

if (!isWordBreakable(inputStr, inputDict, '')) {
  console.log('String can not broken.');
} // I ha have dog

var inputStr2 = 'Ihavesdog';
if (!isWordBreakable(inputStr2, inputDict, '')) {
  console.log('String can not broken.');
} // String can not broken.
