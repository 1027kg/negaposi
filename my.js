const sampleTxt = '※この文章はサンプルです。<br/>東京都は、新型<a id="warning" href="#anchor1">コロナウイルス</a>の感染拡大に警戒を呼びかける「東京アラート」について、１１日、感染の急増がなければ解除する方針です。 また、都は解除の判断と同時に休業要請などの緩和の段階も進めることができないか検討しています。 東京都は、感染状況の<a id="danger" href="#anchor2">悪化の兆候</a>が見られるなどとして、今月２日に「東京アラート」を初めて出して警戒を呼びかけてきましたが、都内では１０日の新たな感染の確認は１８人で、４日連続で２０人を下回りました。<br/>これにより、都が設定した感染の状況を示す３つの指標のうち２つでアラートを解除する場合の目安の数値を下回りました。<br/>都は、１１日も感染の確認が抑えられるなど状況が急激に悪化しなければ、専門家の意見も踏まえた上で<a id="positive" href="#anchor2">解除</a>する方針です。 具体的な解除の日時は１２日午前０時とする案などが検討されているということです。 また、都は、アラートの解除の判断と同時に休業要請などの緩和の段階を今の「ステップ２」から「ステップ３」に進めることができないかも検討しています。 「ステップ３」では、居酒屋などの飲食店の営業も翌日の午前０時まで可能になるほか、カラオケ店なども営業できるようになります。';

const sampleCard = '<article class="message is-warning"> <div class = "message-header" ><p id = "anchor1" > コロナウイルス </p> </div> <div class = "message-body" >"top_class": "negative",<br/> "classes": [ <br/> 　　{ "class_name": "positive", "confidence": 0.09130 }, <br/> 　　{ "class_name": "negative", "confidence": 0.90869 } <br/> ] </div> </article><article class = "message is-danger" ><div class = "message-header" ><p id = "anchor2" > 悪化の兆候 </p> </div> <div class = "message-body" >"top_class": "negative", <br/> "classes": [ <br/> 　　{ "class_name": "positive", "confidence": 0.09130 }, <br/> 　　{ "class_name": "negative", "confidence": 0.90869 } <br/> ] </div> </article><article class = "message is-link is-light" ><div class = "message-header" ><p id = "anchor2" > 解除 </p> </div> <div class = "message-body" >"top_class": "negative", <br/> "classes": [ <br/> 　　{ "class_name": "positive", "confidence": 0.09130 }, <br/> 　　{ "class_name": "negative", "confidence": 0.90869 } <br/> ] </div> </article>';

const devTxt = "東京都は新型コロナウイルスの感染拡大に警戒を呼びかける「東京アラート」について、11日、感染の急増がなければ解除する方針です。また、都は解除の判断と同時に休業要請などの緩和の段階も進めることができないか検討しています。東京都は、感染状況の悪化の兆候が見られるなどとして、今月2日に「東京アラート」を初めて出して警戒を呼びかけてきましたが、都内では10日の新たな感染の確認は18人で、4日連続で20人を下回りました。これにより、都が設定した感染の状況を示す3つの指標のうち2つでアラートを解除する場合の目安の数値を下回りました。都は、11日も感染の確認が抑えられるなど状況が急激に悪化しなければ、専門家の意見も踏まえたうえで解除する方針です。具体的な解除の日時は12日午前0時とする案などが検討されているということです。また都は、アラートの解除の判断と同時に休業要請などの緩和の段階を今の「ステップ2」から、「ステップ3」に進めることができないかも検討しています。「ステップ3」では、居酒屋などの飲食店の営業も翌日の午前0時まで可能になるほか、カラオケ店なども営業できるようになります。"

$(function($) {

    $("#go").click(function() {

        var intxt = $('#inputTxt').val();
        // if (intxt.length < 1) return false;

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
        $("html,body").animate({ scrollTop: $("#hako").offset().top }, "200");
        return false
    });

});

