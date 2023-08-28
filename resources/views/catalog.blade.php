@extends('layouts.catalog.index')

@section('content')

@include('components.header.index')

    <div class="breadcrumbs-wrapper">
        <ul class="breadcrumbs-list">
            <li><a href="{{ route('homePage.index') }}">Главная/</a></li>

            @if($categoryTitle === 'весь ассортимент')
            <li><a href="{{ route('catalog.index') }}">Весь ассортимент</a></li>
            @else
            <li><a href="{{ route('catalog.show', $currentCategory->code) }}">{{ $currentCategory->name }}</a></li>
            @endif
        </ul>
    </div>

    <h2 class="catalog-title">{{ $categoryTitle}}</h2>

    <div class="catalog-content-wrapper">
        <div class="catalog-sort-description">
            <p>Сортировать по:</p>
        </div>
        <div class="catalog-sort-top">
            <form id="catalog-sort-form">
                <ul class="catalog-sort-list">
                    <li class="catalog-sort-value" data-value="price">Цене</li>
                    <li class="catalog-sort-value" data-value="discount">Скидке</li>
                    <li class="catalog-sort-value" data-value="addition">Добавлению</li>
                    <li><input name="sort" type="text" class="catalog-input-value"></li>
                </ul>
            </form>
        </div>
        <div class="catalog-sort-left">
            <div class="catalog-filters-head">
                <span>Размер</span>
                <img src="/images/service/catalog-filters-icon.svg">
            </div>
            <div class="catalog-filters-body catalog-sizes-filters">
                <div class="catalog-filter-item">
                    <input type="checkbox" id="s_size" class="catalog-filter-checkbox" name="s_size">
                    <label for="s_size">S</label>
                </div>
                <div class="catalog-filter-item">
                    <input type="checkbox" id="m_size" class="catalog-filter-checkbox" name="m_size">
                    <label for="m_size">M</label>
                </div>
                <div class="catalog-filter-item">
                    <input type="checkbox" id="l_size" class="catalog-filter-checkbox" name="l_size">
                    <label for="l_size">L</label>
                </div>
                <div class="catalog-filter-item">
                    <input type="checkbox" id="xl_size" class="catalog-filter-checkbox" name="xl_size">
                    <label for="xl_size">XL</label>
                </div>
            </div>
            <div class="catalog-filters-head">
                <span>Цвета</span>
                <img src="/images/service/catalog-filters-icon.svg">
            </div>
            <div class="catalog-filters-body catalog-sizes-colors">
                <div class="catalog-filter-item">
                    <input type="checkbox" id="color_white" class="catalog-filter-checkbox" name="color_white">
                    <label for="color_white">Белый</label>
                </div>
                <div class="catalog-filter-item">
                    <input type="checkbox" id="color_black" class="catalog-filter-checkbox" name="color_black">
                    <label for="color_black">Черный</label>
                </div>
                <div class="catalog-filter-item">
                    <input type="checkbox" id="color_green" class="catalog-filter-checkbox" name="color_green">
                    <label for="color_green">Зеленый</label>
                </div>
                <div class="catalog-filter-item">
                    <input type="checkbox" id="color_pink" class="catalog-filter-checkbox" name="color_pink">
                    <label for="color_pink">Розовый</label>
                </div>
                <div class="catalog-filter-item">
                    <input type="checkbox" id="color_yellow" class="catalog-filter-checkbox" name="color_yellow">
                    <label for="color_yellow">Желтый</label>
                </div>
            </div>
        </div>
        <div class="products">
            <div class="products-wrapper">
               
            </div>
            <div class="pagination-wrapper"></div>
        </div>
    </div>
    
@endsection