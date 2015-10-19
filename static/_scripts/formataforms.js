




/*
     FILE ARCHIVED ON 20:23:28 Dec 31, 2005 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:21:14 Sep 23, 2015.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/

function setHelp(txt) { help.innerText = txt ; }
function setHelp2(txt) { help2.innerText = txt ; }
function setHelp3(txt) { help3.innerText = txt ; }

  
function imprimePagina()
{
	window.open('<%=session.getAttribute("arquivoRetorno")%>?impressao=true','Impressão','resizable=no,status=yes,width=500,height=500,scrollbars=yes');
	return false;
}

var da = (document.all) ? 1 : 0;
var pr = (window.print) ? 1 : 0;
var mac = (navigator.userAgent.indexOf("Mac") != -1); 

function printPage()
{
  if (pr) // NS4, IE5
    window.print()
  else if (da && !mac) // IE4 (Windows)
    vbPrintPage()
  else // other browsers
    alert("Desculpe seu browser não suporta esta função. Por favor utilize a barra de trabalho para imprimir a página.");
  return false;
}

if (da && !pr && !mac) with (document) {
  writeln('<OBJECT ID="WB" WIDTH="0" HEIGHT="0" CLASSID="clsid:8856F961-340A-11D0-A96B-00C04FD705A2"></OBJECT>');
  writeln('<' + 'SCRIPT LANGUAGE="VBScript">');
  writeln('Sub window_onunload');
  writeln('  On Error Resume Next');
  writeln('  Set WB = nothing');
  writeln('End Sub');
  writeln('Sub vbPrintPage');
  writeln('  OLECMDID_PRINT = 6');
  writeln('  OLECMDEXECOPT_DONTPROMPTUSER = 2');
  writeln('  OLECMDEXECOPT_PROMPTUSER = 1');
  writeln('  On Error Resume Next');
  writeln('  WB.ExecWB OLECMDID_PRINT, OLECMDEXECOPT_DONTPROMPTUSER');
  writeln('End Sub');
  writeln('<' + '/SCRIPT>');
}

function FormataDado(campo,tammax,pos,teclapres){
	var tecla = teclapres.keyCode;
//	vr = document.form[campo].value;
	// ao invés de recuperar valor do campo utilizadno o form, vou
	// pegar pelo evento<b></b>
	vr = event.srcElement.value;
	vr = vr.replace( "-", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( "/", "" );
	tam = vr.length ;

	if (tam < tammax && tecla != 8){ tam = vr.length + 1 ; }

	if (tecla == 8 ){ tam = tam - 1 ; }
			
	if ( tecla == 8 || tecla == 88 || tecla >= 48 && tecla <= 57 || tecla >= 96 && tecla <= 105 ){
		if ( tam <= 2 ){
	 		// document.form[campo].value = vr ;
			event.srcElement.value = vr;

		}
		if ( tam > pos && tam <= tammax ){
			// document.form[campo].value = vr.substr( 0, tam - pos ) + '-' + vr.substr( tam - pos, tam );}
			event.srcElement.value = vr.substr( 0, tam - pos ) + '-' + vr.substr( tam - pos, tam );
		}
			
	}
	//alert ("campo: " + document.form[campo+1].name);
//	if ( !teclapres.shiftKey && tecla == 9 && document.form[campo+1].name == "senhaConta" && document.applets['tclJava'] ){
		//alert("aki 1");
//			document.applets['tclJava'].setFocus();
//	}
}

function FormataValor(campo,tammax,teclapres) {
	var tecla = teclapres.keyCode;
//	vr = document.form[campo].value;
	vr = event.srcElement.value;

	vr = vr.replace( "/", "" );
	vr = vr.replace( "/", "" );
	vr = vr.replace( ",", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( ".", "" );
	tam = vr.length;

	if (tam < tammax && tecla != 8){ tam = vr.length + 1 ; }

	if (tecla == 8 ){	tam = tam - 1 ; }
		
	if ( tecla == 8 || tecla >= 48 && tecla <= 57 || tecla >= 96 && tecla <= 105 ){
		if ( tam <= 2 ){ 
	 		// document.form[campo].value = vr ; 
	 		event.srcElement.value = vr ; 
		}
	 	if ( (tam > 2) && (tam <= 5) ){
	 		//document.form[campo].value = vr.substr( 0, tam - 2 ) + ',' + vr.substr( tam - 2, tam ) ; 
	 		event.srcElement.value = vr.substr( 0, tam - 2 ) + ',' + vr.substr( tam - 2, tam ) ; 
		}
	 	if ( (tam >= 6) && (tam <= 8) ){
	 		//document.form[campo].value = vr.substr( 0, tam - 5 ) + '.' + vr.substr( tam - 5, 3 ) + ',' + vr.substr( tam - 2, tam ) ; 
	 		event.srcElement.value = vr.substr( 0, tam - 5 ) + '.' + vr.substr( tam - 5, 3 ) + ',' + vr.substr( tam - 2, tam ) ; 
		}
	 	if ( (tam >= 9) && (tam <= 11) ){
	 		//document.form[campo].value = vr.substr( 0, tam - 8 ) + '.' + vr.substr( tam - 8, 3 ) + '.' + vr.substr( tam - 5, 3 ) + ',' + vr.substr( tam - 2, tam ) ; 
	 		event.srcElement.value = vr.substr( 0, tam - 8 ) + '.' + vr.substr( tam - 8, 3 ) + '.' + vr.substr( tam - 5, 3 ) + ',' + vr.substr( tam - 2, tam ) ; 
		}
	 	if ( (tam >= 12) && (tam <= 14) ){
	 		//document.form[campo].value = vr.substr( 0, tam - 11 ) + '.' + vr.substr( tam - 11, 3 ) + '.' + vr.substr( tam - 8, 3 ) + '.' + vr.substr( tam - 5, 3 ) + ',' + vr.substr( tam - 2, tam ) ; 
	 		event.srcElement.value = vr.substr( 0, tam - 11 ) + '.' + vr.substr( tam - 11, 3 ) + '.' + vr.substr( tam - 8, 3 ) + '.' + vr.substr( tam - 5, 3 ) + ',' + vr.substr( tam - 2, tam ) ; 
		}
	 	if ( (tam >= 15) && (tam <= 17) ){
	 		//document.form[campo].value = vr.substr( 0, tam - 14 ) + '.' + vr.substr( tam - 14, 3 ) + '.' + vr.substr( tam - 11, 3 ) + '.' + vr.substr( tam - 8, 3 ) + '.' + vr.substr( tam - 5, 3 ) + ',' + vr.substr( tam - 2, tam ) ;
	 		event.srcElement.value = vr.substr( 0, tam - 14 ) + '.' + vr.substr( tam - 14, 3 ) + '.' + vr.substr( tam - 11, 3 ) + '.' + vr.substr( tam - 8, 3 ) + '.' + vr.substr( tam - 5, 3 ) + ',' + vr.substr( tam - 2, tam ) ;
		}
	}		
	
//	for (var ct = 0; ct < document.form.elements.length; ct++) {
//		if (document.form.elements[ct].name == document.form.elements[campo].name) {
//			if ( !teclapres.shiftKey && tecla == 9 && document.form.elements[ct+1] && document.form.elements[ct+1].name == "senhaConta" && document.applets['tclJava'] ) {
//				document.applets['tclJava'].setFocus();
//			}
//		}
//	}
}


//Verificar se é numérico
function isNumeric(valor)
{
	for( var i = 0 ; i < valor.length ; i++ )
		if( (valor.charAt( i ) < "0") || (valor.charAt( i ) > "9") )
			return false;
	return true;
}

function Tecla(e)
{
	if (document.all) // Internet Explorer
		var tecla = event.keyCode;
	else if(document.layers) // Nestcape
		var tecla = e.which;
		if (tecla > 47 && tecla < 58) // numeros de 0 a 9
			return true;
		else
			{
				if (tecla != 8) // backspace
					event.keyCode = 0;
					//return false;
				else
					return true;
			}
}
function FormataCpf(campo,tammax,teclapres) {
	var tecla = teclapres.keyCode;
	// vr = document.form[campo].value;
	vr = event.srcElement.value;
	vr = vr.replace( "/", "" );
	vr = vr.replace( "/", "" );
	vr = vr.replace( ",", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( "-", "" );
	vr = vr.replace( "-", "" );
	vr = vr.replace( "-", "" );
	vr = vr.replace( "-", "" );
	vr = vr.replace( "-", "" );
	tam = vr.length;

	if (tam < tammax && tecla != 8){ tam = vr.length + 1 ; }

	if (tecla == 8 ){	tam = tam - 1 ; }
		
	if ( tecla == 8 || tecla >= 48 && tecla <= 57 || tecla >= 96 && tecla <= 105 ){
		if ( tam <= 2 ){ 
	 		event.srcElement.value = vr ; }
	 	if ( (tam > 2) && (tam <= 5) ){
	 		event.srcElement.value = vr.substr( 0, tam - 2 ) + '-' + vr.substr( tam - 2, tam ) ; }
	 	if ( (tam >= 6) && (tam <= 8) ){
	 		event.srcElement.value = vr.substr( 0, tam - 5 ) + '.' + vr.substr( tam - 5, 3 ) + '-' + vr.substr( tam - 2, tam ) ; }
	 	if ( (tam >= 9) && (tam <= 11) ){
	 		event.srcElement.value = vr.substr( 0, tam - 8 ) + '.' + vr.substr( tam - 8, 3 ) + '.' + vr.substr( tam - 5, 3 ) + '-' + vr.substr( tam - 2, tam ) ; }
	 	if ( (tam >= 12) && (tam <= 14) ){
	 		event.srcElement.value = vr.substr( 0, tam - 11 ) + '.' + vr.substr( tam - 11, 3 ) + '.' + vr.substr( tam - 8, 3 ) + '.' + vr.substr( tam - 5, 3 ) + '-' + vr.substr( tam - 2, tam ) ; }
	 	if ( (tam >= 15) && (tam <= 17) ){
	 		event.srcElement.value = vr.substr( 0, tam - 14 ) + '.' + vr.substr( tam - 14, 3 ) + '.' + vr.substr( tam - 11, 3 ) + '.' + vr.substr( tam - 8, 3 ) + '.' + vr.substr( tam - 5, 3 ) + '-' + vr.substr( tam - 2, tam ) ;}
	}		
}
 
function SaltaCampo (campo,prox,tammax,teclapres){
	var tecla = teclapres.keyCode;
	vr = event.srcElement.value;
	if( tecla == 109 || tecla == 188 || tecla == 110 || tecla == 111 || tecla == 223 || tecla == 108 ){
		recuperaPai(event.srcElement.parentElement, "FORM")[campo].value = vr.substr( 0, vr.length - 1 ); }
	else{
	 	vr = vr.replace( "-", "" );
	 	vr = vr.replace( "/", "" );
	 	vr = vr.replace( "/", "" );
	 	vr = vr.replace( ",", "" );
	 	vr = vr.replace( ".", "" );
	 	vr = vr.replace( ".", "" );
	 	vr = vr.replace( ".", "" );
	 	vr = vr.replace( ".", "" );
	 	tam = vr.length;	
		
	 	if (tecla != 0 && tecla != 9 && tecla != 16 )
			if ( tam == tammax )	
			{
				if ( prox == "senhaConta" || (document.form.elements[prox] && document.form.elements[prox].name == "senhaConta") ) {
					if ( document.applets['tclJava'] )
						document.applets['tclJava'].setFocus();
					else if ( document.form.senhaConta )
						document.form.senhaConta.focus();
				}else
				//document.form[prox].focus() ;	
				recuperaPai(event.srcElement.parentElement, "form")[prox].focus();
			}
	}
}

function FormataMesAno(Campo,teclapres) {
	var tecla = teclapres.keyCode;
	vr = document.form[Campo].value;
	vr = vr.replace( ".", "" );
	vr = vr.replace( "/", "" );
	vr = vr.replace( "/", "" );
	tam = vr.length + 1;

	if ( tecla != 9 && tecla != 8 ){
		if ( tam > 2 && tam < 7 )
			document.form[Campo].value = vr.substr( 0, 2 ) + '/' + vr.substr( 2, tam ); }
}

function FormataData(Campo,teclapres) {
	var tecla = teclapres.keyCode;
//	vr = document.form[Campo].value;
	vr = event.srcElement.value;
	vr = vr.replace( ".", "" );
	vr = vr.replace( "/", "" );
	vr = vr.replace( "/", "" );
	tam = vr.length + 1;

	if ( tecla != 9 && tecla != 8 ){
		if ( tam > 2 && tam < 5 )
		{
//			document.form[Campo].value = vr.substr( 0, tam - 2  ) + '/' + vr.substr( tam - 2, tam );
			event.srcElement.value = vr.substr( 0, tam - 2  ) + '/' + vr.substr( tam - 2, tam );
		}
		if ( tam >= 5 && tam <= 10 )
		{
//			document.form[Campo].value = vr.substr( 0, 2 ) + '/' + vr.substr( 2, 2 ) + '/' + vr.substr( 4, 4 ); }
			event.srcElement.value = vr.substr( 0, 2 ) + '/' + vr.substr( 2, 2 ) + '/' + vr.substr( 4, 4 );
		 }
	}

//	alert ("campo");
//	for (var ct = 0; ct < document.form.elements.length; ct++) {
//		if (document.form.elements[ct].name == document.form.elements[Campo].name) {
//			if ( !teclapres.shiftKey && tecla == 9 && document.form[ct+1].name == "senhaConta" && document.applets['tclJava'] ){
//				document.applets['tclJava'].setFocus();
//			}	
//		}
//	}
}


	

//Limitador de tamanho de texto para campos do tipo Textarea	
function limita(campo){
	if(document.forms.length > 1){
		var tamanho = document.form[1][campo].value.length;
		var tex=document.form[1][campo].value;
		if (tamanho>=1199){	document.form[1][campo].value=tex.substring(0,1199); }
		return true;
		}
	else{
		var tamanho = document.form[campo].value.length;
		var tex=document.form[campo].value;
		if (tamanho>=1199){	document.form[campo].value=tex.substring(0,1199); }
		return true;
		}
}

function contacampo(campo, tamtxt){
	if(document.forms.length > 1)
		document.form[1][tamtxt].value = 1200-document.form[1][campo].value.length;
	else	
		document.form[tamtxt].value = 1200-document.form[campo].value.length;
}
 

function FormataCgc(campo,tammax,teclapres) {
	var tecla = teclapres.keyCode;
	// vr = document.form[campo].value;
	vr = event.srcElement.value;
	vr = vr.replace( "/", "" );
	vr = vr.replace( "/", "" );
	vr = vr.replace( "/", "" );
	vr = vr.replace( ",", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( ".", "" );
	vr = vr.replace( "-", "" );
	vr = vr.replace( "-", "" );
	vr = vr.replace( "-", "" );
	vr = vr.replace( "-", "" );
	vr = vr.replace( "-", "" );
	tam = vr.length;

	if (tam < tammax && tecla != 8){ tam = vr.length + 1 ; }

	if (tecla == 8 ){	tam = tam - 1 ; }
		
	if ( tecla == 8 || tecla >= 48 && tecla <= 57 || tecla >= 96 && tecla <= 105 ){
		if ( tam <= 2 ){ 
	 		event.srcElement.value = vr ; }
	 	if ( (tam > 2) && (tam <= 6) ){
	 		event.srcElement.value = vr.substr( 0, tam - 2 ) + '-' + vr.substr( tam - 2, tam ) ; }
	 	if ( (tam >= 7) && (tam <= 9) ){
	 		event.srcElement.value = vr.substr( 0, tam - 6 ) + '/' + vr.substr( tam - 6, 4 ) + '-' + vr.substr( tam - 2, tam ) ; }
	 	if ( (tam >= 10) && (tam <= 12) ){
	 		event.srcElement.value = vr.substr( 0, tam - 9 ) + '.' + vr.substr( tam - 9, 3 ) + '/' + vr.substr( tam - 6, 4 ) + '-' + vr.substr( tam - 2, tam ) ; }
	 	if ( (tam >= 13) && (tam <= 14) ){
	 		event.srcElement.value = vr.substr( 0, tam - 12 ) + '.' + vr.substr( tam - 12, 3 ) + '.' + vr.substr( tam - 9, 3 ) + '/' + vr.substr( tam - 6, 4 ) + '-' + vr.substr( tam - 2, tam ) ; }
	 	if ( (tam >= 15) && (tam <= 17) ){
	 		event.srcElement.value = vr.substr( 0, tam - 14 ) + '.' + vr.substr( tam - 14, 3 ) + '.' + vr.substr( tam - 11, 3 ) + '.' + vr.substr( tam - 8, 3 ) + '.' + vr.substr( tam - 5, 3 ) + '-' + vr.substr( tam - 2, tam ) ;}
	}		
}