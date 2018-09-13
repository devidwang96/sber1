<template>
    <div>
        <div class="scrollify-section" data-section-name="section-header">
            <div :class="['overlay-menu', {'active' : state.menu.state}]" @click="state.menu.state = false"></div>
            <section class="header">
                <div class="wrapper">
                    <div class="red-block"></div>
                    <div class="line-el animate fade-right" data-index="0" data-duration="500" data-delay="600"><img
                            src="/images/line.png" alt=""></div>
                    <div class="header__top">
                        <div class="row">
                            <div class="col-xs-3 col-sm-4">
                                <div class="left-block">
                                    <div class="header__menu">
                                        <nav :class="['cbp-spmenu cbp-spmenu-left', {'cbp-spmenu-open': state.menu.state}]" id="cbp-spmenu-s1">
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
                            </div>

                            <div class="col-xs-6 col-sm-4">
                                <div class="center-block">
                                    <div class="header__logo animate fade-right" data-index="0" data-duration="500" data-delay="500">
                                        <a href="/"><img src="/images/logo.png" alt=""></a>
                                    </div>
                                    <div class="header__link animate fade-down hidden-sm" data-index="0" data-duration="500" data-delay="500"><a href="#scroll-01" class="btn-scroll">Стать VIP-клиентом</a></div>
                                </div>
                            </div>

                            <div class="col-xs-3 col-sm-4">
                                <div class="right-block">
                                    <div class="header__search animate fade-left" data-index="0" data-duration="500"
                                         data-delay="500">
                                        <form>
                                            <input type="text" name="search" id="search" placeholder="Поиск">
                                            <i>
                                                <label for="search">
                                                    <img src="images/search-icon.png" alt="">
                                                </label>
                                            </i>
                                        </form>
                                    </div>
                                    <div class="header__lang">EN</div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="header__bottom">
                        <div class="swiper-container swiper-header">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" style="background-image:url('/images/slide_img_01.jpg')">
                                    <div class="title">
                                        <pre class="animate short-fade-up" data-index="0" data-duration="500" data-delay="600">Сбербанк<br>первый      _</pre>
                                        <img src="/images/first.png" alt="">
                                    </div>
                                </div>
                                <div class="swiper-slide" style="background-image:url('/images/slide_img_01.jpg')">
                                    <div class="title">
                                        <pre>Сбербанк<br>первый      _</pre>
                                        <img src="/images/first.png" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="arrow-block">
                            <div class="swiper-button-prev animate short-fade-right" data-index="0" data-duration="500"
                                 data-delay="500"></div>
                            <div class="swiper-button-next animate short-fade-left" data-index="0" data-duration="500"
                                 data-delay="500"></div>
                        </div>
                        <a class="btn-video animate short-fade-up" data-index="0" data-duration="500" data-delay="700" href="#">смотреть
                            видео</a>
                    </div>
                </div>
            </section>
        </div>
        <div class="scrollify-section" data-section-name="section-about">
            <section class="about">
                <div class="wrapper">
                    <div class="row">
                        <div class="col-xs-12 col-sm-6 animate fade-right" data-index="1" data-duration="500" data-delay="500">
                            <div class="image"><img src="/images/about_img_01.jpg" alt=""></div>
                        </div>
                        <div class="col-xs-12 col-sm-6 animate fade-left" data-index="1" data-duration="500" data-delay="500">
                            <div class="text-block">
                                <div class="suptitle">Персональное обслуживание и индивидуальный подход</div>
                                <div class="line-white"></div>
                                <h2>О нас</h2>
                                <div class="subtitle">
                                    Сбербанк – крупнейший банк России, Центральной и Восточной Европы – со 175-летней историей.
                                </div>
                                <div class="text">
                                    Мы даем людям уверенность и надежность, мы делаем их жизнь лучше, помогая реализовывать устремления и мечты.
                                    <br>
                                    Наши ценности — основа отношения к жизни и работе, внутренний компас, помогающий принимать решения в сложных ситуациях, принципы, верность которым мы храним всегда и везде.
                                    <br>
                                    История Дочернего Банка Акционерного Общества «Сбербанк России» в Казахстане начинается в конце 2006 г., когда Сбербанк России, флагман российской финансовой системы, крупнейший финансовый институт Центральной и Восточной Европы, приобретает 99,99% акций ТексакаБанка, признанного банком с лучшим уровнем клиентского обслуживания по версии журнала National Business.
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div class="scrollify-section" data-section-name="section-advantage">
            <section class="advantage">
                <!--<div class="red-block"></div>-->
                <div class="wrapper">
                    <div class="inner">
                        <h2 class="animate fade" data-index="2" data-duration="500" data-delay="700">Сбербанк Первый</h2>
                        <div class="line-red animate short-fade-up" data-index="2" data-duration="500" data-delay="500"></div>
                        <div class="row flex-block">
                            <div class="col-xs-12 col-sm-5">
                                <div class="row adv-el">
                                    <div class="col-xs-3">
                                        <div class="image"><img src="/images/preium_icon_01.png" alt=""></div>
                                    </div>
                                    <div class="col-xs-9">
                                        <div class="title">Индивидуальные финансовые и страховые услуги</div>
                                        <div class="description">Сбербанк Первый представляет программу розничного кредитования
                                            и страхования по индивидуальным, выгодным и удобным условиями
                                        </div>
                                    </div>
                                </div>
                                <div class="row adv-el animate fade-bottomleft" data-index="2" data-duration="500"
                                     data-delay="700">
                                    <div class="col-xs-3">
                                        <div class="image"><img src="/images/preium_icon_02.png" alt=""></div>
                                    </div>
                                    <div class="col-xs-9">
                                        <div class="title">Безопасность и конфиденциальность</div>
                                        <div class="description">Специализированные офисы и зоны обслуживания закрытого типа
                                            предназначены исключительно для клиентов Сбербанк Первый.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-7">
                                <div class="row adv-el adv-el-red" data-index="2" data-duration="500" data-delay="700">
                                    <div class="col-xs-3">
                                        <div class="image"><img src="/images/preium_icon_03.png" alt=""></div>
                                    </div>

                                    <div class="col-xs-9">
                                        <div class="title">Персональное обслуживание и индивидуальный подход</div>
                                        <div class="description">Персональный менеджер станет доверенным лицом для Вас и Вашей
                                            семьи при решении любых финансовых задач. Высококлассные специалисты
                                            проконсультируют Вас по любому вопросу, связанному с управлением капиталом и
                                            инвестициями, предложат сервисы и услуги в соответствии с Вашими потребностями и
                                            помогут сформировать Ваш индивидуальный финансовый портфель.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div class="scrollify-section" data-section-name="section-products">
            <div class="scrollify-standart">
                <section class="products row">
                    <div class="wrapper">
                        <div class="wrap-title">
                            <h2 class="animate fade" data-index="3" data-duration="500" data-delay="700">Продукты и услуги</h2>
                            <div class="line-red animate short-fade-up" data-index="3" data-duration="500" data-delay="500"></div>
                        </div>
                        <div class="slider-block">
                            <div class="swiper-container swiper-products">
                                <div class="suptitle-text animate fade-up" data-index="3" data-duration="500" data-delay="500">
                                    <div class="wrap">
                                        <span>В офисах Сбербанк Первый Вы можете воспользоваться полным спектром премиальных банковских услуг, в том числе:</span>
                                    </div>
                                </div>
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <div class="wrap">
                                            <div class="slide-inner">
                                                <div class="suptitle"></div>
                                                <div class="image" style="background: url('/images/image_full_maps.jpg')"></div>
                                                <div class="title">Карты</div>
                                                <div class="subtitle">Премиальные карты</div>
                                                <div class="description">Платежные карточки подобно дорогостоящим аксессуарам
                                                    являются атрибутом, подчеркивающим Ваш статус.
                                                </div>
                                                <a href="/cards.html" class="btn-white">Подробнее</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="wrap">
                                            <div class="slide-inner">
                                                <div class="suptitle"></div>
                                                <div class="image" style="background: url('/images/image_background-servis.jpg')"></div>
                                                <div class="title">Вложения</div>
                                                <div class="subtitle">Премиальные вклады</div>
                                                <div class="description">Сбербанк Первый предлагает линейку премиальных вкладов,
                                                    главными преимуществами которых являются высокая надежность и гибкость условий.
                                                </div>
                                                <a href="/vlozheniya.html" class="btn-white">Подробнее</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="wrap">
                                            <div class="slide-inner">
                                                <div class="suptitle"></div>
                                                <div class="image" style="background: url('/images/image_full_credit.jpg')"></div>
                                                <div class="title">Финансирование</div>
                                                <div class="subtitle">Кредитные продукты</div>
                                                <div class="description">Доверие и понимание Ваших потребностей – наши главные
                                                    приоритеты. Кредит – это возможность выгодно и быстро реализовать важные планы.
                                                </div>
                                                <a href="/credit-products.html" class="btn-white">Подробнее</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="wrap">
                                            <div class="slide-inner">
                                                <div class="suptitle"></div>
                                                <div class="image" style="background: url('/images/image_background-servis.jpg')"></div>
                                                <div class="title">Сейфовые ячейки</div>
                                                <div class="subtitle">Индивидуальные банковские сейфы</div>
                                                <div class="description">Услуга, доступная только клиентам Сбербанк Первый!
                                                    Сбербанк Первый предоставляет сервис хранения ценностей с высокой степенью защиты.
                                                </div>
                                                <a href="/vlozheniya.html" class="btn-white">Подробнее</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="arrow-block">
                                <div class="swiper-button-prev animate fade-right" data-duration="600" data-delay="500" data-index="3"></div>
                                <div class="swiper-button-next animate fade-left" data-duration="600" data-delay="500" data-index="3"></div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="partners">
                    <div class="wrapper">
                        <div id="partnersLink"></div>
                        <h2 class="animate fade" data-index="3" data-duration="500" data-delay="700">Клуб привилегий</h2>
                        <div class="line-red animate short-fade-up" data-index="3" data-duration="500" data-delay="500"></div>
                        <div class="wrap-block">
                            <div class="swiper-container swiper-partners">
                                <div class="swiper-wrapper">

                                    <div class="swiper-slide">
                                        <div class="container-wrap">
                                            <div class="card">
                                                <div class="face front">
                                                    <div class="wrap">
                                                        <div class="image">
                                                            <img src="/images/icon_rixos.jpg" alt="">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="face back">
                                                    <div class="wrap">
                                                        <div class="description">
                                                            <h4>Rixos</h4>
                                                            <p>В самом сердце Алматы – крупнейшего города Казахстана – будучи в центре городской жизни и бок о бок с историческими достопримечательностями, испытайте незабываемый уровень сервиса Rixos.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="container-wrap">
                                            <div class="card">
                                                <div class="face front">
                                                    <div class="wrap">
                                                        <div class="image">
                                                            <img src="/images/icon_mont_blank.jpg" alt="">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="face back">
                                                    <div class="wrap">
                                                        <div class="description">
                                                            <h4>MONTBLANC</h4>
                                                            <p>Традиции, мастерство, элегантность и качество. Бренд элитных бизнес аксессуаров Montblanc предлагает потратить время с пользой и приобрести уникальные сувениры.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="container-wrap">
                                            <div class="card">
                                                <div class="face front">
                                                    <div class="wrap">
                                                        <div class="image">
                                                            <img src="/images/icon_luxor.jpg" alt="">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="face back">
                                                    <div class="wrap">
                                                        <div class="description">
                                                            <h4>Wellness Club LUXOR</h4>
                                                            <p>Единственный в Центральной Азии Wellness Club премиум-класса, предлагающий своим клиентам весь спектр спортивно-оздоровительных, эстетических, косметологических и ряд медицинских услуг. Расположенный в красивейшем, экологически чистом районе г. Алматы.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="container-wrap">
                                            <div class="card">
                                                <div class="face front">
                                                    <div class="wrap">
                                                        <div class="image">
                                                            <img src="/images/icon_dunhill.jpg" alt="">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="face back">
                                                    <div class="wrap">
                                                        <div class="description">
                                                            <h4>Dunhill</h4>
                                                            <p>Английская компания, специализирующаяся на производстве мужских товаров: ювелирные аксессуары, одежда, кожаные изделия, пишущие принадлежности, зажигалки, парфюмерные изделия и часы</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <div class="scrollify-section" data-section-name="section-team">
            <section class="team">
                <div class="wrapper">
                    <div class="row">
                        <div class="col-xs-12 col-sm-6">
                            <h2 class="animate fade" data-index="4" data-duration="500" data-delay="700">Наша команда</h2>
                            <div class="line-red animate short-fade-up" data-index="4" data-duration="500"
                                 data-delay="500"></div>
                        </div>
                        <div class="col-xs-12 col-sm-6 animate fade-left" data-index="4" data-duration="500" data-delay="700">
                            <div class="desc-block">
                                <!--<p>Банк, работой в котором можно гордиться, который уважают, сотрудники которого уверены в своем-->
                                <!--будущем</p>-->
                                <a href="/team.html" class="btn-more">Просмотреть всех</a>
                            </div>
                        </div>
                    </div>
                    <div class="slider-block">
                        <div class="swiper-container swiper-team">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide animate fade" data-duration="500" data-index="4" data-delay="500">
                                    <div class="image" style="background: url('/images/team/001-1000.jpg')">
                                        <div class="image__description">
                                            <p class="image__title">
                                                Есбосынова Гулия
                                            </p>
                                            <p class="image__text">
                                                Директор Управления Сбербанк Первый
                                                (Сбербанк Первый Алматы)
                                            </p>
                                        </div>

                                    </div>
                                </div>
                                <div class="swiper-slide animate fade" data-duration="500" data-index="4" data-delay="500">
                                    <div class="image" style="background: url('/images/team/002-1000.jpg')">
                                        <div class="image__description">
                                            <p class="image__title">
                                                Аусенова Динара
                                            </p>
                                            <p class="image__text">
                                                Руководитель направления Управления Сбербанк Первый
                                            </p>
                                        </div>

                                    </div>
                                </div>
                                <div class="swiper-slide animate fade" data-duration="500" data-index="4" data-delay="600">
                                    <div class="image" style="background: url('/images/team/003-1000.jpg')">
                                        <div class="image__description">
                                            <p class="image__title">
                                                Асауова Гульмира
                                            </p>
                                            <p class="image__text">
                                                Начальник отдела обслуживания VIP персон
                                                (Сбербанк Первый Алматы)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide animate fade" data-duration="500" data-index="4" data-delay="700">
                                    <div class="image" style="background: url('/images/team/004-1000.jpg')">
                                        <div class="image__description">
                                            <p class="image__title">
                                                Пак Маргарита
                                            </p>
                                            <p class="image__text">
                                                Начальник отдела обслуживания VIP персон
                                                (Сбербанк Первый Астана)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide animate fade" data-duration="500" data-index="4" data-delay="800">
                                    <div class="image" style="background: url('/images/team/005-1000.jpg')">
                                        <div class="image__description">
                                            <p class="image__title">
                                                Альбергенов Чингиз
                                            </p>
                                            <p class="image__text">
                                                Ведущий менеджер по обслуживанию VIP персон
                                                (Сбербанк Первый Алматы)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide animate fade" data-duration="500" data-index="4" data-delay="800">
                                    <div class="image" style="background: url('/images/team/006-1000.jpg')">
                                        <div class="image__description">
                                            <p class="image__title">
                                                Абеуова Гульзада
                                            </p>
                                            <p class="image__text">
                                                Ведущий менеджер по обслуживанию VIP персон
                                                (Сбербанк Первый Алматы)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide animate fade" data-duration="500" data-index="4" data-delay="800">
                                    <div class="image" style="background: url('/images/team/007-1000.jpg')">
                                        <div class="image__description">
                                            <p class="image__title">
                                                Муканова Айжан
                                            </p>
                                            <p class="image__text">
                                                Заместитель Начальника Отдела обслуживания VIP персон
                                                (Сбербанк Первый Астана)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide animate fade" data-duration="500" data-index="4" data-delay="800">
                                    <div class="image" style="background: url('/images/team/008-1000.jpg')">
                                        <div class="image__description">
                                            <p class="image__title">
                                                Есенбек Санжар
                                            </p>
                                            <p class="image__text">
                                                Ведущий кредитный менеджер по обслуживанию VIP персон
                                                (Сбербанк Первый Алматы)
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <!--<div class="swiper-pagination"></div>-->
                        </div>
                        <div class="swiper-pagination"></div>
                    </div>
                </div>
            </section>
        </div>
        <div class="scrollify-section" data-section-name="section-contacts">
            <section class="contacts" id="scroll-01">
                <div class="red-block"></div>
                <div class="wrapper">
                    <div class="row">
                        <div class="col-xs-12 col-sm-6">
                            <div class="left-block">
                                <div class="inner">
                                    <h3 class="animate fade" data-index="5" data-duration="500" data-delay="700">Контакты</h3>
                                    <div class="white-line animate short-fade-up" data-index="5" data-duration="500" data-delay="500"></div>
                                    <div class="subtitle">Форма обратной <br>связи</div>
                                    <button type="button" class="btn-maps" data-toggle="modal" data-target="#modalMaps">Карта</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6">
                            <div class="right-block">
                                <div class="inner">
                                    <div class="title">
                                        Назначьте встречу с <br>персональным менеджером
                                    </div>
                                    <div class="row">
                                        <div class="cont-el col-xs-12 col-sm-12">
                                            <div class="row">
                                                <div class="image col-xs-2"><img src="/images/contacts_icon01.png" alt=""></div>
                                                <div class="col-xs-10">
                                                    <div class="text">
                                                        г. Алматы:<br>
                                                        пр.Достык, д. 97.<br>
                                                        <br>
                                                        г. Астана: <br>
                                                        пр. Туран 37/9, ЖК «RixosKhanShatyrResidences», Блок Б<br>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cont-el col-xs-12 col-sm-12">
                                            <div class="row">
                                                <div class="image col-xs-2"><img src="/images/contacts_icon02.png" alt=""></div>
                                                <div class="col-xs-10">
                                                    <div class="text">
                                                        Телефоны:<br><br>
                                                        г. Алматы<br>
                                                        +7 (727) 259 77 87<br>
                                                        +7 (727) 259 77 97<br><br>
                                                        г. Астана<br>
                                                        +7 (7172) 43 35 74<br>
                                                        +7 (7172) 43 35 75<br>
                                                        +7 (7172) 43 35 76
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cont-el col-xs-12 col-sm-12">
                                            <div class="row">
                                                <div class="image col-xs-2"><img src="/images/contacts_icon03.png" alt=""></div>
                                                <div class="col-xs-10"><div class="text">VIP@SBERBANK.KZ</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br><br>
                                    <button type="button" class="btn-feedback" data-toggle="modal" data-target="#modalForm">Форма обратной связи</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>


        <ul class="pagination-scrollify">
            <li class="animate fade-left" data-index="all" data-duration="500" data-delay="500"><a class="active" href="#section-header"><span class="number">01</span></a></li>
            <li class="animate fade-left" data-index="all" data-duration="500" data-delay="600"><a class="" href="#section-about"><span class="number">02</span></a></li>
            <li class="animate fade-left" data-index="all" data-duration="500" data-delay="700"><a class="" href="#section-advantage"><span class="number">03</span></a></li>
            <li class="animate fade-left" data-index="all" data-duration="500" data-delay="800"><a class="" href="#section-products"><span class="number">04</span></a></li>
            <li class="animate fade-left" data-index="all" data-duration="500" data-delay="900"><a class="" href="#section-team"><span class="number">05</span></a></li>
            <li class="animate fade-left" data-index="all" data-duration="500" data-delay="1000"><a class="" href="#section-contacts"><span class="number">06</span></a></li>
        </ul>

        <div class="modal fade" id="modalMaps" role="dialog">
            <div class="modal-dialog modal-maps">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="false">
                            <!-- Indicators -->
                            <ol class="carousel-indicators">
                                <li data-target="#myCarousel" data-slide-to="0" class="active">Алматы</li>
                                <li data-target="#myCarousel" data-slide-to="1">Астана</li>
                            </ol>

                            <div class="carousel-inner">
                                <div class="item active">
                                    <div class="maps-block">
                                        <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ab8de1a2de199e8acf28d97b710ee4c73a7873474f79612ff782ad88d77c8a200&amp;width=100%25&amp;height=450&amp;lang=ru_RU&amp;scroll=true"></script>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="maps-block">
                                        <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A8e2ec8efc81dd0a28e7d5a20dde2df2d898a78c46d6b0fd5a48bb67f1d346708&amp;width=100%25&amp;height=450&amp;lang=ru_RU&amp;scroll=true"></script>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>



