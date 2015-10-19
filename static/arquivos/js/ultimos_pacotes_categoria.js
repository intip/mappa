




/*
     FILE ARCHIVED ON 10:34:45 Dec 24, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:41:52 Sep 23, 2015.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
HOST = "";

$(function () {

    var URL_ULTIMOS = HOST + '/modulos/' + APP_ID + '/getPacotesCategoriax'
    var p = Pagination({

        layout_page_total: PG_TOTAL,
        layout_page_items_total: ITEMS_PAGINA,
        
        list_container_add: function (item, index) {
          $('<div class="box-roteiros"><a href="' + item.url + '"><img border="0" src="'+ item.img_destaque +'" class="img-sombra"></a><div class="text-roteiros"><h1>'+ item.titulo +'</h1><a href="' + item.url + '">'+ item.resumo.substr(0, 100) +'...</a><br><a href="' + item.url + '" class="mais-info">mais informações<img src="imgs/seta.gif"></a></div></div>').appendTo(this.list_container);
        },
		        
        page_container_add: function (page_number) {
                var self = this;
                var item = $('<a href="javascript: void(0)">' + page_number + '</a>').click(function () { 
                    self.page_current = page_number;
                    self._show_pages();
                    self.page_click(self, page_number) 
                });
                if (self.page_current == page_number)
                  item.addClass("current");
                $(self.page_container).append(item);
         },
        
        set_items: function (items) {
            var self = this;
            var last_data = undefined;
            this.list_container_empty();
            $.each(items, function (index, item) {
                self.list_container_add(item, index);
            })
            $('<div class="clear"></div>').appendTo(this.list_container);
        },
        
		
        control_first_enable: function () {
            $(this.control_first).removeClass('inactive')
        },
        control_first_disable: function () {
            $(this.control_first).addClass('inactive')
        },
        control_previous_enable: function () {
            $(this.control_previous).removeClass('inactive')
        },
        control_previous_disable: function () {
            $(this.control_previous).addClass('inactive')
        },
        control_next_enable: function () {
            $(this.control_next).removeClass('inactive')
        },
        control_next_disable: function () {
            $(this.control_next).addClass('inactive')
        },
        control_last_enable: function () {
            $(this.control_last).removeClass('inactive')
        },
        control_last_disable: function () {
            $(this.control_last).addClass('inactive')
        },
        
        page_click: function (self, page_number) {
            $(self.list_container).html('<img class="loadingpag" src="/arquivos/imgs/ajax-loader.gif" />')
            var offset = (page_number-1) * ITEMS_PAGINA;
            loading(self.list_container)
            window.location.hash = 'pg_items'
            self.page_current = page_number;
            $.get(self.URL, {
                    'id_pagina':ID_PAGINA,
                    'categoria':ID_CATEGORIA,
                    'limit': ITEMS_PAGINA,
                    'offset': offset
                },
                function (data) {
                    if (data.res.length == 0) {
                        $(self.list_container).html('<center>Busca não retornou resultados.</center>')
                    }
                    else {
                        self.set_items(data.res)
                        self.set_items_total(data.qtde)
                        $(self.control_previous).nextAll().eq(page_number-1).addClass('current');
                    }
                    window.location.hash = 'pg_items';
                    self._show_pages();
                },
                'json')
        }
    
    })
    p.URL = URL_ULTIMOS
   
    function loading(to) {
        $(to).empty().append('<img class="loadingpag" src="/arquivos/imgs/ajax-loader.gif"/>')
    }
    
    p.set_items_total(PG_TOTAL)
    $(p.control_previous).next().addClass('current');
 
})
