@extends('layouts.adminDashboardCategory.index')

@section('content')
    <div class="admin-wrapper">
    @isset($categories)
    <h2 class="admin-title">Категории</h2>
        <ul class="admin-list">
            @foreach($categories as $category)
            <li>
                <div class="category-wrapper">
                    <div class="category-info">
                        <p>Название категории: <span class="bold">{{ $category->name }}</span> </p>
                        <p>Код категории: <span class="bold">{{ $category->code }}</span> </p>
                    </div>
                    <div class="category-buttons-wrapper">
                        <a href="{{ route('adminDashboardCategory.edit', $category->id) }}">
                            <button class="admin-button">Редактировать</button>
                        </a>
                        <form class="remove-button-form" action="{{ route('adminDashboardCategory.destroy', $category->id) }}" method="post">
                            @csrf
                            @method('delete')
                            <button type="submit" class="admin-button remove-button">Удалить</button>
                        </form>
                        <a href="{{ route('adminDashboardCategory.show', $category->id) }}">
                            <button class="admin-button show-products-button">продукты</button>
                        </a>
                    </div>
                </div>
            </li>
            @endforeach
        </ul>
    @endisset

    @empty($categories[0])
        <h2 class="admin-title">В данный момент категории отсутствуют</h2>
    @endempty

        <div>
            <a href="/admin/create">
                <button class="admin-button">Добавить категорию</button>
            </a>
        </div>
    </div>
@endsection