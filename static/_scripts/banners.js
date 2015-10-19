




/*
     FILE ARCHIVED ON 14:48:50 Nov 29, 2006 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:20:53 Sep 23, 2015.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
<!--
var total = 4; 
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
document.write('<a href="/institucional/index.asp"> <img src="/_images/banners/banner_institucional.gif" border=0> </a>')
}
if(i == 2) {
document.write('<img src="/_images/banners/banner_10anos.gif" border=0>')
}
if(i == 3) {
document.write('<img src="/_images/banners/banner_10anos.gif" border=0>')
}

if(i == 4) {
document.write('<img src="/_images/banners/banner_10anos.gif" border=0>')
}
// -->