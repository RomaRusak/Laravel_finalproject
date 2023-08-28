@extends('layouts.adminDashboardProduct.index')

@section('content')
<div class="admin-wrapper">
    <div>
        <a class="back-step-link" href="{{ route('adminDashboardCategory.show', $category->id) }}">Вернуться в категорию {{ $category->name }}</a>
    </div>

    <h2 class="admin-title">Добавить Продукт</h2>

    <form action="{{ route('adminDashboardProduct.store') }}" class="add-product-form" method="post">
        @csrf
        @method('post')
            <div class="add-product-item">
                <label for="name">Название</label>
                <input type="text" name="name" placeholder="введите название продукта" id="name" >
            </div>
        
            <div class="add-product-item">
                <label for="description">Описание</label>
                <textarea class="edit-product-description" name="description" placeholder="введите описание продукта"></textarea>
            </div>

            <div class="add-product-item">
                <label for="category">Категория</label>
                <select name="category" id="category">
                    @foreach($categories as $categorySelect)
                        <option 
                        value="{{ $categorySelect->id }}"
                        {{$category->id === $categorySelect->id ? 'selected' : ''}}
                        >
                            {{ $categorySelect->name }}
                        </option>
                    @endforeach
                </select>
            </div>

            <div class="add-product-item">
                <label>Размеры</label>
                <div class="checkboxes-size-wrapper">
                        <div class="checkbox-item-wrapper">
                            <input type="checkbox" name="s-size" value="false" checked>
                            <input type="checkbox" id="s-size" name="s-size" value="true">
                            <label for="s-size">Размер S</label>
                        </div>
    
                        <div class="checkbox-item-wrapper">
                            <input type="checkbox"  name="m-size" value="false" checked>
                            <input type="checkbox" id="m-size" name="m-size" value="true">
                            <label for="m-size">Размер M</label>
                        </div>
    
                        <div class="checkbox-item-wrapper">
                            <input type="checkbox" name="l-size" value="false" checked>
                            <input type="checkbox" id="l-size" name="l-size" value="true">
                            <label for="l-size">Размер L</label>
                        </div>
    
                        <div class="checkbox-item-wrapper">
                            <input type="checkbox" name="xl-size" value="false" checked>
                            <input type="checkbox" id="xl-size" name="xl-size" value="true">
                            <label for="xl-size">Размер XL</label>
                        </div>
                </div>
            </div>

            <div class="add-product-item">
                <label>Цвета</label>
                <div class="product-colors-wrapper">
                    <div class="product-color-item">
                        <input  type="checkbox" name="color_white" value="false" checked>
                        <input  type="checkbox" name="color_white" value="true" id="color_white">
                        <label for="color_white">Белый</label>
                    </div>
                    <div class="product-color-item">
                        <input  type="checkbox" name="color_black" value="false" checked>
                        <input  type="checkbox" name="color_black" value="true" id="color_black">
                        <label  for="color_black">Черный</label>
                    </div>
                    <div class="product-color-item">
                        <input  type="checkbox" name="color_green" value="false" checked>
                        <input  type="checkbox" name="color_green" value="true" id="color_green">
                        <label  for="color_green">Зеленый</label>
                    </div>
                    <div class="product-color-item">
                        <input  type="checkbox" name="color_pink" value="false" checked>
                        <input  type="checkbox" name="color_pink" value="true" id="color_pink">
                        <label  for="color_pink">Розовый</label>
                    </div>
                    <div class="product-color-item">
                        <input  type="checkbox" name="color_yellow" value="false" checked>
                        <input  type="checkbox" name="color_yellow" value="true" id="color_yellow">
                        <label  for="color_yellow">Желтый</label>
                    </div>
                </div>
            </div>

            <div class="add-product-item">
                <label>Картинки</label>
                <div class="products-img-wrapper">
                    <div class="product-img-item">
                        <label for="img-1">1 изображение</label>
                        <select name="img-1" id="img-1">
                            @isset($images)
                                <option value=""></option>
                            @endisset
                            @foreach($images as $image) 
                                <option value="{{ $image }}">{{ $image }}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="product-img-item">
                        <label for="img-2">2 изображение</label>
                        <select name="img-2" id="img-2">
                            @isset($images)
                                <option value=""></option>
                            @endisset
                            @foreach($images as $image) 
                                <option value="{{ $image }}">{{ $image }}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="product-img-item">
                        <label for="img-3">3 изображение</label>
                        <select name="img-3" id="img-3">
                            @isset($images)
                                <option value=""></option>
                            @endisset
                            @foreach($images as $image) 
                                <option value="{{ $image }}">{{ $image }}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="product-img-item">
                        <label for="img-4">4 изображение</label>
                        <select name="img-4" id="img-4">
                            @isset($images)
                                <option value=""></option>
                            @endisset
                            @foreach($images as $image) 
                                <option value="{{ $image }}">{{ $image }}</option>
                            @endforeach
                        </select>
                    </div>
               
                </div>
            </div>

            <div class="add-product-item">
                <label>Цена</label>

                <div class="price-wrapper">
                    <div class="price-input-wrapper">
                        <label for="rubles">рубли</label>
                        <input type="number" min="1" placeholder="рубли"  name="rubles" value="0" id="rubles">
                    </div>
                    <div class="price-input-wrapper">
                        <label for="kopeks">копейки</label>
                        <input type="number" min="0" placeholder="копейки" min="0" max="99" name="kopeks" value="0" id="kopeks">
                    </div>
                    <div class="price-input-wrapper">
                        <label for="discount">скидка (процент)</label>
                        <input type="number" min="0" placeholder="скидка (процент)" min="0" max="100" name="discount" value="0" id="discount">
                    </div>
                </div>
            </div>

            <button class="admin-button" type="submit">Сохранить</button>
        </form>
</div>
@endsection