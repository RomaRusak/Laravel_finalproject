
<header class="header">
    <nav class="nav">
        <div class="nav-logo-wrapper">
            <img src="/images/service/logo.svg">
        </div>
        <div class="nav-links-wrapper">
            <ul class="nav-links-list">
                <li><a href="{{ route('homePage.index') }}">Главная страница</a></li>
                <li><a href="{{ route('catalog.index') }}">Весь ассортимент</a></li>
                @foreach($categories as $category)
                    <li><a href="{{ route('catalog.show', $category->code) }}">{{ $category->name }}</a></li>
                @endforeach
                <li><a href="{{ route('cart.index') }}">Корзина</a></li>
                @auth
                    @if(auth()->user()->is_admin)
                        <li><a href="{{ route('adminDashboardCategory.index') }}" class="adminDashboard-link">Панель администратора</a></li>
                    @endif
                @endauth
            </ul>
        </div>
    </nav>
    <div class="auth-wrapper">
        <a href="/login" class="auth-link">Авторизация</a>
        @if (auth()->user())
            <span class="auth-info">Вы авторизованы, как {{ auth()->user()->name }} </span>
        @else
            <span class="auth-info">Вы не авторизованы</span>
        @endif
    </div>
    <div class="header-container">   

        <a href="/cart">
            <div class="cart-widget-wrapper">
                <p class="cart-widget-counter"></p>
            </div>
        </a>
    
        <div class="burger-menu">
            <div class="burger-item"></div>
            <div class="burger-item"></div>
            <div class="burger-item"></div>
        </div>
    </div>
</header>