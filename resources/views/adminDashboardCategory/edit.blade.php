@extends('layouts.adminDashboardCategory.index')

@section('content')
    <div class="admin-wrapper">
        <div>
            <a class="back-step-link" href="{{ route('adminDashboardCategory.index') }}">Вернуться в категории</a>
        </div>
        <h2 class="admin-title">Редактировать категорию: {{ $category->name }}</h2>

        <form action="{{ route('adminDashboardCategory.update', $category->id) }}" class="edit-category-form" method="post">
        @csrf
        @method('patch')
            <div class="edit-category-item">
                <label for="name">Название</label>
                <input type="text" name="name" placeholder="введите название категории" id="name" value="{{ $category->name }}">
            </div>
        
            <div class="edit-category-item">
                <label for="code">Код</label>
                <input type="text" name="code" placeholder="введите код категории" id="code" value="{{ $category->code }}">
            </div>

            <button class="admin-button" type="submit">Сохранить</button>
        </form>

    </div>
@endsection