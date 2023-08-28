@extends('layouts.adminDashboardCategory.index')

@section('content')
    <div class="admin-wrapper">
        <div>
            <a class="back-step-link" href="{{ route('adminDashboardCategory.index') }}">Вернуться в категории</a>
        </div>
        <h2 class="admin-title">Добавить Категорию</h2>

        <form class="add-category-form" action="{{ route('adminDashboardCategory.store') }}" method="post">
            @csrf

            <div class="add-category-item">
                <label for="name">Название</label>
                <input type="text" name="name" placeholder="введите название категории" id="name">
            </div>
    
            <div class="add-category-item">
                <label for="code">Код</label>
                <input type="text" name="code" placeholder="введите код категории" id="code">
            </div>

            <button class="admin-button" type="submit">Добавить</button>
        </form>
    </div>
@endsection