@extends('layouts.home.index')

@section('content')

@include('components.header.index')
    <main class="main">
        <section class="welcome">
            <div class="welcome-block">
                <div class="welcome-img-wrapper">
                    <img src="/images/service/welcome_image.png">
                </div>
                <div class="welcome-title-wrapper">
                    <h1 id="#welcome-title-wrapper">Добро пожаловать в <span>Cokteil</span></h1>
                </div>
                <p class="welcome-text">Экономим Ваше время!Предлагаем лучшие цены!Доставляем в кратчайшие сроки!</p>
            </div>
            <div class="promo-image-block">
                <img src="/images/service/promo-image.png">
            </div>
            <div class="welcome-cataloglink-wrapper">
                <a href="{{ route('catalog.index') }}">
                    <div class="welcome-cataloglink-link">Каталог</div>
                </a>
            </div>
        </section>
        <section class="our-advantages">
            <h2 class="section-title">Почему выбирают нас?</h2>

            <div class="our-advantages-itemswrapper">
                <div class="our-advantages-item">
                    <p class="our-advantages-content">Скидки постоянным клиентам от 5%</p>
                </div>
                <div class="our-advantages-item">
                    <p class="our-advantages-content">Предлагаем самые выгодные цены</p>
                </div>
                <div class="our-advantages-item">
                    <p class="our-advantages-content">Наши покупатели всегда остаются довольны</p>
                </div>
                <div class="our-advantages-item">
                    <p class="our-advantages-content">Ширикий ассортимент товаров для всей семьи</p>
                </div>
                <div class="our-advantages-item">
                    <p class="our-advantages-content">Возможность доставки в любой город Беларуси</p>
                </div>
                <div class="our-advantages-item">
                    <p class="our-advantages-content">Пункты выдачи заказов рядом с домом</p>
                </div>
            </div>
        </section>
        <section class="questions">
            <h2 class="section-title">Часто задаваемые вопросы</h2>
            <div class="questions-wrapper">
                <div class="accordeon-head">
                    <p>Как сделать заказ?</p> 
                    <img class="accordeon-head-icon" src="/images/service/accordeon_inactive_icon.svg"></img>
                </div>
                <div class="accordeon-body">Чтобы сделать заказ пользователь переходит в каталог сайта, выбирает нужный товар, отпраляет его в коризину, выбрав нужный размер и цвет, и нажимает кнопку “заказать”. Выбирает способ оплаты и доставки и покупает товар. </div>
                <div class="accordeon-head">
                    <p>Способы оплаты</p>
                    <img class="accordeon-head-icon" src="/images/service/accordeon_inactive_icon.svg"></img>
                </div>
                <div class="accordeon-body">Ответ на вопрос</div>
                <div class="accordeon-head">
                    <p>Доставка</p>
                    <img class="accordeon-head-icon" src="/images/service/accordeon_inactive_icon.svg"></img>
                </div>
                <div class="accordeon-body">Ответ на вопрос</div>
                <div class="accordeon-head">
                    <p>Сроки доставки</p>
                    <img class="accordeon-head-icon" src="/images/service/accordeon_inactive_icon.svg"></img>
                </div>
                <div class="accordeon-body">Ответ на вопрос</div>
                <div class="accordeon-head">
                    <p>Как сделать обмен?</p>
                    <img class="accordeon-head-icon" src="/images/service/accordeon_inactive_icon.svg"></img>
                </div>
                <div class="accordeon-body">Ответ на вопрос</div>
                <div class="accordeon-head">
                    <p>Как сделать возврат?</p>
                    <img class="accordeon-head-icon" src="/images/service/accordeon_inactive_icon.svg"></img>
                </div>
                <div class="accordeon-body">Ответ на вопрос</div>
                <div class="accordeon-head">
                    <p>Куда и когда вернутся деньги за возвращённый товар?</p>
                    <img class="accordeon-head-icon" src="/images/service/accordeon_inactive_icon.svg"></img>
                </div>
                <div class="accordeon-body">Ответ на вопрос</div>
            </div>
        </section>
    </main>
@endsection