function analyzeCall(sendTxt) {

    var hostUrl = 'http://18.179.22.237:6670/Analysis';
    var paragraphs = devTxt.split("。");

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

                // console.log(negAry);

                now++;
            }

            setBarval(scores);

        } catch (error) {
            console.log(error);
        }

    }).fail(function(jqXHR, textStatus, errorThrown) {
        console.log("ajax call failed.");
        console.log("jqXHR : " + jqXHR.status);
        console.log("textStatus : " + textStatus);
        console.log("errorThrown : " + errorThrown.message);
        console.log("URL : " + hostUrl);

        // var testRes = "[{'positive': [], 'negative': ['ウイルス', '感染', '警戒', '感染'], 'score': -1.0}, {'positive': [], 'negative': [], 'score': 0.0}, {'positive': [], 'negative': ['感染', '悪化', '警戒', '感染'], 'score': -1.0}, {'positive': [], 'negative': ['感染'], 'score': -1.0}, {'positive': ['専門'], 'negative': ['感染', '悪化'], 'score': -0.3333333333333333}, {'positive': [], 'negative': [], 'score': 0.0}, {'positive': [], 'negative': [], 'score': 0.0}, {'positive': [], 'negative': [], 'score': 0.0}]";

        // testRes = replaceAll(testRes, "'", '"');
        
        // try {
            
        //     jsonObj = JSON.parse(testRes);
        //     var now = 0;
        //     var labelHTML = '';
        //     var scores = [];
            
        //     for (var item in jsonObj) {
                
        //         var posAry = jsonObj[item].positive;
        //         posAry = posAry.filter(function (x, i, self) { return self.indexOf(x) === i; });
        //         var negAry = jsonObj[item].negative;
        //         negAry = negAry.filter(function (x, i, self) { return self.indexOf(x) === i; });
        //         var paramScore = jsonObj[item].score;
        //         scores.push(paramScore);

        //         makeLabelHTML(paragraphs[now], posAry, negAry, paramScore);
        //         makeArticle(paragraphs[now], posAry, negAry, paramScore);

        //         // console.log(negAry);

        //         now++;
        //     }

        //     setBarval(scores);

        // } catch (error) {
        //     console.log(error);
        // }

    })
}

function makeLabelHTML(honbun, listPos, listNeg, score){

    dom = honbun + "。";

    cnt = $('.negposListView article').length;
    
    listPos.forEach(function(elem, index) {
        dom = replaceAll(dom, elem, '<a id="primary" href="#anchor'+ (cnt+1) +'">'+elem+'</a>');
    });

    listNeg.forEach(function(elem, index) {
        dom = replaceAll(dom, elem, '<a id="danger" href="#anchor'+ (cnt+1) +'">'+elem+'</a>');
    });

    $('.markedTxt-inner').html( $('.markedTxt-inner').html()+"<br/>"+dom );

}

function makeArticle(honbun, listPos, listNeg, score){

    classStyle = "is-primary";
    calssLabel = "ポジティブ";
    if(score < -0.5) { classStyle = "is-danger"; calssLabel="ネガティブ"; }
    if(score < 0 && score > -0.5) {classStyle = "is-warning"; calssLabel="ネガティブ"; }
    if(score < 0.1 && score > -0.1) {classStyle = "is-light"; calssLabel="ニュートラル"; }

    cnt = $('.negposListView article').length;

    var wrapper = '<article class="message ' + classStyle + '">';
    wrapper += '<div class="message-header"><p id="anchor'+ (cnt+1) +'"> '+ calssLabel + '</p></div>';
    wrapper += '<div class="message-body">';
    wrapper += '<div class="columns is-mobile"><div class="column is-3">段落:</div><div class="column is-9">'+honbun+'。</div></div>';
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
        // console.log(barList[index]*perVal);
    });

    $('.percentVal').each(function(index){
        $(this).text(barList[index] * perVal);
    });

}