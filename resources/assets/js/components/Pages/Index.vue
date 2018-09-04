<template>
    <div>
        <div>
            <transition name="page"
                        v-on:after-enter="afterPageEnter"
                        v-on:before-enter="beforePageEnter">
                <router-view/>
            </transition>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                animateNodes: null,
                charAnimateNodes : null,
                mouseMoveAnimateNodes : null,
                scrollMotionAnimateNodes : null,
                pageChanging: false,
            }
        },
        mounted(){

            this.$nextTick(() => {

                this.animateInit();
                if($(window).width() > 1199){
                    $('body').off('mousemove');
                    $('body').on('mousemove', (e) => {
                        this.mouseMoveAnimate(e.pageX, e.pageY);
                    });

                    $(window).off('scroll');
                    $(window).on('scroll', () => {
                        this.animate();
                        this.charAnimate();
                        this.scrollMotionAnimate($(window).scrollTop());
                    });
                } else {
                    $(window).off('scroll');
                    $(window).on('scroll', () => {
                        this.animate();
                        this.charAnimate();
                    });
                }

                this.animate();
            });


        },
        methods: {
            beforePageEnter(){
                console.log('Страница Уходит');
                this.state.menu.state = false;
                this.animateNodes.removeClass('in');
            },
            afterPageEnter(){
                console.log('Страница Приходит');
                window.scrollTo(0,0);
                this.animateInit();
                this.animate();
            },


            animateInit(){
                this.animateNodes = $('.animate');
                this.charAnimateNodes = $('.char-animate');
                this.mouseMoveAnimateNodes = $('.mouse-move-animate');
                this.scrollMotionAnimateNodes = $('.scroll-motion-animate');

                this.mouseMoveAnimateNodes.each(function() {
                    $(this).attr('data-offset-x', - $(this).offset().left + $(this).width() / 2);
                    $(this).attr('data-offset-y', $(this).offset().top + $(this).height() / 2);
                });
                this.scrollMotionAnimateNodes.each(function() {
                    $(this).attr('data-offset-y', $(this).offset().top);
                });
            },
            animate(){
                this.animateNodes.each(function() {
                    if(
                        ($(window).scrollTop() + $(window).height()) >= $(this).offset().top
                        && $(window).scrollTop() - 350 <= $(this).offset().top + $(this).height()
                    ) {
                        if (!$(this).hasClass('in')) {
                            setTimeout(() => {
                                if ($(this).data('duration') !== undefined) {
                                    $(this).css('transition', `all ${$(this).data('duration') / 1000}s`);
                                }
                                $(this).addClass('in');
                            }, $(this).data('delay') !== undefined ? $(this).data('delay') : 0);
                        }
                    } else {
                        $(this).removeClass('in');
                    }
                });
            },
            charAnimate(){
                this.charAnimateNodes.each(function() {
                    if(
                        ($(window).scrollTop() + $(window).height()) >= $(this).offset().top
                        && $(window).scrollTop() - 350 <= $(this).offset().top + $(this).height()
                    ) {
                        if (!$(this).hasClass('anim-active')) {
                            let animText = $(this).text();
                            let speed = $(this).data('speed');

                            $(this).text('');
                            Array.prototype.forEach.call(animText, (el) => {
                                $(this).append(`<span>${el}</span>`);
                            });
                            setTimeout(() => {
                                if ($(this).data('duration') !== undefined) {
                                    $(this).find('span').css('transition', `all ${$(this).data('duration') / 1000}s`);
                                }
                                $(this).find('span').each(function(index) {
                                    setTimeout(() => {
                                        $(this).addClass('in');
                                    }, (speed !== undefined ? speed : 50) * index);
                                });
                                $(this).addClass('anim-active');
                            }, $(this).data('delay') !== undefined ?
                                $(this).data('delay') :
                                0);
                        }
                    } else {
                        $(this).removeClass('anim-active');
                    }
                });
            },
            scrollMotionAnimate(scrollTop){
                this.scrollMotionAnimateNodes.each(function(){
                    $(this).css('transform', 'translateY('+ ((scrollTop - $(this).data('offset-y')) / $(this).data('sensivity')) +'px)');
                });
            },
            mouseMoveAnimate(screenX, screenY){
                this.mouseMoveAnimateNodes.each(function() {
                    $(this).css('transform', `translateX(${(screenX - $(this).data('offset-x')) / $(this).data('sensivity')}px) translateY(${(screenY - $(this).data('offset-y')) / $(this).data('sensivity')}px)`);
                });
            },
        },

    }
</script>
