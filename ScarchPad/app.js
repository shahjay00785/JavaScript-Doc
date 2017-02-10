/*
Excution Stack
*/


function b() {  // 3
  var myVar;
  console.log(myVar);
}
function a() {  // 2
    var myVar = 2;
  console.log(myVar);
  b();
}
var myVar = 1;  // 1 because it is global
//console.log(myVar);
//a();    // 2

 console.log(myVar);
 a();
 console.log(myVar);
