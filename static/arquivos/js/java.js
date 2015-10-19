




/*
     FILE ARCHIVED ON 1:30:08 Dec 29, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:40:29 Sep 23, 2015.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
$(document).ready(function() {

<!-- Login -->
$("#loginuser").click( function () { 
if ( $(this).val() == 'Usuário' ) {$(this).val('')} });
$("#loginpass").click( function () { 
if ( $(this).val() == 'Senha' ) {$(this).val('')} });

$("#loginuser").blur(
function () {
if ( $(this).val() == '' ){$(this).val('Usuário')}
});

<!-- Se não existe Imagem Destaque, margin-bottom:35px no Menu -->
if ( $("div.col-d").length == 0 ) { 
    $("div.menu").css("margin-bottom","35px")
 }

<!-- Diminuindo Dicas e Opiniões com acordo da altura da página -->
var alturalivre = ($("div.conteudo").height()  - ($("div.col-a, div.col-e").height() + 280));
if (alturalivre >= 110) { $("div.opinioes:gt(0)").hide() } else { 
	var quantas = (($("div.col-b").height() - $("div.col-a, div.col-e").height()) / 110);
	quantas = parseInt(quantas);
	$("div.opinioes:gt("+quantas+")").hide();
};

<!-- Adicionando classe para o primeiro e o ultimo título do menu (primeiro nivel) -->
$("ul#nav li a:first").addClass("first");
$("ul#nav li a:last").addClass("last");

<!-- Formulário do Contato  -->
$("#ddd1,#ddd2,#tel1,#tel2,#conheceu44,#conheceu55,#precisa").css("color","#b0b0b0").focus( function (){
	
	var campo = $(this).val();

	if (campo == 'DDD'){ $(this).val("").css({ "color":"#555" }); }
	if (campo == 'Nome do amigo'){ $(this).val("").css({ "color":"#555" }); }
	if (campo == 'XXXX-XXXX'){ $(this).val("").css({ "color":"#555" }); }
	if (campo == 'Qual outro meio?'){ $(this).val("").css({ "color":"#555" }); }
	if (campo == 'Gostaria de receber informacoes sobre'){ $(this).val("").css({ "color":"#555" }); }
	
	});
});

<!-- Formulario Dicas e Opinioes -->
function onDicas(){
$("div#dicaseopiniao").show();
$("div#deixeopiniao").hide();
$("div.opinioes").hide();
}