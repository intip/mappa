




/*
     FILE ARCHIVED ON 10:41:00 Dec 24, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:40:35 Sep 23, 2015.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
function Pagination(extended) {
    var self = {
        control_first: '#paginator_first',
        control_previous: '#paginator_previous',
        control_next: '#paginator_next',
        control_last: '#paginator_last',
        layout_page_total: 5,
        layout_page_items_total: 5,
        page_container: '#paginator_pages',
        page_container_total: '#paginator_pages_total',
        page_container_add: function (page_number) {
            var self = this;
            var $a = $(' <a href="#"> ' + page_number + '</a> ').click(function () { 
                self.page_current = page_number;
                self._show_pages();
                self.page_click(self, page_number) 
            })
            $(this.page_container).append($a);
        },
        page_container_empty: function (page_number) {
            $(this.page_container).empty();
        },
        page_container_total_text: function (total) {
            $(this.page_container_total).text(total);
        },
        list_container: '#paginator_items',
        list_container_total: '#paginator_items_total',
        list_container_add: function (item, index) { 
            $(this.list_container).append(item);
        },
        list_container_empty: function () {
            $(this.list_container).empty();
        },
        list_container_total_text: function (total) {
            $(this.list_container_total).text(total);
        },
        set_items: function (items) {
            var self = this;
            this.list_container_empty();
            $.each(items, function (index, item) {
                self.list_container_add(item, index);
            })
        },
        set_current_page: function (page_number) {
            this.page_current = page_number;
        },
        set_items_total: function (total) {
            var page_total = total/this.layout_page_items_total;
            if (page_total < 1) {
                page_total = 1;
            }
            else if (total%this.layout_page_items_total > 0) {
                page_total+= 1;
            }
            page_total = Math.floor(page_total);
            this.page_container_empty();
            this.list_container_total_text(total);
            this.page_container_total_text(page_total);
            for (var i = 1; i <= page_total; i++) {
                this.page_container_add(i);
            }
            self.page_total = page_total;
            self._show_pages();
        },
        
        _show_pages: function () {
            var x = Math.floor(self.layout_page_total/2);
            var indice = self.page_current - x; 
            if (indice < 0) indice = 0;
            var y = self.page_total - self.page_current
            if (y <= x) indice-= x-y;

            if (self.layout_page_total >= self.page_total)
                indice = 0;

            $(self.page_container).children().hide().slice(indice, indice+self.layout_page_total).show();

            if (self.page_current == 1) {
                self.control_first_disable()
                self.control_previous_disable()
            }
            else {
                self.control_first_enable()
                self.control_previous_enable()
            }
        
            if (self.page_current == self.page_total) {
                self.control_last_disable()
                self.control_next_disable()
            }
            else {
                self.control_last_enable()
                self.control_next_enable()
            }
            
        },
        
        control_first_click: function () {
            self.page_current = 1;
            self._show_pages();
            self.page_click(self, self.page_current);
        },
        
        control_next_click: function () {
            if (self.page_total == self.page_current) return;
            self.page_current+=1;
            self._show_pages();
            self.page_click(self, self.page_current);
        },
        
        control_previous_click: function () {
            if (self.page_current == 1) return;
            self.page_current-=1;
            self._show_pages();
            self.page_click(self, self.page_current);
        },
        
        control_last_click: function () {
            self.page_current = self.page_total;
            self._show_pages();
            self.page_click(self, self.page_current);
        },
        
        control_first_enable: function () {
            $(this.control_first).show()
        },
        control_first_disable: function () {
            $(this.control_first).hide()
        },
        control_previous_enable: function () {
            $(this.control_previous).show()
        },
        control_previous_disable: function () {
            $(this.control_previous).hide()
        },
        control_next_enable: function () {
            $(this.control_next).show()
        },
        control_next_disable: function () {
            $(this.control_next).hide()
        },
        control_last_enable: function () {
            $(this.control_last).show()
        },
        control_last_disable: function () {
            $(this.control_last).hide()
        },
        
        page_click: function () { },
        
        init: function (self) {
            $(self.control_first).click(self.control_first_click);
            $(self.control_last).click(self.control_last_click);
            $(self.control_next).click(self.control_next_click);
            $(self.control_previous).click(self.control_previous_click);
        },
        
        page_current: 1,
        page_total: 1
        
    }
    self = jQuery.extend(self, extended);
    self.init(self);
    return self;
}