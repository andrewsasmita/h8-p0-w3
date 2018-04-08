// Mengakses Nilai Dalam Array

var input='hello world!';
var array=[]


for (var i=input.length-1; i>=0; i--) {

    array.push(input[i]);

}

var output=array.join("");

console.log(output);
