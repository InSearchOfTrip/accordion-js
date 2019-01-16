$(function () {
    var item = $('.header-item-wrapper');
    item.on('click', function (e) {
        item.find('.header-item_title').removeClass('header-item_title__active');
        item.removeClass('header-item__hover');
        $('.header-item_active-content').removeClass('header-item-content__active');
        $(this).find('.header-item_active-content').addClass('header-item-content__active');
        $(this).find('.header-item_title').addClass('header-item_title__active');
        $(this).addClass('header-item__hover');

    });



    function Popup(obj) {
        var that = this;

        this.popup = document.querySelector(obj.popup);
        this.popupClose = document.querySelector(obj.close);
        this.popupContent = this.popup.firstElementChild;


        this.popupOpen = function (content) {
            that.popupContent.innerHTML = content.innerHTML;
            that.popupContent.appendChild(this.popupClose);
            that.popup.style.display = "block";

        };

        this.popupClose.addEventListener('click' , function () {
            that.popup.style.display = "none";
        })
    }

    var pop = new Popup({
        popup : ".popup-bg",
        close : ".popup-close"
    });

    var btn1 = document.querySelector('.our-clients_btn');

    btn1.addEventListener('click' , function () {
        var content = document.querySelector('.header-item_title__active');
        content.classList.add('header-item_title');
        pop.popupOpen(content);

    });





});