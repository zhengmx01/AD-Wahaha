var oneNumber = document.getElementById("one-number");
var oneNumberValue = oneNumber.innerHTML;
var onePage = document.getElementsByClassName("one-page")[0];
var twoPage = document.getElementsByClassName("two-page")[0];
var threePage = document.getElementsByClassName("three-page")[0];
var fourPage = document.getElementsByClassName("four-page")[0];
var fivePage = document.getElementsByClassName("five-page")[0];
var sixPage = document.getElementsByClassName("six-page")[0];
var sevenPage = document.getElementsByClassName("seven-page")[0];
var eightPage = document.getElementsByClassName("eight-page")[0];
var ninePage = document.getElementsByClassName("nine-page")[0];
var startGame = document.getElementsByClassName("start-game")[0];

const bgMusic = document.getElementById("bgMusic");
const react_root = document.getElementById("music");
const musicStop = document.getElementById("music_img_page_stop");
function toggleMusic() {
    if (bgMusic.paused) {
        playBackgroundMusic();
    }

    else {
        pauseBackgroundMusic();
    }
}

// 播放音乐
function playBackgroundMusic() {
    bgMusic.play();
    react_root.classList.add("musicRotate");
    musicStop.style.display = "none";
}

// 暂停音乐
function pauseBackgroundMusic() {
    bgMusic.pause();
    react_root.classList.remove("musicRotate");
    musicStop.style.display = "block";
}


// console.log(oneNumber);
// typeof 检查变量类型
// console.log(typeof oneNumber);
// 转数据类型
oneNumberValue = Number(oneNumberValue);
// 定时器 在指定时间后执行代码
// setInterval(方法 ， 时间) 
// 定义方法 function([参数]){方法体}
var IntervalNumber = setInterval(function () {
    if (oneNumberValue < 100) {
        oneNumberValue = oneNumberValue + 1;
        oneNumber.innerHTML = oneNumberValue;
    } else {
        clearInterval(IntervalNumber);
    }
}, 30)

var topImg = document.getElementsByClassName("top-img")[0];
var qp1Img = document.getElementsByClassName("qipao1-img")[0];
var t1Img = document.getElementsByClassName("text-img1")[0];
var qp2Img = document.getElementsByClassName("qipao2-img")[0];
var t2Img = document.getElementsByClassName("text-img2")[0];
var qp3Img = document.getElementsByClassName("qipao3-img")[0];
var t3Img = document.getElementsByClassName("text-img3")[0];

setTimeout(function () {
    onePage.style.display = "none";

}, 3500)
setTimeout(function () {

    startGame.style.opacity = "1";
    startGame.classList.add("start-gamet");
}, 3500)

