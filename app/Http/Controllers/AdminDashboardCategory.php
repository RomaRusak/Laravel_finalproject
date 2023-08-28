<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;

class AdminDashboardCategory extends Controller
{
    public function index() {
        $categories = Category::all();
        return view('adminDashboardCategory.index', compact('categories'));
    }

    public function create() {
        return view('adminDashboardCategory.create');
    }

    public function store(Request $request) {
        $data = $request->validate([
            'name'   => 'required',
            'code' => 'required',
        ]);

        $data = array_map(function($item) {
            return trim($item);
        },$data);

        Category::firstOrCreate([
            'code' => $data['code'],
        ], $data);

        return redirect()->route('adminDashboardCategory.index');
    }

    public function edit(Category $category) {
        
        return view('adminDashboardCategory.edit', compact('category'));
    }

    public function update(Category $category) {
        $data = request()->validate([
            'name'   => 'required',
            'code' => 'required',
        ]);

        $data = array_map(function($item) {
            return trim($item);
        },$data);

        $category->update($data);

        return redirect()->route('adminDashboardCategory.index');
    }

    public function destroy(Category $category) {
        $category->delete();

        return redirect()->route('adminDashboardCategory.index');
    }

    public function show(Request $request, Category $category) {
        $sortyInputValue = $request->sort ? $request->sort : 'nameASC';


        function getProducts($value, $category) {
            switch($value) {
                case 'nameASC':
                    return Product::where('category_id', $category->id)->orderBy('name', 'ASC')->get();
                break;
                case 'nameDESC':
                    return Product::where('category_id', $category->id)->orderBy('name', 'DESC')->get();
                break;
                case 'dateASC':
                    return Product::where('category_id', $category->id)->orderBy('created_at', 'ASC')->get();
                break;
                case 'dateDESC':
                    return Product::where('category_id', $category->id)->orderBy('created_at', 'DESC')->get();
                break;
            }
        }

       $products = getProducts($sortyInputValue, $category);
       
        // $products = $category->products; //было до сортировки

        return view('adminDashboardProduct.index', compact('products', 'category', 'sortyInputValue'));
    }
}
