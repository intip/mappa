




/*
     FILE ARCHIVED ON 1:04:19 Dec 28, 2005 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:21:20 Sep 23, 2015.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
<!--
var total = 3; 
var nome_arq = "default"; 
var aleatorio = Math.random();
var valor = 1/total;
var achou = false;
var indice = 0;
for (var i=0; i<total && !achou; i++) {
        if (aleatorio>i*valor && aleatorio<=(i+1)*valor) {
                indice = i;
                achou = true;
        }
}

if(i == 1) {
document.write(' <img src="_images/home/foto_01.jpg" border=0>')
}

if(i == 2) {
document.write(' <img src="_images/home/foto_02.jpg" border=0>')
}

if(i == 3) {
document.write(' <img src="_images/home/foto_03.jpg" border=0>')
}


// -->