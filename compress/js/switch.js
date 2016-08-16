/**
 * namespace: CONSUMER
 * use: CONSUMER.method
 * @author   : CY
 * @datetime : 2016/08/12
 * @version  : 1.0.0
 * @create   : 2016/08/12
 * @update   : 2016/08/12
 */
(function() {
    
    /**
     * [initSwiper] 初始化swiper
     * @param void 无
     * @return void 无
     */
    var initSwiper = function ()
    {
        var mySwiper = new Swiper('.swiper-container', {
            pagination: '.pagination',
            paginationClickable: true,
            centeredSlides: true,
            slidesPerView: 3,
            slideToClickedSlide:true,
            watchActiveIndex: true,
            loop: true
        });
    };

    $(function() {
        initSwiper();
    });
}());