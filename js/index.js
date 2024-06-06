// 定义变量 var，let,const 
// var oneNumber; //undefined

// 获取节点
// getElementById 拿到页面中拥有该id选择器的第一个节点
// getElementsByClassName 拿到页面中拥有该类选择器的所有节点，是一个数组
// var oneNumber = document.getElementById("one-number");
// var oneNumber1 = document.getElementsByClassName("one-number")[0]

// console.log()
// console.log(oneNumber);
// console.log(oneNumber1);

// 拿到节点内容
// console.log(oneNumber.innerHTML);
// console.log(oneNumber.innerText);

// 给节点内容赋值
//  <i>80%</i> 富文本，带有标签的文本
// innerHTML 解析富文本；innerText不能解析富文本
// oneNumber.innerHTML="<i>80%</i>";
// oneNumber.innerText="<i>80%</i>";

var oneNumber = document.getElementById("one-number");
var oneNumberValue = oneNumber.innerHTML;
var onePage = document.getElementsByClassName("one-page")[0];
var twoPage = document.getElementsByClassName("two-page")[0];
var threePage = document.getElementsByClassName("three-page")[0];
var fourPage = document.getElementsByClassName("four-page")[0];
var fivePage = document.getElementsByClassName("five-page")[0];
// console.log(oneNumber);
// typeof 检查变量类型
// console.log(typeof oneNumber);
// 转数据类型
oneNumberValue = Number(oneNumberValue);
// 定时器 在指定时间后执行代码
// setInterval(方法 ， 时间) 
// 定义方法 function([参数]){方法体}
   var IntervalNumber =  setInterval(function(){
        if(oneNumberValue < 100){
            oneNumberValue = oneNumberValue+1;
            oneNumber.innerHTML = oneNumberValue;
        }else{
        clearInterval(IntervalNumber);
        }
    },30) 
    
// 时间4s

 // setTimeout(方法 ， 时间)
//  
 setTimeout(function(){
    // 节点样式
    onePage.style.animation="opac 2s linear forwards 2s";
    // onePage.style.zIndex="1";    

 },2000)
 setTimeout(function(){
    twoPage.style.display="";
 } ,3000)
 setTimeout(function(){
    onePage.style.display="none"
},4000)

//  var zh = document.getElementsById("zh");
//  var sh = document.getElementsById("sh");
//  var show = document.getElementsByClassName("people-su-name");
// 元素淡入
// fadeIn(时间)
//  zh.fadeIn(2000);
//  sh.fadeIn(2000);

// 页面跳转
var startGame = document.getElementsByClassName("start-game")[0];
// 第三页 气泡完了放下面
var qipao1Img = document.getElementsByClassName("qipao1-img")[0];
var find = document.getElementsByClassName("find")[0];
var bottomImg = document.getElementsByClassName("bottom-img")[0];
var qipao3Img = document.getElementsByClassName("qipao3-img")[0];

// 点击事件 onclick
startGame.onclick = function(){
    // 添加类名
    setTimeout(function(){
        twoPage.classList.add("tow-paget") 
    },2000)
    
    // threePage.style.display="";
    setTimeout(function(){
        twoPage.style.display="none";
    },4000)
    setTimeout(function(){
        threePage.style.display="";
    },6000)
    setTimeout(function(){
        // qipao3Img.style.animation="qipao 1s forwards 2s";
            threePage.style.animation="opac 2s linear forwards";   
        },8000)
        setTimeout(function(){
            threePage.style.display="none";
            fourPage.style.display="";
        },10000)
}





// var fourPage = document.getElementsByClassName("four-page")[0];
var fourTopPeople = document.getElementsByClassName("four-top-people")[0];
var fourText1 = document.getElementsByClassName("four-text1")[0];
var fourQipao = document.getElementsByClassName("four-qipao")[0];
var dong1 = document.getElementsByClassName("dong1")[0];
var dongText1 = document.getElementsByClassName("dong-text1")[0];
    
    // setTimeout(function(){
    //     fourTopPeople.style.animation="person1 2s linear forwards ";
    //     setTimeout(function(){
    //         dong1.style.animation="dong1 0.7s linear backwards 3 2s";
    //         dongText1.style.animation="dong 0.7s linear backwards 3 2s";
    //     },3000)
    //     dongText1.style.animation="dong 0.7s linear backwards 3 2s";
        
    //     setTimeout(function(){
    //         fourQipao.style.animation="text1 2s forwards 4s";
    //     fourText1.style.animation="text1 1s backwards 4s";
    //     },3000)
    // },3000)
    
    // setTimeout(function(){
        // fourPage.style.animation="opac 2s linear forwards ";
        // fivePage.style.display="";
        // setTimeout(function(){
        //     fourPage.style.display="none";
        // },9000)
    // },9000)

    // setTimeout(function(){
        // fivePage.style.animation="opac 2s linear forwards ";
        // sixPage.style.display="";
        // setTimeout(function(){
        //     fivePage.style.display="none";
        // },5000)
    // })