<script>
    import Swiper from 'Swiper';
    export default {
        data(){
            return {

            }
        },
        mounted(){
            $.scrollify.enable();
            this.$nextTick(() => {
                if($(window).width() > 1200){
                    this.setScroll();
                    $(".pagination-scrollify a").off("click");
                    $(".pagination-scrollify a").on("click", $.scrollify.move);
                }
                this.initSliders();
            });

        },
        methods:{
            setScroll(){
                $.scrollify({
                    section: ".scrollify-section",
                    interstitialSection: ".scrollify-min",
                    overflowScroll: true,
                    standardScrollElement: ".scrollify-standart",

                    before: function (i, panels) {
                        let ref = panels[i].attr("data-section-name");
                        $(".pagination-scrollify .active").removeClass("active");
                        $(".pagination-scrollify").find("a[href=\"#" + ref + "\"]").addClass("active");
                    },
                    afterRender: function () {
                        console.log('Render');
                        let pagination = "<ul class=\"pagination-scrollify\">";
                        let activeClass = "";
                        $(".scrollify-section").each(function (i) {
                            activeClass = "";
                            if (i === 0) {
                                activeClass = "active";
                            }
                            pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"number\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
                        });
                        pagination += "</ul>";
                        $(".home").append(pagination);

                        $(".pagination-scrollify a").on("click", $.scrollify.move);
                    }
                });
            },
            initSliders(){

                //swiper slider 01
                var mySwiper = new Swiper('.swiper-header', {
                    loop: true,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    autoplay: {
                        delay: 5000,
                    },
                    effect: 'fade',
                    speed: 1000,
                });



                //swiper slider 02
                var swiper = new Swiper('.swiper-products', {
                    slidesPerView: 3,
                    spaceBetween: 70,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    // autoplay: {
                    //     delay: 5000,
                    // },
                    loop: true,
                    speed: 1000,
                    breakpoints: {
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 15,
                        },
                        992: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                        1200: {
                            slidesPerView: 3,
                        }
                    }
                });



                var swiper = new Swiper('.swiper-partners', {
                    slidesPerView: 4,
                    spaceBetween: 0,
                    loop: true,
                    breakpoints: {
                        768: {
                            slidesPerView: 1,
                        },
                        // 768: {
                        //     slidesPerView: 2,
                        // },
                        1200: {
                            slidesPerView: 3,
                        }
                    },
                    // autoplay: {
                    //     delay: 5000,
                    // },
                });




                var swiper = new Swiper('.swiper-team', {
                    slidesPerView: 4,
                    spaceBetween: 2,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    loop: true,
                    breakpoints: {
                        768: {
                            slidesPerView: 1,
                        },
                        // 768: {
                        //     slidesPerView: 2,
                        // },
                        1200: {
                            slidesPerView: 3,
                        }
                    },
                    autoplay: {
                        delay: 5000,
                    },
                });




                var swiper = new Swiper('.swiper-city', {

                    direction: 'vertical',
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,

                        renderBullet: function (index, className) {
                            return '<span class="' + className + '">' + (index + 1) + '</span>';
                        }
                    },
                    loop: true,
                    effect: 'fade',
                    speed: 1000,
                    autoplay: {
                        delay: 5000,
                    },

                });


                $(".btn-scroll").off('click');
                $(".btn-scroll").on('click', function() {
                    var elementClick = $(this).attr("href");
                    var destination = $(elementClick).offset().top;
                    $('html, body').animate({
                        scrollTop: destination
                    }, 500);
                    return false;
                });

            }
        },
        destroyed(){
            $.scrollify.disable();
        }
    }
</script>
