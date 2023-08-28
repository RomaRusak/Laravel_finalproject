<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;

class CatalogPageConrtoller extends Controller
{
    public function index()
    {
        $categoryTitle = 'весь ассортимент';
        $categories = Category::all();

        return view('catalog', compact('categories', 'categoryTitle'));
    }

    public function show($category, Request $request)
    {

        $categoryTitle = Category::where('code', $category)->first()->name;
        $categories = Category::all();

        $currentCategory = Category::where('code', $category)->first();

        return view('catalog', compact('categories', 'categoryTitle', 'currentCategory'));
    }

    public function products(Request $request)
    {

        if ($request->category === 'all') {
            $fullData = Product::all();
        } else {
            $fullData = Category::where('code', $request->category)->first()->products;
        }

        $fullData = $fullData->map(function (object $product) {

            $product->prices->toArray();
            $product->images->toArray();
            $product->sizes->toArray();
            $product->colors->toArray();
            $product = $product->toArray();

            return $product;
        });


        return response()->json([
            'products' => $fullData,
        ]);
    }
}
