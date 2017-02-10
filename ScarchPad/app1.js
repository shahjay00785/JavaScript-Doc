/* scope of the chain */

function b(){
  console.log(myVar); // 1
}
function a() {
  var myVar=2;  // 2
  b();
}
var myVar=1;
a();        //1
