// Perkalian Unik

function perkalianUnik(arr) {
       
    var total = arr[0];
    
    for(var i=1; i<=arr.length-1; i++) {
    
        total=total*arr[i];
    
    }
     
    var output=[];

    for(var x=0; x<=arr.length-1; x++) {

        output.push(total/arr[x]);

    }
    
    return(output);

  }
  
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]
