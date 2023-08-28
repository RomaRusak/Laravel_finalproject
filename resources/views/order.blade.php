@extends('layouts.order.index')

@section('content')

@include('components.header.index')

    <div class="arrow-back-wrapper">
        <a href="{{ route('cart.index') }}">
            <img src="/images/service/product_arrow_back.svg" >
        </a>
    </div>

    <h2 class="order-title">Оформление заказа</h2>

    <form class="order-form">
       
        <div class="order-info-wrapper">
            <h3 class="order-subtitle">Ваши данные</h3>

            <div class="order-inputs-wrapper">
                <div class="order-input-wrapper">
                    <label for="name">Имя</label>
                    <input type="text" id="name" value="{{ $userData ? $userData['name'] : '' }}" name="name">
                </div>

                <div class="order-input-wrapper">
                    <label for="email">Email</label>
                    <input type="email" id="email" value="{{ $userData ? $userData['email'] : '' }}" name="email">
                </div>

                <div class="order-input-wrapper">
                    <label for="city">Город</label>
                    <input type="text" id="city" value="{{ $userData ? $userData['city'] : '' }}" name="city">
                </div>

                <div class="order-input-wrapper">
                    <label for="street">Улица</label>
                    <input type="text" id="street" value="{{ $userData ? $userData['street'] : '' }}" name="street">
                </div>

                <div class="order-input-wrapper">
                    <label for="home_number">Номер дома</label>
                    <input type="number" id="home_number" value="{{ $userData ? $userData['home_number'] : '' }}" name="home_number" min="0">
                </div>

                <div class="order-input-wrapper">
                    <label for="apartment_number">Номер квартиры</label>
                    <input type="number" id="apartment_number" value="{{ $userData ? $userData['apartment_number'] : '' }}" name="apartment_number" min="0">
                </div>

                <div class="order-input-wrapper">
                    <label for="phone_number">Номер телефона</label>
                    <input type="tel" id="phone_number" value="{{ $userData ? $userData['phone_number'] : '+375' }}" name="phone_number">
                </div>
            </div>
        </div>

        <div class="delivery-data-wrapper">
            <h3 class="delivery-subtitle">Выберите способ доставки</h3>

            <div class="delivery-inputs-wrapper">
                <div class="delivery-item">
                    <div class="delivery-head">
                        <input type="checkbox" name="delivery" value="belpochta" id="belpochta">
                        <label for="belpochta">Белпочта</label>
                    </div>
                    <div class="delivery-body">
                        <p class="delivery-desciption">Доставка 2-3 дня</p>
                    </div>
                </div>

                <div class="delivery-item">
                    <div class="delivery-head">
                        <input type="checkbox" name="delivery" value="europost" id="europost">
                        <label for="europost">Европочта</label>
                    </div>
                    <div class="delivery-body">
                        <p class="delivery-desciption">Доставка на отделение 2-3 дня <br> Стоимость 4,5 р.</p>
                    </div>
                </div>

                <div class="delivery-item">
                    <div class="delivery-head">
                        <input type="checkbox" name="delivery" value="europost_and_courier" id="europost_and_courier">
                        <label for="europost_and_courier">Европочта + курьер</label>
                    </div>
                    <div class="delivery-body">
                        <p class="delivery-desciption">Доставка в течение 3-х дней <br>Стоимость 7 р.</p>
                    </div>
                </div>

                <div class="delivery-item">
                    <div class="delivery-head">
                        <input type="checkbox" name="delivery" value="courier" id="courier">
                        <label for="courier">Курьер</label>
                    </div>
                    <div class="delivery-body">
                        <p class="delivery-desciption">Доставка в течение дня <br> Стоимость 6.5 р. <br> За МКАД (3-5 км) 8 р.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="payment-wrapper">
            <h3 class="payment-subtitle">Выберите способ оплаты</h3>

            <div class="payment-inputs-wrapper">
                <div class="payment-item">
                        <input type="checkbox" name="payment" value="bank_card" id="bank_card">
                        <label for="bank_card">Банковская карта</label>
                </div>

                <div class="payment-item">
                        <input type="checkbox" name="payment" value="cash_on_delivery" id="cash_on_delivery">
                        <label for="cash_on_delivery">Наложенный платёж</label>
                </div>

                <div class="payment-item">
                        <input type="checkbox" name="payment" value="ERIP" id="ERIP">
                        <label for="ERIP">Оплата ЕРИП</label>
                </div>
            </div>
        </div>

        <div class="makeAnOrder-button-wrapper">
            <button class="makeAnOrder-button disabled" type="submit" disabled>Подтвердить</button>
        </div>
    </form>
@endsection

