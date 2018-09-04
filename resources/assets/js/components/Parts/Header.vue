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

                            </button>
                        </div>
                        <div class="header__link"><a href="#">Персональный менеджер</a></div>
                    </div>
                    <div class="col-xs-12 col-sm-4">

                        <div class="header__logo">
                            <router-link :to="Laravel.getLocalizedRoute({name : 'home'})">
                                <img src="/images/logo.png" alt="">
                            </router-link>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-4 right-row">
                        <div class="header__search">
                            <form>
                                <input type="text" name="search" placeholder="Search..">
                            </form>
                        </div>
                        <div class="header__lang">EN</div>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>
