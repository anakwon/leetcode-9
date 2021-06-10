// 9. Palindrome Number
// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.



var isPalindrom = function(x) {
    if( x < 0 ) { return false; }

    let int = x.toString();
    let i = 0; 
    let j = int.length - 1; 

    while ( i <= j) {
        if (!(int[i++] === int[j--])){
            return false;
        }
        return true;
    }
}

isPalindrom(1001);