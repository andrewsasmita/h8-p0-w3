// Target Terdekat

function targetTerdekat(arr) {
    
  var posO

  for(var i=0; i<=arr.length-1; i++) {
   
    if(arr[i]==='o') {
      posO=(i)
    }
  }
  
  var posX=[]

  for(var x=0; x<=arr.length-1; x++) {

    if(arr[x]==='x') {
      posX.push(x)
    }
  }
  var posFromO=[]

  for(var y=0; y<=posX.length-1; y++) {
    
    posFromO.push(Math.abs(posX[y]-posO))
    
  }
  
  var sorted=posFromO.sort()
  
  if(sorted.length===0) {
    return (0)
  } 
  else {
    return(sorted[0])
  }
}

console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2