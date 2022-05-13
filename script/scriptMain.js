             // Медленный скрол
             const links = document.querySelectorAll(".up");
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
                     // Button Up переход вверх
        window.onscroll=function(){scrollFunction()};
        const upbuttons=document.querySelectorAll(".button-top");
        for (const upbutton of upbuttons) {
            upbutton.addEventListener("click", clickHandler);
        }
        function clickHandler(e) {
             e.preventDefault();
             const href=this.getAttribute("href");
             document.querySelector(href).scrollIntoView({
              behavior:"smooth"
        });
        }
        function scrollFunction(){
            if ( document.body.scrollTop >1000 || document.documentElement.scrollTop > 1000){   
                
                document.getElementById("btnUp").className="button-top visible";
            } else {
                 document.getElementById('btnUp').className ='button-top hidden';
            }
        }
    //блок майн
    var docWidth, ratiox, y, b, k, docHeight, docRatio, div11 = document.getElementsByClassName('main')[0];
    let el_left=document.getElementsByClassName('visual')[0];
    let el_main=document.getElementsByClassName('main')[0];
    var el_img = document.getElementById("id_img");
      var root = document.querySelector(':root');
      var rootStyles = getComputedStyle(root);
      var mainColor = rootStyles.getPropertyValue('--margin-left-VAR');
      var S11 = rootStyles.getPropertyValue('--S1');
    let el_con_inf = document.getElementsByClassName('content-info')[0];
    let el_workout = document.getElementsByClassName('workout')[0];
    el_workout.style.cssText = "";
    var el_company = document.getElementById("id_company"); //блок о компании
    var el_company3 = document.getElementById("id_com_box3"); //блок о компании
    var el_company4 = document.getElementById("id_com_box4"); //блок о компании
    var el_company5 = document.getElementById("id_com_box5"); //блок о компании
    var el_company6 = document.getElementById("id_com_box6"); //блок о компании
    var p1, m1, m2, m3, m4, z1, z2, p, m; //блок о компании
    onresize = function() {
    docWidth = document.documentElement.clientWidth;
    docHeight = document.documentElement.clientHeight;
    docRatio = docWidth / docHeight;
    var S11 = rootStyles.getPropertyValue('--S1');
  if (docWidth>750 && docWidth<1124) {
     k=1.177;
     x=docWidth+17;
     b=-478;
     y=k*x+b;
     el_left.style.height =(y) +'px';

        m4 = el_company6.offsetWidth, m3 = el_company5.offsetWidth, m2 = el_company4.offsetWidth, m1 = el_company3.offsetWidth; //Ширина блока ; 
        p1 = el_company.offsetWidth; //Ширина контейнера
        m = p1 - (m1 + m2 + m3 + m4); //блок о компании m-ширина свободного пространства
        p = (m / 3); // Ширина пробела
        z1 = p - (((p1) / 4) - m1); // Довесок к полной ширине пробела
        z2 = p - (((p1) / 4) - m4); // Довесок к полной ширине пробела
        el_company4.style.marginLeft = (Math.trunc(z1)) + 'px'; //блок о компании 
        el_company5.style.marginRight = (Math.trunc(z2)) + 'px'; //маргин блока
   
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
  }
  else if (docWidth>1124) {
    el_left.style.height ='850px';
    [...document.getElementsByClassName('div5')].forEach(
    item => item.style.backgroundColor = "red");
    el_h1.style.fontSize=48 +'px';
    el_p1.style.fontSize=40 +'px';
    el_img.style.width =132+'%';
    el_con_inf.style.marginTop = 13 + "%";
}
else if (docWidth<750) {
    el_h1.style.fontSize=26 +'px';
    el_p1.style.fontSize=26 +'px';
}
else {} 
if (S11==1) {
  document.getElementById("modal-reg").style.zoom = 0.5;
}
else if (S11==2){ document.getElementById("modal-reg").style.zoom = 0.4;
}
else if (S11==0){document.getElementById("modal-reg").style.zoom = 1;}
}
function resizeFont(div, width, height, size)
{
    var ratio = width / height;
    
    if (docRatio < ratio) div.style.fontSize = height * size / 14062 + 'vw';
    else if (docRatio > ratio) elem.style.fontSize = width * size / 14062 + 'vh';
}
onresize();
function openModal() {
  document.getElementById("modal").style.top="20px";
  }
function closeModal() {
   document.getElementById("modal").style.top ="-460px";
  }
function openInstagram() {
  window.open("https://instagram-my.ru");  
}
function openFacebook() {
  window.open("https://youtu.be/ueD8tLcNVSQ");
}
function openEmail() {
  window.open("mailto:info@freefit.com");
}
        //Modal Registration

      function openModalReg() {
          document.getElementById("modal-reg").style.display = "block";
      }
      function closeModalReg() {
          document.getElementById("modal-reg").style.display = "none";
      }
