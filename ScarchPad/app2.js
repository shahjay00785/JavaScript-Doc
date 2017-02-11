function waitThreeSecond() {
    var ms = 3000 + new Date().getTime();
    while ( new Date() < ms ){
      consol.log('finished funciton');
    }

    function clickHandler() {
      console.log('click event');
    }

    document.addEventListiner('click',clickHandler);

    waitThreeSecond();
    console.log('finished excution');

}