var botImg = document.getElementsByClassName("bottom-img")[0];
var perSon = document.getElementsByClassName("person")[0];
var qp4Img = document.getElementsByClassName("qipao4-img")[0];
var gas = document.getElementsByClassName("gas")[0];
var find = document.getElementsByClassName("find")[0];
// 第四页
var topBgt = document.getElementsByClassName("four-top-bg")[0];
var topPop = document.getElementsByClassName("four-top-people")[0];
var dong1 = document.getElementsByClassName("dong1")[0];
var dong2 = document.getElementsByClassName("dong2")[0];
var dong3 = document.getElementsByClassName("dong3")[0];
var dt1 = document.getElementsByClassName("dong-text1")[0];
var dt2 = document.getElementsByClassName("dong-text2")[0];
var dt3 = document.getElementsByClassName("dong-text3")[0];
var fourQp = document.getElementsByClassName("four-qipao")[0];
var fourTxt1 = document.getElementsByClassName("four-text1")[0];
var fourTxt2 = document.getElementsByClassName("four-text2")[0];
var fourTxt3 = document.getElementsByClassName("four-text3")[0];
// 下
var fourBottomBg = document.getElementsByClassName("four-bottom-bg")[0];
var zzz1 = document.getElementsByClassName("zzz1")[0];
var zzz2 = document.getElementsByClassName("zzz2")[0];
var zzz3 = document.getElementsByClassName("zzz3")[0];
var dong4 = document.getElementsByClassName("dong4")[0];
var dong5 = document.getElementsByClassName("dong5")[0];
var dong6 = document.getElementsByClassName("dong6")[0];
var dong7 = document.getElementsByClassName("dong7")[0];
var dongText4 = document.getElementsByClassName("dong-text4")[0];
// 第五页上
var fiveTopBg = document.getElementsByClassName("five-top-bg")[0];
var wenhao = document.getElementsByClassName("wenhao")[0];
var fiveTopHead = document.getElementsByClassName("five-top-head")[0];
var fiveTopBody = document.getElementsByClassName("five-top-body")[0];
var fiveTopQpao = document.getElementsByClassName("five-top-qipao")[0];
// 下
var fiveBottomBg = document.getElementsByClassName("five-bottom-bg")[0];
var fiveBottomBody = document.getElementsByClassName("five-bottom-body")[0];
var fiveBottomHead = document.getElementsByClassName("five-bottom-head")[0];
var r2 = document.getElementsByClassName("r2")[0];
var fiveAD = document.getElementsByClassName("five-AD")[0];
var fiveQiPao = document.getElementsByClassName("five-qipao")[0];
var fiveText = document.getElementsByClassName("five-text")[0];
// 第六页上
var sixTopBg = document.getElementsByClassName("six-top-bg")[0];
var sixTopBg1 = document.getElementsByClassName("six-top-bg1")[0];
var sixTopBg2 = document.getElementsByClassName("six-top-bg2")[0];
var sixTopBg3 = document.getElementsByClassName("six-top-bg3")[0];
var r3 = document.getElementsByClassName("r3")[0];
var sixTopSu = document.getElementsByClassName("six-top-su")[0];
var sixTopzhang = document.getElementsByClassName("six-top-zhang")[0];
var sixTopZhangHead = document.getElementsByClassName("six-top-zhang-head")[0];
var sixTopZhangHead = document.getElementsByClassName("six-top-zhang-head")[0];
var sixQipao1 = document.getElementsByClassName("six-qipao1")[0];
var sixQipao2 = document.getElementsByClassName("six-qipao2")[0];
var sixText1 = document.getElementsByClassName("six-text1")[0];
var sixText2 = document.getElementsByClassName("six-text2")[0];
var sixTopAD = document.getElementsByClassName("six-top-AD")[0];
// 下
var sixBottomBg = document.getElementsByClassName("six-bottom-bg")[0];
var sixQipao3 = document.getElementsByClassName("six-qipao3")[0];
var sixQipao4 = document.getElementsByClassName("six-qipao4")[0];
var sixText3 = document.getElementsByClassName("six-text3")[0];
var sixText4 = document.getElementsByClassName("six-text4")[0];
var sixText5 = document.getElementsByClassName("six-text5")[0];
var star1 = document.getElementsByClassName("star1")[0];
var star2 = document.getElementsByClassName("star2")[0];
var star3 = document.getElementsByClassName("star3")[0];
var star4 = document.getElementsByClassName("star4")[0];
var star5 = document.getElementsByClassName("star5")[0];
var star6 = document.getElementsByClassName("star6")[0];
// 第七页上
var sevenTopBg = document.getElementsByClassName("seven-top-bg")[0];
var sevenPeople = document.getElementsByClassName("seven-people")[0];
var r = document.getElementsByClassName("r")[0];
var fengche = document.getElementsByClassName("fengche")[0];
// zhong
var r1 = document.getElementsByClassName("r1")[0];
var sevenCenterBg1 = document.getElementsByClassName("seven-center-bg1")[0];
var sevenCenterBg2 = document.getElementsByClassName("seven-center-bg2")[0];
var sevenCenterBg3 = document.getElementsByClassName("seven-center-bg3")[0];
var fengzheng = document.getElementsByClassName("fengzheng")[0];
var tuoluo = document.getElementsByClassName("tuoluo")[0];
var fengche2 = document.getElementsByClassName("fengche2")[0];
var gunzi = document.getElementsByClassName("gunzi")[0];
var sevenPeople1 = document.getElementsByClassName("seven-people1")[0];
// xia
var sevenbottomBg = document.getElementsByClassName("seven-bottom-bg")[0];
var flower1 = document.getElementsByClassName("flower1")[0];
var flower2 = document.getElementsByClassName("flower2")[0];
var flower3 = document.getElementsByClassName("flower3")[0];
var flower4 = document.getElementsByClassName("flower4")[0];
var ad1 = document.getElementsByClassName("ad1")[0];
var ad2 = document.getElementsByClassName("ad2")[0];
var ad3 = document.getElementsByClassName("ad3")[0];
var cherry = document.getElementsByClassName("cherry")[0];
var tea = document.getElementsByClassName("tea")[0];
var orange = document.getElementsByClassName("orange")[0];
var pot = document.getElementsByClassName("pot")[0];
var sstar = document.getElementsByClassName("sstar")[0];
var sstar1 = document.getElementsByClassName("sstar1")[0];
var sstar2 = document.getElementsByClassName("sstar2")[0];
var sstar3 = document.getElementsByClassName("sstar3")[0];
var sstar4 = document.getElementsByClassName("sstar4")[0];
var sstar5 = document.getElementsByClassName("sstar5")[0];
var sstar6 = document.getElementsByClassName("sstar6")[0];
var sstar7 = document.getElementsByClassName("sstar7")[0];
var sstar8 = document.getElementsByClassName("sstar8")[0];
var sstar9 = document.getElementsByClassName("sstar9")[0];
var sstar10 = document.getElementsByClassName("sstar10")[0];
var sstar11 = document.getElementsByClassName("sstar11")[0];
// 八上
var eightTopBg = document.getElementsByClassName("eight-top-bg")[0];
var eightPeople = document.getElementsByClassName("eight-people")[0];
var bird1 = document.getElementsByClassName("bird1")[0];
var bird2 = document.getElementsByClassName("bird2")[0];
var eightLeftBg = document.getElementsByClassName("eight-left-bg")[0];
var eightLeftPeople = document.getElementsByClassName("eight-left-people")[0];
var eightRightBg1 = document.getElementsByClassName("eight-right-bg1")[0];
var eightRightBg2 = document.getElementsByClassName("eight-right-bg2")[0];
var eightRightBg3 = document.getElementsByClassName("eight-right-bg3")[0];
var dangong = document.getElementsByClassName("dangong")[0];
var mianhua = document.getElementsByClassName("mianhua")[0];
var candy = document.getElementsByClassName("candy")[0];
var candy1 = document.getElementsByClassName("candy1")[0];
var eightFlower1 = document.getElementsByClassName("eight-flower1")[0];
var eightFlower2 = document.getElementsByClassName("eight-flower2")[0];
var eightStar1 = document.getElementsByClassName("eight-star1")[0];
var eightStar2 = document.getElementsByClassName("eight-star2")[0];
var eightStar3 = document.getElementsByClassName("eight-star3")[0];
var eightStar4 = document.getElementsByClassName("eight-star4")[0];
var eightStar5 = document.getElementsByClassName("eight-star5")[0];
var eightStar6 = document.getElementsByClassName("eight-star6")[0];
// 九
var nineBg = document.getElementsByClassName("nine-bg")[0];
var oval1 = document.getElementsByClassName("oval1")[0];
var oval2 = document.getElementsByClassName("oval2")[0];
var nineAd1 = document.getElementsByClassName("nine-ad1")[0];
var nineAd2 = document.getElementsByClassName("nine-ad2")[0];
var nineAd3 = document.getElementsByClassName("nine-ad3")[0];
var taste1 = document.getElementsByClassName("taste1")[0];
var taste2 = document.getElementsByClassName("taste2")[0];
var taste3 = document.getElementsByClassName("taste3")[0];
var frame1 = document.getElementsByClassName("frame1")[0];
var frame2 = document.getElementsByClassName("frame2")[0];
var frame3 = document.getElementsByClassName("frame3")[0];
var ninePeople1 = document.getElementsByClassName("nine-people1")[0];
var ninePeople2 = document.getElementsByClassName("nine-people2")[0];
var nineStar1 = document.getElementsByClassName("nine-star1")[0];
var nineStar2 = document.getElementsByClassName("nine-star2")[0];
var nineStar3 = document.getElementsByClassName("nine-star3")[0];
var nineStar4 = document.getElementsByClassName("nine-star4")[0];
var nineStar5 = document.getElementsByClassName("nine-star5")[0];
var nineStar6 = document.getElementsByClassName("nine-star6")[0];
var nineStar7 = document.getElementsByClassName("nine-star7")[0];
var nineStar8 = document.getElementsByClassName("nine-star8")[0];
var nineStar9 = document.getElementsByClassName("nine-star9")[0];
var nineStar10 = document.getElementsByClassName("nine-star10")[0];
var nineStar11 = document.getElementsByClassName("nine-star11")[0];
var nineText = document.getElementsByClassName("nine-text")[0];
var logo = document.getElementsByClassName("logo")[0];


