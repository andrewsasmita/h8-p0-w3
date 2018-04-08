// Pasangan Angka Terbesar

function pasanganTerbesar(num) {
   
    var arrayNum=(num+'').split("");
    var frontNum=[];
    var backNum=[];
    var unsorted=[];
    
     for(var x=0; x<arrayNum.length-1; x++){
         
         frontNum.push(arrayNum[x]);
         
     }
     for (var y=1; y<arrayNum.length; y++){
     
         backNum.push(arrayNum[y]);
       
   }
   
   for (var z=0; z<arrayNum.length-1; z++) {
     
     unsorted.push(frontNum[z]+backNum[z]);
     
   }
   
   unsorted.sort(function(value1, value2) { return value1 < value2 });
   return(unsorted[0]);
}

console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99