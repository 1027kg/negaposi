const sampleTxt = '※この文章はサンプルです。<br/>東京都は、新型コロナ<a id="danger" href="#anchor1">ウイルス</a>の<a id="danger" href="#anchor1">感染</a>拡大に<a id="danger" href="#anchor1">警戒</a>を呼びかける「東京アラート」について、１１日、<a id="danger" href="#anchor1">感染</a>の急増がなければ解除する方針です<br> また、都は解除の判断と同時に休業要請などの緩和の段階も進めることができないか検討しています<br> 東京都は、<a id="danger" href="#anchor3">感染</a>状況の<a id="danger" href="#anchor3">悪化</a>の兆候が見られるなどとして、今月２日に「東京アラート」を初めて出して<a id="danger" href="#anchor3">警戒</a>を呼びかけてきましたが、都内では１０日の新たな<a id="danger" href="#anchor3">感染</a>の確認は１８人で、４日連続で２０人を下回りました<br>これにより、都が設定した<a id="danger" href="#anchor4">感染</a>の状況を示す３つの指標のうち２つでアラートを解除する場合の目安の数値を下回りました<br>都は、１１日も<a id="danger" href="#anchor5">感染</a>の確認が抑えられるなど状況が急激に<a id="danger" href="#anchor5">悪化</a>しなければ、<a id="positive" href="#anchor5">専門</a>家の意見も踏まえた上で解除する方針です<br> 具体的な解除の日時は１２日午前０時とする案などが検討されているということです<br> また、都は、アラートの解除の判断と同時に休業要請などの緩和の段階を今の「ステップ２」から「ステップ３」に進めることができないかも検討しています<br> 「ステップ３」では、居酒屋などの飲食店の営業も翌日の午前０時まで可能になるほか、カラオケ店なども営業できるようになります';

