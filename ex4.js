// Menggunakan Built-in Function pada Array

var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];
var lastName = ["Elsharawy"];
var areaSize = ["Provinsi"];
var gender = "Pria";
var education = "SMA Internasional Metro";

function dataHandling2(str) {

    var arrayName=[];
    arrayName.push(str[1], lastName);
    var fullName=arrayName.join(" ");
    
    var arrayArea=[];
    arrayArea.push(areaSize, str[2]);
    var fullArea=arrayArea.join(" ");

    str.splice(4, 1, gender, education);

    var strFull=[];
    strFull.push(str[0], fullName, fullArea, str[3], str[4], str[5]);
    
    console.log(strFull);
    
    var date=str[3];
    var dmy=date.split("/");
    var month=dmy[1];
    var monthnum=Number(month);
    var monthname;

    switch (monthnum) {
        case 1: {monthname='Januari'; break;}
        case 2: {monthname='Februari'; break;}
        case 3: {monthname='Maret'; break;}
        case 4: {monthname='April'; break;}
        case 5: {monthname='Mei'; break;}
        case 6: {monthname='Juni'; break;}
        case 7: {monthname='Juli'; break;}
        case 8: {monthname='Agustus'; break;}
        case 9: {monthname='September'; break;}
        case 10: {monthname='Oktober'; break;}
        case 11: {monthname='November'; break;}
        case 12: {monthname='Desember'; break;} 
        default : {console.log(' ');}
    }

    console.log(monthname);

    var sorted = [Number(dmy[0]), Number(dmy[1]), Number(dmy[2])];
    sorted.sort(function(value1, value2) { return value1 < value2 });
    console.log(sorted); 

    var joinDate=[];
    joinDate.push(dmy.join("-"));
    console.log(joinDate);
    
    var nameSlice = (input[1]);
    var nameMax=nameSlice.slice(0, 16);
    console.log(nameMax);
}

dataHandling2(input);

