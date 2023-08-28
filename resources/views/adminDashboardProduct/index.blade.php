@extends('layouts.adminDashboardProduct.index')

@section('content')
<div class="admin-wrapper">
    <div>
        <a class="back-step-link" href="{{ route('adminDashboardCategory.index') }}">Вернуться в категории</a>
    </div>
    @isset($products[0])   
    <div class="sort-products-wrapper">
        <form class="sort-products-form" action="{{ route('adminDashboardCategory.show', $products[0]->category->id) }}">
            <select name="sort">
                <option value="nameASC"
                {{ $sortyInputValue === 'nameASC' ? 'selected' : '' }}
                >Наименование(А->Я)</option>
                <option value="nameDESC"
                {{ $sortyInputValue === 'nameDESC' ? 'selected' : '' }}
                >Наименование(Я->A)</option>
                <option value="dateDESC"
                {{ $sortyInputValue === 'dateDESC' ? 'selected' : '' }}
                >Сначала новые</option>
                <option value="dateASC"
                {{ $sortyInputValue === 'dateASC' ? 'selected' : '' }}
                >Сначала старые</option>
            </select>
        </form>
    </div>

        <h2 class="admin-title">Текущая категория: {{ $products[0]->category->name }}</h2>
        
        <ul class="admin-list">
            @foreach($products as $product)
                <li>
                    <div class="product-wrapper">
                        <div class="product-name">
                            <p>Название продукта:</p> <span class="bold">{{ $product->name }}</span> 
                        </div>
                        <div class="product-description">
                            {{ $product->description }}
                        </div>
                        <div class="product-service">
                            <div class="product-buttons-wrapper">
                                <a href="{{ route('adminDashboardProduct.edit', $product->id) }}">
                                    <button class="admin-button">Редактировать</button>
                                </a>
                                <form action="{{ route('adminDashboardProduct.destroy', $product->id) }}" class="remove-button-form" method="post">
                                @csrf
                                @method('delete')
                                    <button class="admin-button remove-button">Удалить</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </li>
            @endforeach
        </ul>

    @endisset

    @empty($products[0])
        <h2 class="admin-title">В данный момент продукты отсутствуют</h2>
    @endempty

    <div>
        <a href="{{ route('adminDashboardProduct.create', $category->id) }}">
            <button class="admin-button">Добавить продукт</button>
        </a>
    </div>
</div>
@endsection