const sampleCard = '<article class="message is-danger"><div class="message-header"><p id="anchor1"> ネガティブ</p></div><div class="message-body"><div class="columns is-mobile"><div class="column is-3">段落:</div><div class="column is-9">東京都は、新型コロナウイルスの感染拡大に警戒を呼びかける「東京アラート」について、１１日、感染の急増がなければ解除する方針です</div></div><div class="columns is-mobile"><div class="column is-3">スコア:</div><div class="column is-9">-1</div></div><div class="columns is-mobile"><div class="column is-3">ネガティブ:</div><div class="column is-9">ウイルス, 感染, 警戒</div></div></div></article><article class="message is-light"><div class="message-header"><p id="anchor2"> ニュートラル</p></div><div class="message-body"><div class="columns is-mobile"><div class="column is-3">段落:</div><div class="column is-9"> また、都は解除の判断と同時に休業要請などの緩和の段階も進めることができないか検討しています</div></div><div class="columns is-mobile"><div class="column is-3">スコア:</div><div class="column is-9">0</div></div></div></article><article class="message is-danger"><div class="message-header"><p id="anchor3"> ネガティブ</p></div><div class="message-body"><div class="columns is-mobile"><div class="column is-3">段落:</div><div class="column is-9"> 東京都は、感染状況の悪化の兆候が見られるなどとして、今月２日に「東京アラート」を初めて出して警戒を呼びかけてきましたが、都内では１０日の新たな感染の確認は１８人で、４日連続で２０人を下回りました</div></div><div class="columns is-mobile"><div class="column is-3">スコア:</div><div class="column is-9">-1</div></div><div class="columns is-mobile"><div class="column is-3">ネガティブ:</div><div class="column is-9">感染, 悪化, 警戒</div></div></div></article><article class="message is-danger"><div class="message-header"><p id="anchor4"> ネガティブ</p></div><div class="message-body"><div class="columns is-mobile"><div class="column is-3">段落:</div><div class="column is-9">これにより、都が設定した感染の状況を示す３つの指標のうち２つでアラートを解除する場合の目安の数値を下回りました</div></div><div class="columns is-mobile"><div class="column is-3">スコア:</div><div class="column is-9">-1</div></div><div class="columns is-mobile"><div class="column is-3">ネガティブ:</div><div class="column is-9">感染</div></div></div></article><article class="message is-danger"><div class="message-header"><p id="anchor5"> ネガティブ</p></div><div class="message-body"><div class="columns is-mobile"><div class="column is-3">段落:</div><div class="column is-9">都は、１１日も感染の確認が抑えられるなど状況が急激に悪化しなければ、専門家の意見も踏まえた上で解除する方針です</div></div><div class="columns is-mobile"><div class="column is-3">スコア:</div><div class="column is-9">-0.3333333333333333</div></div><div class="columns is-mobile"><div class="column is-3">ポジティブ:</div><div class="column is-9">専門</div></div><div class="columns is-mobile"><div class="column is-3">ネガティブ:</div><div class="column is-9">感染, 悪化</div></div></div></article><article class="message is-light"><div class="message-header"><p id="anchor6"> ニュートラル</p></div><div class="message-body"><div class="columns is-mobile"><div class="column is-3">段落:</div><div class="column is-9"> 具体的な解除の日時は１２日午前０時とする案などが検討されているということです</div></div><div class="columns is-mobile"><div class="column is-3">スコア:</div><div class="column is-9">0</div></div></div></article><article class="message is-light"><div class="message-header"><p id="anchor7"> ニュートラル</p></div><div class="message-body"><div class="columns is-mobile"><div class="column is-3">段落:</div><div class="column is-9"> また、都は、アラートの解除の判断と同時に休業要請などの緩和の段階を今の「ステップ２」から「ステップ３」に進めることができないかも検討しています</div></div><div class="columns is-mobile"><div class="column is-3">スコア:</div><div class="column is-9">0</div></div></div></article><article class="message is-light"><div class="message-header"><p id="anchor8"> ニュートラル</p></div><div class="message-body"><div class="columns is-mobile"><div class="column is-3">段落:</div><div class="column is-9"> 「ステップ３」では、居酒屋などの飲食店の営業も翌日の午前０時まで可能になるほか、カラオケ店なども営業できるようになります</div></div><div class="columns is-mobile"><div class="column is-3">スコア:</div><div class="column is-9">0</div></div></div></article>';

$(function($) {

    $("#go").click(function() {

        var intxt = $('#inputTxt').val();
        if (intxt.length < 1) {
            alert("テキストを入力またはペーストしてください");
            return false;
        }

        resetUI();
        analyzeCall(intxt);
        $('#inputTxt').val('');
        
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
        $("html,body").animate({ scrollTop: $("#hako").offset().top }, "200");
        return false
    });

});

function analyzeCall(sendTxt) {

    var hostUrl = 'http://18.179.22.237:6670';
    var paragraphs = sendTxt.split("。");

    $('#go svg:eq(1)').delay(800).hide(800);
    $('#go svg:eq(0)').delay(800).show(800);

    $.ajax({
        url: hostUrl,
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        data: { ids: sendTxt},
        timeout: 3000
    }).done(function(data) {
        
        console.log("ajax call success.");
        console.log("URL : " + hostUrl);
        console.log("results : " + data);
        
        try {
            
            jsonObj = JSON.parse(data);
            var now = 0;
            var labelHTML = '';
            var scores = [];
            
            for (var item in jsonObj) {
                
                var posAry = jsonObj[item].positive;
                posAry = posAry.filter(function (x, i, self) { return self.indexOf(x) === i; });
                var negAry = jsonObj[item].negative;
                negAry = negAry.filter(function (x, i, self) { return self.indexOf(x) === i; });
                var paramScore = jsonObj[item].score;
                scores.push(paramScore);

                makeLabelHTML(paragraphs[now], posAry, negAry, paramScore);
                makeArticle(paragraphs[now], posAry, negAry, paramScore);
                now++;
            }

            setBarval(scores);

            $('section.res').delay(300).fadeIn(800);

        } catch (error) {
            console.log(error);
            oops(error);
            $('section.res').hide(800);
        }

    }).fail(function(jqXHR, textStatus, errorThrown) {
        console.log("ajax call failed.");
        console.log("jqXHR : " + jqXHR.status);
        console.log("textStatus : " + textStatus);
        console.log("errorThrown : " + errorThrown.message);
        console.log("URL : " + hostUrl);

        oops(errorThrown.message);
        $('section.res').hide(800);

        $('#go svg:eq(1)').delay(800).hide(800);
        $('#go svg:eq(0)').delay(800).show(800);
    })

}

