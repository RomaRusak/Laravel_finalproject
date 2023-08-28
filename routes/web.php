<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', [App\Http\Controllers\HomePageController::class, 'index'])->name('homePage.index');
Route::get('/catalog/all', [App\Http\Controllers\CatalogPageConrtoller::class, 'index'])->name('catalog.index');
Route::get('/catalog/{category}', [App\Http\Controllers\CatalogPageConrtoller::class, 'show'])->name('catalog.show');

Route::get('/catalog/{category}/{id}', [App\Http\Controllers\ProductPageConrtoller::class, 'show'])->name('product.show');

Route::middleware(['auth'])->group(function() {
    Route::post('/catalog/{category}/{id}', [App\Http\Controllers\ProductPageConrtoller::class, 'store'])->name('product.store');
});

Route::get('/getproducts', [App\Http\Controllers\CatalogPageConrtoller::class, 'products'])->name('products'); 

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::middleware(['admin'])->group(function() {

    Route::get('/admin', [App\Http\Controllers\AdminDashboardCategory::class, 'index'])->name('adminDashboardCategory.index');

    Route::get('/admin/create', [App\Http\Controllers\AdminDashboardCategory::class, 'create'])->name('adminDashboardCategory.create');
    Route::get('/admin/product/{category}/create', [App\Http\Controllers\AdminDashboardProduct::class, 'create'])->name('adminDashboardProduct.create');

    Route::get('/admin/{category}', [App\Http\Controllers\AdminDashboardCategory::class, 'show'])->name('adminDashboardCategory.show');

    Route::post('/admin', [App\Http\Controllers\AdminDashboardCategory::class, 'store'])->name('adminDashboardCategory.store');
    Route::post('/admin/product', [App\Http\Controllers\AdminDashboardProduct::class, 'store'])->name('adminDashboardProduct.store');

    Route::get('/admin/{category}/edit', [App\Http\Controllers\AdminDashboardCategory::class, 'edit'])->name('adminDashboardCategory.edit');
    Route::get('/admin/product/{product}/edit', [App\Http\Controllers\AdminDashboardProduct::class, 'edit'])->name('adminDashboardProduct.edit');

    Route::patch('/admin/{category}', [App\Http\Controllers\AdminDashboardCategory::class, 'update'])->name('adminDashboardCategory.update');
    Route::patch('/admin/product/{product}', [App\Http\Controllers\AdminDashboardProduct::class, 'update'])->name('adminDashboardProduct.update');

    Route::delete('/admin/{category}', [App\Http\Controllers\AdminDashboardCategory::class, 'destroy'])->name('adminDashboardCategory.destroy');
    Route::delete('/admin/product/{product}', [App\Http\Controllers\AdminDashboardProduct::class, 'destroy'])->name('adminDashboardProduct.destroy');
    
});

Route::post('/add_to_cart', [App\Http\Controllers\CartController::class, 'addToCart'])->name('addToCart');
Route::post('/get_cart_data', [App\Http\Controllers\CartController::class, 'getCartData'])->name('getCartData');
Route::get('/cart', [App\Http\Controllers\CartController::class, 'index'])->name('cart.index');
Route::get('/get_products_in_cart', [App\Http\Controllers\CartController::class, 'getProductsInCart'])->name('getProductsInCart');
Route::post('/product_cart_inc', [App\Http\Controllers\CartController::class, 'incProductInCart']);
Route::post('/product_cart_dec', [App\Http\Controllers\CartController::class, 'decProductInCart']);
Route::post('/product_cart_del', [App\Http\Controllers\CartController::class, 'delProductInCart']);

Route::get('/cart/order', [App\Http\Controllers\OrderDataController::class, 'index'])->name('order.index');
Route::post('/cart/order', [App\Http\Controllers\OrderDataController::class, 'store'])->name('order.store');