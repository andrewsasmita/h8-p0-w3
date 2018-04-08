// Palindrome

function palindrome(word) {

    var reverse=[];

    for (var i=word.length-1; i>=0; i--) {
    
        reverse.push(word[i]);
    
    }
    
    var flipped=reverse.join("");
    
    if (word===flipped){
        return(true);
    }
    else {
        return(false);
    }
}

console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false