// var musicAudio = document.getElementsByClassName("music-audio")[0]
// var musicControls = document.getElementsByClassName('Music-controls')[0];
// var musicImg = document.getElementsByClassName('music-img')[0];
// var musicStop = document.getElementsByClassName('music-img-page-stop')[0];

// var count = 1;
// musicImg.onclick = function () {
//     if (count == 0) {
//         // 暂停音乐
//         musicAudio.pause();
//         count++;
//         console.log(count);
//         musicControls.classList.remove("musicRotate");

//     } else {
//         // 开始播放音乐，并将count值还原
//         musicAudio.play();
//         count = 0;
//         musicControls.classList.add("musicRotate");
//     }
// }

startGame.onclick = function () {
    playBackgroundMusic();
    // musicAudio.play();
    // musicControls.classList.add("musicRotate");


    twoPage.style.display = "none";
    topImg.classList.add("top-imgt");
    setTimeout(function () {
        qp1Img.classList.add("qipao1-imgt");
    }, 500)
    setTimeout(function () {
        t1Img.classList.add("text-img1t");
    }, 1500)
    setTimeout(function () {
        qp3Img.classList.add("qipao3-imgt");
    }, 2000)
    setTimeout(function () {
        t3Img.classList.add("text-img3t");
    }, 3000)
    setTimeout(function () {
        qp2Img.classList.add("qipao3-imgt");
    }, 3500)
    setTimeout(function () {
        t2Img.classList.add("text-img2t");
    }, 4500)
    setTimeout(function () {
        botImg.classList.add("bottom-imgt");
    }, 5500)
    setTimeout(function () {
        perSon.classList.add("persont");
        gas.classList.add("gast");
    }, 6500)
    setTimeout(function () {
        qp4Img.classList.add("qipao4-imgt");
    }, 7500)
    setTimeout(function () {
        find.classList.add("findt");
    }, 8500)

    // 第四页
    setTimeout(function () {
        threePage.style.display = "none";
    }, 10000)
    setTimeout(function () {
        topBgt.classList.add("four-top-bgt");

    }, 10200)
    setTimeout(function () {
        topPop.style.opacity = "1";
        topPop.classList.add("four-top-peoplet");
    }, 11200)
    setTimeout(function () {
        topPop.style.opacity = "1";
        topPop.classList.add("four-top-peoplet");
    }, 12200)
    setTimeout(function () {
        dong1.style.opacity = "1";
        dong2.style.opacity = "1";
        dong3.style.opacity = "1";
        dt1.style.opacity = "1";
        dt2.style.opacity = "1";
        dt3.style.opacity = "1";
        // topPop.classList.add("four-top-peoplet");
        dong1.classList.add("dong1t");
        dong2.classList.add("dong2t");
        dong3.classList.add("dong3t");
        dt1.classList.add("dong-text1t");
        dt2.classList.add("dong-text2t");
        dt3.classList.add("dong-text3t");

    }, 13200)
    setTimeout(function () {
        // fourQp.style.opacity = "1";
        fourQp.classList.add("four-qipaot");
    }, 14200)
    setTimeout(function () {
        fourTxt1.classList.add("four-text1t");
    }, 15200)
    setTimeout(function () {
        fourTxt2.classList.add("four-text2t");
    }, 16200)
    setTimeout(function () {
        fourTxt3.classList.add("four-text3t");
    }, 17200)
    setTimeout(function () {
        fourBottomBg.classList.add("four-bottom-bgt");
        zzz1.classList.add("zzz1t");
        zzz2.classList.add("zzz2t");
        zzz3.classList.add("zzz3t");
        dong4.classList.add("dong4t");
        dong5.classList.add("dong5t");
        dong6.classList.add("dong6t");
        dong7.classList.add("dong7t");
        dongText4.classList.add("dong-text4t");
    }, 18200)
    // 第五页
    setTimeout(function () {
        fourPage.style.display = "none";
    }, 20500)
    setTimeout(function () {
        fiveTopBg.classList.add("five-top-bgt");
    }, 21500)
    setTimeout(function () {
        fiveTopHead.classList.add("five-top-headt");

    }, 22500)
    setTimeout(function () {
        fiveTopBody.classList.add("five-top-bodyt");
        // wenhao.classList.add("wenhaot");
        fiveTopQpao.classList.add("five-qipaot");

    }, 23500)
    setTimeout(function () {
        wenhao.classList.add("five-textt");
    }, 24500)
    setTimeout(function () {
        fiveBottomBg.classList.add("five-bottom-bgt");
    }, 25500)
    setTimeout(function () {
        fiveBottomBody.classList.add("five-bottom-bodyt");
        fiveBottomHead.classList.add("five-bottom-headt");
        r2.classList.add("rt");
        fiveAD.classList.add("five-ADt");
    }, 26500)
    setTimeout(function () {
        fiveQiPao.classList.add("five-qipaot");
    }, 27500)
    setTimeout(function () {
        fiveText.classList.add("five-textt");
    }, 28500)
    // 第六页
    setTimeout(function () {
        fivePage.style.display = "none";
    }, 30500)
    setTimeout(function () {
        sixTopBg.classList.add("six-top-bgt");
        sixTopBg1.classList.add("six-top-bgt");
        sixTopBg2.classList.add("six-top-bgt");
        sixTopBg3.classList.add("six-top-bgt");
        sixTopAD.classList.add("six-top-bgt");
    }, 31500)
    setTimeout(function () {
        sixTopSu.classList.add("six-top-zhangt");
        sixTopzhang.classList.add("six-top-zhangt");
        sixTopZhangHead.classList.add("six-top-zhang-headt");
        r3.classList.add("rt");
    }, 32500)
    setTimeout(function () {
        sixQipao1.classList.add("six-qipao1t");
    }, 33500)
    setTimeout(function () {
        sixText1.classList.add("six-text1t");
    }, 34500)
    // setTimeout(function(){
    //     sixTopZhangHead.classList.add("six-top-zhangheadt");
    // },39000)
    setTimeout(function () {
        sixQipao2.classList.add("six-qipao2t");
    }, 35500)
    setTimeout(function () {
        sixText2.classList.add("six-text2t");
    }, 36500)
    setTimeout(function () {
        sixBottomBg.classList.add("six-bottom-bgt");
        star1.classList.add("start");
        star2.classList.add("start");
        star3.classList.add("start");
        star4.classList.add("start");
        star5.classList.add("start");
        star6.classList.add("start");
    }, 37500)
    setTimeout(function () {
        sixQipao3.classList.add("six-qipao3t");
    }, 38500)
    setTimeout(function () {
        sixText3.classList.add("six-text3t");
    }, 39500)
    setTimeout(function () {
        sixQipao4.classList.add("six-qipao4t");
    }, 40500)
    setTimeout(function () {
        sixText4.classList.add("six-text4t");
    }, 41500)
    setTimeout(function () {
        sixText5.classList.add("six-text5t");
    }, 42500)
    setTimeout(function () {
        sixPage.style.display = "none";
    }, 45000)
    // 第七页
    setTimeout(function () {
        sevenTopBg.classList.add("seven-top-bgt");
    }, 46000)
    setTimeout(function () {
        sevenPeople.classList.add("seven-peoplet");
        fengche.classList.add("fengchet");
        r.classList.add("rt");
    }, 47000)
    setTimeout(function () {
        sevenCenterBg1.classList.add("seven-center-bg1t");
    }, 48000)
    setTimeout(function () {
        sevenCenterBg2.classList.add("seven-center-bg2t");
    }, 49000)
    setTimeout(function () {
        sevenCenterBg3.classList.add("seven-center-bg3t");
    }, 50000)
    setTimeout(function () {
        sevenPeople1.classList.add("seven-people1t");
    }, 51000)
    setTimeout(function () {
        fengzheng.classList.add("fengzhengt");
        tuoluo.classList.add("tuoluot");
        r1.classList.add("rt");
        fengche2.classList.add("fengche2t");
        gunzi.classList.add("gunzit");
    }, 52000)
    setTimeout(function () {
        sevenbottomBg.classList.add("seven-bottom-bgt");
    }, 53000)
    setTimeout(function () {
        ad1.classList.add("flowerstar1");
        ad2.classList.add("flowerstar1");
        ad3.classList.add("flowerstar1");
        cherry.classList.add("flowerstar1")
        tea.classList.add("flowerstar1");
        orange.classList.add("flowerstar1");
        pot.classList.add("flowerstar1");
        flower1.classList.add("flowerstar");
        flower2.classList.add("flowerstar");
        flower3.classList.add("flowerstar");
        flower4.classList.add("flowerstar");
        sstar.classList.add("flowerstar");
        sstar1.classList.add("flowerstar");
        sstar2.classList.add("flowerstar");
        sstar3.classList.add("flowerstar");
        sstar4.classList.add("flowerstar");
        sstar5.classList.add("flowerstar");
        sstar6.classList.add("flowerstar");
        sstar7.classList.add("flowerstar");
        sstar8.classList.add("flowerstar");
        sstar9.classList.add("flowerstar");
        sstar10.classList.add("flowerstar");
        sstar11.classList.add("flowerstar");
    }, 54000)
    // setTimeout(function(){


    // },61000)
    // 八
    setTimeout(function () {
        sevenPage.style.display = "none";
    }, 56000)
    setTimeout(function () {
        eightTopBg.classList.add("eight-top-bgt");
    }, 57000)
    setTimeout(function () {
        bird1.classList.add("birdt");
    }, 58000)
    setTimeout(function () {
        bird2.classList.add("birdt");
    }, 59000)
    setTimeout(function () {
        eightPeople.classList.add("eight-peoplet");
    }, 60000)
    setTimeout(function () {
        eightLeftBg.classList.add("eight-left-bgt");
    }, 61000)
    setTimeout(function () {
        eightLeftPeople.classList.add("eight-left-peoplet");
    }, 62000)
    setTimeout(function () {
        eightRightBg1.classList.add("eight-right-bgt");

    }, 63000)
    setTimeout(function () {
        dangong.classList.add("nineplay");
        eightFlower1.classList.add("flowerstar");
        eightStar1.classList.add("flowerstar");
    }, 64000)
    setTimeout(function () {
        eightRightBg2.classList.add("eight-right-bgt");
    }, 65000)
    setTimeout(function () {
        mianhua.classList.add("nineplay");
        eightFlower2.classList.add("flowerstar");
        eightStar2.classList.add("flowerstar");
    }, 66000)
    setTimeout(function () {
        eightRightBg3.classList.add("eight-right-bgt");
    }, 67000)
    setTimeout(function () {
        candy.classList.add("nineplay");
        candy1.classList.add("nineplay");
        eightStar3.classList.add("flowerstar");
        eightStar4.classList.add("flowerstar");
        eightStar5.classList.add("flowerstar");
        eightStar6.classList.add("flowerstar");
    }, 68000)
    setTimeout(function () {
        eightPage.style.display = "none";
    }, 7000)

    setTimeout(function () {
        nineBg.classList.add("nine1t");
        nineText.classList.add("nine1t");
        logo.classList.add("nine1t");
        oval1.classList.add("nine1t");
        oval2.classList.add("nine1t");
        nineAd1.classList.add("nine1t");
        nineAd2.classList.add("nine1t");
        nineAd3.classList.add("nine1t");

        nineStar1.classList.add("flowerstar");
        nineStar2.classList.add("flowerstar");
        nineStar3.classList.add("flowerstar");
        nineStar4.classList.add("flowerstar");
        nineStar5.classList.add("flowerstar");
        nineStar6.classList.add("flowerstar");
        nineStar7.classList.add("flowerstar");
        nineStar8.classList.add("flowerstar");
        nineStar9.classList.add("flowerstar");
        nineStar10.classList.add("flowerstar");
        nineStar11.classList.add("flowerstar");
        ninePeople1.classList.add("nineshake");
        // ninePeople1.style.display = "none";
        ninePeople2.classList.add("nineshake");
        // ninePeople2.style.display = "none";

    }, 71000)

    // setTimeout(function(){
    //     ninePeople1.style.display = "block";
    // },74500)
    setTimeout(function () {
        frame1.classList.add("nine1t");
        frame2.classList.add("nine1t");
        frame3.classList.add("nine1t");
        taste1.classList.add("nine1t");
        taste2.classList.add("nine1t");
        taste3.classList.add("nine1t");
    }, 72000)
}




