/* scope of the chain */

function a() {
 function b() {
   console.log(myVar);
 }

  var myVar=2;  // 2
  b();
}
var myVar=1;
a();        //1
