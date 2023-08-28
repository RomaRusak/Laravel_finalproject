@extends('layouts.product.index')

@section('content')

@include('components.header.index')
 <div class="arrow-back-wrapper">
    <a href="{{ route('catalog.show', $category) }}">
        <img src="/images/service/product_arrow_back.svg" >
    </a>

    <div class="breadcrumbs-wrapper">
        <ul class="breadcrumbs-list">
            <li><a href="{{ route('homePage.index') }}">Главная/</a></li>
            <li><a href="{{ route('catalog.show', $product->category->code) }}">{{ $product->category->name }}/</a></li>
            <li><a href="{{ route('product.show', [$product->category->code, $product->id]) }}">{{ $product->name }}</a></li>
        </ul>
    </div>
 </div>

 <div class="product-wrapper">
    <div class="product-title-wrapper">{{ $product->name }}</div>
    <div class="product-images-wrapper">
        <div class="product-main-image-wrapper">
            @if ( !@empty($product->images->img_1) )
                <img src="/images/products/{{ $product->images->img_1 }}">
            @else
                <img src="/images/service/imageNotFound.jpg">
            @endif
        </div>

        <div class="product-all-images">
           @if (count($images) > 1)
            @foreach($images as $image)
                <div class="product-all-item">
                    <img src="/images/products/{{$image}}">
                </div>
            @endforeach
           @endif
        </div>
    </div>
    <form class="product-description">
        
        <input type="text" name="id" value="{{ $product->id }}" class="id-input" hidden>
       
        <div class="product-price-wrapper">
            <p class="product-price">{{ $product->prices->total_price }} б.р.</p>
        </div>

        <div class="product-colors">
            <h4 class="colors-title">Цвета</h4>
            
            <div class="colors-inputs-wrapper">
                <div class="{{ $product->colors->color_white ? "color-checkbox-wrapper" : "color-checkbox-wrapper hidden" }}">
                    <input type="checkbox" name="color" value="white" id="color-white">
                    <label for="color-white" class="color_white"></label>
                </div>
                <div class="{{ $product->colors->color_black ? "color-checkbox-wrapper" : "color-checkbox-wrapper hidden" }}">
                    <input type="checkbox" name="color" value="black" id="color-black">
                    <label for="color-black" class="color_black"></label>
                </div>
                <div class="{{ $product->colors->color_green ? "color-checkbox-wrapper" : "color-checkbox-wrapper hidden" }}">
                    <input type="checkbox" name="color" value="green" id="color-green">
                    <label for="color-green" class="color_green"></label>
                </div>
                <div class="{{ $product->colors->color_pink ? "color-checkbox-wrapper" : "color-checkbox-wrapper hidden" }}">
                    <input type="checkbox" name="color" value="pink" id="color-pink">
                    <label for="color-pink" class="color_pink"></label>
                </div>
                <div class="{{ $product->colors->color_yellow ? "color-checkbox-wrapper" : "color-checkbox-wrapper hidden" }}">
                    <input type="checkbox" name="color" value="yellow" id="color-yellow">
                    <label for="color-yellow" class="color_yellow"></label>
                </div>
            </div>
        </div>

        <div class="product-sizes">
            <h4 class="sizes-title">Размеры</h4>

            <div class="sizes-inputs-wrapper">
                <div class="{{ $product->sizes->s_size ? "size-checkbox-wrapper" : "size-checkbox-wrapper hidden" }}">
                    <input type="checkbox" name="size" value="S" id="s-size">
                    <label for="s-size" class="s-size"></label>
                </div>
                <div class="{{ $product->sizes->m_size ? "size-checkbox-wrapper" : "size-checkbox-wrapper hidden" }}">
                    <input type="checkbox" name="size" value="M" id="m-size">
                    <label for="m-size" class="m-size"></label>
                </div>
                <div class="{{ $product->sizes->l_size ? "size-checkbox-wrapper" : "size-checkbox-wrapper hidden" }}">
                    <input type="checkbox" name="size" value="L" id="l-size">
                    <label for="l-size" class="l-size"></label>
                </div>
                <div class="{{ $product->sizes->xl_size ? "size-checkbox-wrapper" : "size-checkbox-wrapper hidden" }}">
                    <input type="checkbox" name="size" value="XL" id="xl-size">
                    <label for="xl-size" class="xl-size"></label>
                </div>
            </div>
        </div>

        @isset($product->rating)
            <div class="product-rating">
               
                @for ($i = 0; $i < floor($product->rating); $i++)
                     @if ($i % 2 === 0)
                        @continue
                    @endIf
                    <img src="/images/service/full_star.png" >
                @endfor

                @if(floor($product->rating) % 2 === 0)
                    @switch(1)
                        @case($ratingRemainder < 0.25)
                            @break

                        @case($ratingRemainder < 0.75)
                            <img src="/images/service/half_star.png" >
                            @break

                        @default
                            <img src="/images/service/full_star.png" >
                    @endswitch
                @else
                    @switch(1)
                            @case($product->rating - (floor($product->rating) - 1 ) + $ratingRemainder < 1)
                                @break

                            @case($product->rating - (floor($product->rating) - 1 ) + $ratingRemainder < 2)
                                <img src="/images/service/half_star.png" >
                                @break

                            @default
                                <img src="/images/service/full_star.png" >
                    @endswitch
                @endif
           
            </div>
        @endisset

        <div>
            <button type="submit" class="addToCart-button">В корзину</button>
        </div>

        @if ($product->description)
            <div class="product-depiction">
                <h3 class="product-depiction-title">Описание</h3>
                <div class="product-depiction-content">
                    {!! $product->description !!}
                </div>
            </div>
        @endif
    </form>

 </div>

@if (count($reviews) > 0)
    <div class="reviews-wrapper">
        <h2 class="reviews-title">Отзывы о товаре</h2>

        <div class="service-reviews-wrapper">
            <div class="reviews-container">
                <div class="reviews-line">
                    @foreach($reviews as $review)
                        <div class="review-wrapper">
                            <div class="review-rating-wrapper">
                                @for ($i = 0; $i < $review['rating']; $i++)
                                    @if ($i % 2 === 0)
                                        @continue
                                    @endIf
                                    <img src="/images/service/full_star.png" >
                                @endfor
                                @if ($review['rating'] % 2 !== 0)
                                    <img src="/images/service/half_star.png" >
                                @endIf
                            </div>
                            
                            <div class="review-detail">
                                <p>{{ $review['detail'] }}</p>
                            </div>

                            <div class="review-info">
                                <div class="review-author">
                                    {{ $review['user'] }}
                                </div>

                                <div class="review-date">
                                    {{ $review['created_at'] }}
                                </div>
                            </div>
                        </div>
                    @endforeach
                    
                </div>
            </div>

            
        </div>

      
    </div>
@endif

<div class="add-review-wrapper">
    <button class="add-review-button">Добавить отзыв</button>
</div>

@endsection

