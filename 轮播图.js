var log = function(){
  console.log.apply(console,arguments)
}
log('开始了')
//找到按钮，添加事件
var nextButton = document.querySelector('#id-button-next')
nextButton.addEventListener('click',function(){
  next()
  clearInterval(int)
  log('暂停')
})
//设置下一张按钮的函数
var imgsNumber = 3
var rightIndex = 0
var next = function() {
    rightIndex = (rightIndex + 1) % imgsNumber
    var rightActive = document.querySelector('.active')
    rightActive.classList.remove('active')
    var imgs = document.querySelectorAll('.slideimg')
    imgs[rightIndex].classList.add('active')
    // 白点跟着图片走
    var rightIndicator = document.querySelector('.white')
    rightIndicator.classList.remove('white')
    var indicators = document.querySelectorAll('.indicators')
    indicators[rightIndex].classList.add('white')
}
var uextButton = document.querySelector('#id-button-uext')
uextButton.addEventListener('click',function(){
    uext()
  //  clearInterval(int)
})
// 上一张按钮的函数
var uext = function() {
    rightIndex = (rightIndex + 2) % imgsNumber
    var rightActive = document.querySelector('.active')
    rightActive.classList.remove('active')
    var imgs = document.querySelectorAll('.slideimg')
    imgs[rightIndex].classList.add('active')
    //白点跟着图片走 
    var rightIndicator = document.querySelector('.white')
    rightIndicator.classList.remove('white')
    var indicators = document.querySelectorAll('.indicators')
    indicators[rightIndex].classList.add('white')

}

//var int = setInterval(next,1000)
