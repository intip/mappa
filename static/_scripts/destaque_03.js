




/*
     FILE ARCHIVED ON 1:19:22 Dec 28, 2005 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:21:09 Sep 23, 2015.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
<!--
var total = 2; 
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
document.write('<a href="/servicos/servicos_solicitacao.asp"> <img src="_images/destaques_home/destaque_viagens_04.gif" border=0> </a>')
}

if(i == 2) {
document.write('<a href="/servicos/servicos_solicitacao.asp"> <img src="_images/destaques_home/destaque_viagens_04.gif" border=0> </a>')
}


// -->