// Tentukan Deret Aritmatika

function tentukanDeretAritmatika(arr) {
    
    var pattern=arr[1]-arr[0]
    var judgement=0

    for (var i=0; i<arr.length-1; i++) {

        if ((arr[i]+pattern)===(arr[i+1])){

            judgement+=1

        }
    }

    if (judgement===(arr.length-1)) {
        return(true)
    } else {
        return(false)
    }
}
  
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false