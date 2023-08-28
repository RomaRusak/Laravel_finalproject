const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .js('resources/js/admin/AdminSortProducts.js', 'public/js/admin')
    .js('resources/js/BurgerMenu/BurgerMenu.js', 'public/js/BurgerMenu')
    .js('resources/js/home/script.js', 'public/js/home')
    .js('resources/js/catalog/script.js', 'public/js/catalog')
    .js('resources/js/product/script.js', 'public/js/product')
    .js('resources/js/cartWidget/script.js', 'public/js/cartWidget')
    .js('resources/js/cart/script.js', 'public/js/cart')
    .js('resources/js/order/script.js', 'public/js/order')
    .sass('resources/sass/app.scss', 'public/css')
    .sass('resources/sass/admin/style.scss', 'public/css/admin')
    .sass('resources/sass/common/style.scss', 'public/css/common')
    .sass('resources/sass/home/style.scss', 'public/css/home')
    .sass('resources/sass/catalog/style.scss', 'public/css/catalog')
    .sass('resources/sass/product/style.scss', 'public/css/product')
    .sass('resources/sass/cart/style.scss', 'public/css/cart')
    .sass('resources/sass/order/style.scss', 'public/css/order');
