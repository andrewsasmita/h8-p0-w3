// Number Palindrome

function angkaPalindrome(num) {
   
    var strNum=(num+'')
    var splitNum=strNum.split("")
    var x=0
    
    if(splitNum.length<=1) {
      x+=1
    } 
    else {
      for(var i=0; i<=10; i++) {
    
        if(splitNum[0]===(Number(splitNum[splitNum.length-1])+i).toString().slice(-1)) {
          x+=i         
        } 
      }
    }   
  return(num+x)
  }
  
    
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001