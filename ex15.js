// Mengelompokkan Hewan

function groupAnimals(animals) {

    var group=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
    var alphabet='abcdefghijklmnopqrstuvwxyz';
   
    for(var i=0; i<=animals.length-1; i++) {
        
        for(var x=0; x<=alphabet.length-1; x++) {

            if(animals[i][0]===alphabet[x]) {
        
               group[x].push(animals[i]);
               
            } 
        }
    }

    var filteredGroup=group.filter(word => word.length>0);

    return (filteredGroup);
}

console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]

