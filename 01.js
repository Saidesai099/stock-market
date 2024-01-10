var gstock = ["EPA:PIG","LON:AHT","NYSE:URI","NYSE:TEX" ,"NYSE:CAT", "NASDAQ:HEES", "NASDAQ:MNTX", "VIE:PAL" ];
$(document).ready(function () {
       for (var i = 0; i < gstock.length; i++) {
        $.getJSON("https://finance.google.com/finance/info?client=ig&q="+gstock[i]+"&callback=?", function (response) {
            var stockInfo1 = response[0];
            console.log(stockInfo1)
            var divContainer =  $('*[data-symbol="' + stockInfo1.t +'"]');

            var stockString1 = '<div class="stockWrapper">' + divContainer.data('title') + ':';
            var stockName1 = stockInfo1.t;             
            stockString1 += '<span class="stockSymbol "> '  +  stockInfo1.t + ' </span>';
            stockString1 += '<span class="stockPrice "> '  +  stockInfo1.l  + '</span>';
            stockString1 += '<span class="stockChange "> '  +  stockInfo1.c + '</span>';
            stockString1 += '</div>';
            divContainer.append(stockString1);

        });
    }
});