function makeLabelHTML(honbun, listPos, listNeg, score){

    dom = honbun + "";

    cnt = $('.negposListView article').length;
    
    listPos.forEach(function(elem, index) {
        dom = replaceAll(dom, elem, '<a id="positive" href="#anchor'+ (cnt+1) +'">'+elem+'</a>');
    });

    listNeg.forEach(function(elem, index) {
        dom = replaceAll(dom, elem, '<a id="danger" href="#anchor'+ (cnt+1) +'">'+elem+'</a>');
    });

    $('.markedTxt-inner').html( $('.markedTxt-inner').html()+"<br/>"+dom );

}

function makeArticle(honbun, listPos, listNeg, score){

    classStyle = "is-primary";
    calssLabel = "ポジティブ";
    if(score < 0) { classStyle = "is-danger"; calssLabel="ネガティブ"; }
    if(score < 0.1 && score > -0.1) {classStyle = "is-light"; calssLabel="ニュートラル"; }

    cnt = $('.negposListView article').length;

    var wrapper = '<article class="message ' + classStyle + '">';
    wrapper += '<div class="message-header"><p id="anchor'+ (cnt+1) +'"> '+ calssLabel + '</p></div>';
    wrapper += '<div class="message-body">';
    wrapper += '<div class="columns is-mobile"><div class="column is-3">段落:</div><div class="column is-9">'+honbun+'</div></div>';
    wrapper += '<div class="columns is-mobile"><div class="column is-3">スコア:</div><div class="column is-9">'+score+'</div></div>';
    if(listPos.length > 0){
        wrapper += '<div class="columns is-mobile"><div class="column is-3">ポジティブ:</div><div class="column is-9">'+listPos.join(', ')+'</div></div>';
    }
    if(listNeg.length > 0){
        wrapper += '<div class="columns is-mobile"><div class="column is-3">ネガティブ:</div><div class="column is-9">'+listNeg.join(', ')+'</div></div>';
    }
    wrapper += '</div></article>';

    $('.negposListView').append(wrapper);

}

function replaceAll(str, beforeStr, afterStr){
    var reg = new RegExp(beforeStr, "g");
    return str.replace(reg, afterStr);
}    

function oops(debuginfo) {

    $('.markedTxt-inner').hide().html('');
    $('.markedTxt-inner').append('<div class="notification is-danger is-light">内部エラーが発生しました : <br/>'+ debuginfo +'</div>');
    $('.markedTxt-inner').delay(800).fadeIn(800);

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
    $('section.res').hide();
}

function setBarval(scoreAry) {

    var barList = [0,0,0];
    scoreAry.forEach(function(elem, index) {
        if(elem == 0) barList[1]+=1;
        if(elem > 0) barList[0]+=1;
        if(elem < 0) barList[2]+=1;
    });

    var perVal = 100 / (barList[0] + barList[1] + barList[2]);

    $('.negposBar progress').each(function(index){
        $(this).text( (barList[index] * perVal) + "%");
        $(this).val( barList[index] * perVal);
    });

    $('.percentVal').each(function(index){
        $(this).text( Math.floor((barList[index] * perVal)*10) / 10);
    });

}