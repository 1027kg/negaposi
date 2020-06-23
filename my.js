const sampleTxt = '※この文章はサンプルです。<br/>東京都は、新型<a id="warning" href="#anchor1">コロナウイルス</a>の感染拡大に警戒を呼びかける「東京アラート」について、１１日、感染の急増がなければ解除する方針です。 また、都は解除の判断と同時に休業要請などの緩和の段階も進めることができないか検討しています。 東京都は、感染状況の<a id="danger" href="#anchor2">悪化の兆候</a>が見られるなどとして、今月２日に「東京アラート」を初めて出して警戒を呼びかけてきましたが、都内では１０日の新たな感染の確認は１８人で、４日連続で２０人を下回りました。<br/>これにより、都が設定した感染の状況を示す３つの指標のうち２つでアラートを解除する場合の目安の数値を下回りました。<br/>都は、１１日も感染の確認が抑えられるなど状況が急激に悪化しなければ、専門家の意見も踏まえた上で<a id="positive" href="#anchor2">解除</a>する方針です。 具体的な解除の日時は１２日午前０時とする案などが検討されているということです。 また、都は、アラートの解除の判断と同時に休業要請などの緩和の段階を今の「ステップ２」から「ステップ３」に進めることができないかも検討しています。 「ステップ３」では、居酒屋などの飲食店の営業も翌日の午前０時まで可能になるほか、カラオケ店なども営業できるようになります。';

const sampleCard = '<article class="message is-warning"> <div class = "message-header" ><p id = "anchor1" > コロナウイルス </p> </div> <div class = "message-body" >"top_class": "negative",<br/> "classes": [ <br/> 　　{ "class_name": "positive", "confidence": 0.09130 }, <br/> 　　{ "class_name": "negative", "confidence": 0.90869 } <br/> ] </div> </article><article class = "message is-danger" ><div class = "message-header" ><p id = "anchor2" > 悪化の兆候 </p> </div> <div class = "message-body" >"top_class": "negative", <br/> "classes": [ <br/> 　　{ "class_name": "positive", "confidence": 0.09130 }, <br/> 　　{ "class_name": "negative", "confidence": 0.90869 } <br/> ] </div> </article><article class = "message is-link is-light" ><div class = "message-header" ><p id = "anchor2" > 解除 </p> </div> <div class = "message-body" >"top_class": "negative", <br/> "classes": [ <br/> 　　{ "class_name": "positive", "confidence": 0.09130 }, <br/> 　　{ "class_name": "negative", "confidence": 0.90869 } <br/> ] </div> </article>';

$(function($) {

    $("#go").click(function() {

        var intxt = $('#inputTxt').val();
        if (intxt.length < 1) return false;

        resetUI();

        analyzeCall(intxt);

        // $('#go svg:eq(0)').hide();
        // $('#go svg:eq(1)').show();
        // $('#inputTxt').val('');

        // $('#go svg:eq(1)').delay(1500).hide(800);
        // $('section.res').delay(1500).fadeIn(800);
        // $('#go svg:eq(0)').delay(1500).show(800);

        // oops();

    });

    initStyle();

    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.scrolltop:hidden').stop(true, true).fadeIn();
        } else {
            $('.scrolltop').stop(true, true).fadeOut();
        }
    });

    $(".scroll").click(function() {
        $("html,body").animate({ scrollTop: $("#hako").offset().top }, "1000");
        return false
    });

});

function analyzeCall(sendTxt) {

    var hostUrl = 'http://18.179.22.237/Analysis';
    $.ajax({
        url: hostUrl,
        type: 'POST',
        dataType: 'json',
        data: { input_value: sendTxt },
        timeout: 3000,
        xhrFields: {
            withCredentials: true
        },
    }).done(function(data) {
        // alert("ok");
        console.log("ajax call success.");
        console.log("URL : " + hostUrl);
        console.log("results : " + data);
    }).fail(function(jqXHR, textStatus, errorThrown) {
        // alert("error");
        console.log("ajax call failed.");
        console.log("jqXHR : " + jqXHR.status);
        console.log("textStatus : " + textStatus);
        console.log("errorThrown : " + errorThrown.message);
        console.log("URL : " + hostUrl);
    })
}

function oops() {

    $('.markedTxt-inner').hide().html('');
    $('.markedTxt-inner').append('<div class="has-image-centered"><img class="oops" src="oops.png" alt=""></div>');
    $('.markedTxt-inner').delay(800).fadeIn(800);
    $('section.res').hide();

}

function initStyle() {

    $('.markedTxt-inner').html(sampleTxt);
    $('.negposListView').html(sampleCard);
    $('.negposBar progress').each(function() {
        $(this).text('10%');
        $(this).val('10');
    });

    $('.percentVal').text('10');

}

function resetUI() {

    $('#go svg:eq(0)').show();
    $('#go svg:eq(1)').hide();

    $('.markedTxt-inner').html('');
    $('.negposListView').html('');

    $('.negposBar progress').each(function() {
        $(this).text('0%');
        $(this).val('0');
    });

    $('.percentVal').text('0');

}

function serBarVal() {

}

function setWordVector() {

}

function setTextMark() {

}