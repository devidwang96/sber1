<template>
    <div>
        <header>
            <div :class="['overlay-menu', {'active' : state.menu.state}]" @click="state.menu.state = false"></div>
            <div class="wrapper">
                <div class="row">
                    <div class="col-xs-12 col-sm-4">
                        <div class="header__menu">
                            <nav :class="['cbp-spmenu-left cbp-spmenu', {'cbp-spmenu-open': state.menu.state}]" id="cbp-spmenu-s1">
                                <img src="/images/icon_close.png" id="closeLeft" class="btn-close" alt="" @click="state.menu.state = false">

                                <router-link :to="Laravel.getLocalizedRoute({name : 'service'})">
                                    Сервис
                                </router-link>


                                <router-link :to="Laravel.getLocalizedRoute({name : 'insides'})">
                                    Вложения
                                </router-link>

                                <router-link :to="Laravel.getLocalizedRoute({name : 'cards'})">
                                    Карты
                                </router-link>


                                <router-link :to="Laravel.getLocalizedRoute({name : 'credits'})">
                                    Кредитные продукты
                                </router-link>

                                <router-link :to="Laravel.getLocalizedRoute({name : 'news'})">
                                    Новости
                                </router-link>

                            </nav>
                            <button id="showLeft" class="menu-button" @click="state.menu.state = !state.menu.state">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                        <div class="header__logo animate fade-right" data-index="0" data-duration="500" data-delay="500">
                            <a href="/"><img src="/images/logo.png" alt=""></a>
                        </div>
                    </div>

                    <div class="col-xs-4 col-sm-4">
                        <div class="center-block">
                            <div class="header__logo animate fade-right" data-index="0" data-duration="500" data-delay="500">
                                <a href="/"><img src="/images/logo.png" alt=""></a>
                            </div>
                            <div class="header__link animate fade-down hidden-sm" data-index="0" data-duration="500" data-delay="500"><button type="button" data-toggle="modal" data-target="#modalForm">Стать VIP-клиентом</button></div>
                        </div>
                    </div>

                    <div class="col-xs-4 col-sm-4">
                        <div class="right-block">
                            <div class="header__search animate fade-left" data-index="0" data-duration="500"
                                 data-delay="500">
                                <form>
                                    <input type="text" name="search" id="search" placeholder="Поиск">
                                    <i>
                                        <label for="search">
                                            <img src="images/search-icon_black.png" alt="">
                                        </label>
                                    </i>
                                </form>
                            </div>
                            <div class="header__lang">EN</div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>
