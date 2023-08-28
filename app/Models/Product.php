<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $table = 'products';
    protected $guarded = false;

    protected function category() {
        return $this->belongsTo(Category::class, 'category_id', 'id');
    }

    protected function sizes() {
        return $this->hasOne(Sizes::class, 'product_id', 'id');
    }

    protected function images() {
        return $this->hasOne(Image::class, 'product_id', 'id');
    }

    protected function colors() {
        return $this->hasOne(Color::class, 'product_id', 'id');
    }

    protected function prices() {
        return $this->hasOne(Price::class, 'product_id', 'id');
    }

    protected function reviews() {
        return $this->belongsToMany(Review::class, 'product_reviews', 'product_id', 'review_id');
    }

    protected function carts() {
        return $this->belongsToMany(Cart::class, 'cart_products', 'product_id', 'cart_id');
    }
}
