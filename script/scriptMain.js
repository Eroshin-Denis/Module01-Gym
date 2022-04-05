             // Медленный скрол
             const links = document.querySelectorAll(".button-up");
             for (const link of links) {
                 link.addEventListener("click", clickHandler);
             }
             function clickHandler(e) {
             e.preventDefault();
             const href=this.getAttribute("href");
             document.querySelector(href).scrollIntoView({
             behavior: "smooth"
             });
             }
    //блок майн
    var docWidth, ratiox, y, b, k, docHeight, docRatio, div11 = document.getElementsByClassName('main')[0];
    let el_left=document.getElementsByClassName('visual')[0];
    let el_main=document.getElementsByClassName('main')[0];
    var el_img = document.getElementById("id_img");
      var root = document.querySelector(':root');
      var rootStyles = getComputedStyle(root);
      var mainColor = rootStyles.getPropertyValue('--margin-left-VAR');
    let el_con_inf = document.getElementsByClassName('content-info')[0];
    let el_workout = document.getElementsByClassName('workout')[0];
    var el_div2 = document.getElementById("div2");
    var el_div3 = document.getElementById("div3");
    var el_div4 = document.getElementById("div4");
    var el_div5 = document.getElementById("div5");
    el_workout.style.cssText = "";
    onresize = function() {
    docWidth = document.documentElement.clientWidth;
    docHeight = document.documentElement.clientHeight;
    docRatio = docWidth / docHeight;
  if (docWidth>750 && docWidth<1124) {
     k=1.177;
     x=docWidth+17;
     b=-478;
     y=k*x+b;
     el_left.style.height =(y) +'px';

    [...document.getElementsByClassName('div5')].forEach(
    item => item.style.backgroundColor = "green");
    let k1 = 0.06, x1 = x, b1 = -20;
    y1=k1*x1+b1;
    el_h1=document.getElementsByClassName('content-title')[0];
    el_h1.style.fontSize=Math.round(y1) +'px';
    
    let  k2 = 0.038, x2 = x, b2 = -3;
    el_p1=document.getElementsByClassName('content-info')[0];
    y2=k2*x2+b2
    el_p1.style.fontSize=Math.round(y2) +'px';

     let d=	768	,f=	35	, n=	372	, s, y3;
     y3=97+(((x-d)*f)/n);
     el_img.style.width =(Math.trunc(y3)) +'%';
     el_con_inf.style.marginTop = (Math.trunc(y3)-97) + "%";

     let d1=767, f1=10/182, y4= Math.trunc(f1*(x-d1));
     root.style.setProperty('--margin-left-VAR', y4+'%');

     el_div2.innerHTML=Math.trunc(y4);
     el_div3.innerHTML=(Math.trunc(y3)) +'%';
     
     el_div5.innerHTML=Math.trunc(n);
  }
  else if (docWidth>1124) {
    el_left.style.height ='850px';
    [...document.getElementsByClassName('div5')].forEach(
    item => item.style.backgroundColor = "red");
    el_h1.style.fontSize=48 +'px';
    el_p1.style.fontSize=40 +'px';
    el_img.style.width =132+'%';
    el_con_inf.style.marginTop = 13 + "%";
    el_div4.innerHTML=docWidth;
}
else if (docWidth<750) {
  [...document.getElementsByClassName('div5')].forEach(
    item => item.style.backgroundColor = "blue");
    el_h1.style.fontSize=26 +'px';
    el_p1.style.fontSize=26 +'px';
}
else {}
}
function resizeFont(div, width, height, size)
{
    var ratio = width / height;
    
    if (docRatio < ratio) div.style.fontSize = height * size / 14062 + 'vw';
    else if (docRatio > ratio) elem.style.fontSize = width * size / 14062 + 'vh';
}
onresize();




