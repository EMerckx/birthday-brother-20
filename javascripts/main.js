$( document ).ready(function() {
    // hide all the candles
    $('.candle').hide();
    $('#congrats').hide();

    // begin to play the song
    document.getElementById('song').play();

    var count = 0;

    var intervalPlaceCandles=setInterval(function(){
        count++;

        // place the 20 candles on the cake
        if (count <= 20){
            var name = '.candle' + count + '.unlit';
            $(name).show();
        }
        else {
            clearInterval(intervalPlaceCandles);

            // light the candles on the cake
            var intervalLightCandles=setInterval(function(){
                if(count % 2 == 0){
                    $('.lit').hide();
                    $('.unlit').show();
                }
                else {
                    $('.unlit').hide();
                    $('.lit').show();
                }
                count++;

                if(count == 28){
                    clearInterval(intervalLightCandles);

                    setTimeout(function() {
                        $('#congrats').fadeIn();
                    }, 750);
                }
            },250);
        }
    },500);
});
