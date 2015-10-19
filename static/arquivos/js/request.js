




/*
     FILE ARCHIVED ON 10:58:51 Dec 24, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:41:39 Sep 23, 2015.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
function REQUEST()
{this.queryString=new QUERY_STRING();}
REQUEST.prototype.hasKey=function(key)
{return this.getItem(key)!=null;}
REQUEST.prototype.getItem=function(key)
{return this.queryString.getItem(key);}
function QUERY_STRING()
{this.queryString=window.location.search.replace("?","");this.keys=[];this.values=[];var brokenQueryString=this.queryString.split("&");for(var i=0;i<brokenQueryString.length;i++)
{brokenItem=brokenQueryString[i].split("=");this.keys.push(brokenItem[0]);this.values.push(brokenItem[1]);}}
QUERY_STRING.prototype.getItem=function(key)
{for(var i=0;i<this.keys.length;i++)
{if(key==this.keys[i])
{return this.values[i];}}
return null;}
QUERY_STRING.prototype.hasKey=function(key)
{return this.getItem(key)!=null;}


