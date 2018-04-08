//Tentukan Deret Geometri

function tentukanDeretGeometri(arr) {
 
    var pattern=arr[1]/arr[0];
    var judgement=0;

    for (var i=0; i<arr.length-1; i++) {

        if ((arr[i]*pattern)===(arr[i+1])){

            judgement+=1;

        }
    }

    if (judgement===(arr.length-1)) {
        return(true);
    } else {
        return(false);
    }
}
  
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false