var log = function(){
  console.log.apply(console,arguments)
}
log('js可以用')
/*1，找到图片的位置，给图片添加事件
  1),先给原先的图片加上hide属性
  2），给第二张图片删除hide属性
*/
var img1 = document.querySelector('#imgmini1')
img1.addEventListener('click',function(event){
  var a = document.querySelector('#imgo1')
  var b = document.querySelector('#imgo2')
  var c = document.querySelector('#imgo3')
  if(a.classList.contains('hide')){
    a.classList.remove('hide')
    b.classList.add('hide')
    c.classList.add('hide')
  }
})
var img2 = document.querySelector('#imgmini2')
img2.addEventListener('click',function(){
  var a = document.querySelector('#imgo1')
  var b = document.querySelector('#imgo2')
  var c = document.querySelector('#imgo3')
  if(b.classList.contains('hide')){
    b.classList.remove('hide')
    log('1')
    a.classList.add('hide')
    c.classList.add('hide')
  }
})
var img3 = document.querySelector('#imgmini3')
img3.addEventListener('click',function(){
  var a = document.querySelector('#imgo1')
  var b = document.querySelector('#imgo2')
  var c = document.querySelector('#imgo3')
  if(c.classList.contains('hide')){
    c.classList.remove('hide')
    b.classList.add('hide')
    a.classList.add('hide')
  }
})
log('到底了')
