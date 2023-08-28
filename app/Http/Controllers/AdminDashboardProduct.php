<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use App\Models\Sizes;
use App\Models\Image;
use App\Models\Color;
use App\Models\Price;
use Illuminate\Http\Request;

class AdminDashboardProduct extends Controller
{

    protected function readdir()
    {
        $images = [];

        if ($handle = opendir('images/products')) {

            while (false !== ($entry = readdir($handle))) {
                if ($entry !== '.' && $entry !== '..') $images[] = $entry;
            }

            return count($images) > 0 ? $images : [];
        }
    }

    protected function validatePrice($rubles, $kopeks, $discount)
    {

        if (!empty($kopeks)) {
            $price = + ($rubles . '.' . $kopeks);
        } else {
            $price = +$rubles;
        }

        if (!empty($discount)) {
            $priceWithDiscount = $price -  ($price * $discount / 100);
            $totalDiscount = $price * $discount / 100;
        } else {
            $priceWithDiscount = $price;
            $totalDiscount = 0;
        }

        return ["price" => $price, 'priceWithDiscount' => round($priceWithDiscount, 2), 'totalDiscount' => round($totalDiscount, 2)];
    }

    protected function parsePriceFromDb($product)
    {
        $parsedPrice = [];
        $parsedPrice['discount'] = $product->prices->discount;
        $parsedPrice['roubles'] = intval($product->prices->price);
        $parsedPrice['kopeks'] =  intval(round(($product->prices->price - $parsedPrice['roubles']) * 100));

        return $parsedPrice;
    }

    public function create(Category $category)
    {
        $categories = Category::all();

        $images = $this->readdir();

        return view('adminDashboardProduct.create', compact('category', 'categories', 'images'));
    }

    public function store()
    {


        $data = request()->validate([
            'name'   => 'required',
            'description' => 'required',
            'category' => 'required',
            's-size' => 'required',
            'm-size' => 'required',
            'l-size' => 'required',
            'xl-size' => 'required',
            'color_white' => "required",
            'color_black' => "required",
            'color_green' => "required",
            'color_pink' => "required",
            'color_yellow' => "required",
            'img-1' => '',
            'img-2' => '',
            'img-3' => '',
            'img-4' => '',
            'rubles' => 'min: 1',
            'kopeks' => 'max:100|min:0',
            'discount' => 'max:100|min:0',
        ]);

        $data = array_map(function ($item) {
            return trim($item);
        }, $data);

        $priceValues = $this->validatePrice($data['rubles'], $data['kopeks'], $data['discount']);
        $data['price'] = $priceValues['price'];
        $data['priceWithDiscount'] = $priceValues['priceWithDiscount'];
        $data['totalDiscount'] = $priceValues['totalDiscount'];

        if (!count(Product::where('name', $data['name'])->get()->toArray())) {

            $newProduct = Product::firstOrCreate([
                'name' => $data['name'],
            ], [
                'name' => $data['name'],
                'description' => $data['description'],
                'category_id' => $data['category'],
            ]);

            Sizes::create([
                'product_id' => $newProduct->id,
                's_size' => $data['s-size'] === 'true' ? 1 : 0,
                'm_size' => $data['m-size'] === 'true' ? 1 : 0,
                'l_size' => $data['l-size'] === 'true' ? 1 : 0,
                'xl_size' => $data['xl-size'] === 'true' ? 1 : 0,
            ]);

            Image::create([
                'product_id' => $newProduct->id,
                'img_1' => $data['img-1'],
                'img_2' => $data['img-2'],
                'img_3' => $data['img-3'],
                'img_4' => $data['img-4'],
            ]);

            Color::create([
                'product_id' => $newProduct->id,
                'color_white' => $data['color_white'] === 'true' ? 1 : 0,
                'color_black' => $data['color_black'] === 'true' ? 1 : 0,
                'color_green' => $data['color_green'] === 'true' ? 1 : 0,
                'color_pink' => $data['color_pink'] === 'true' ? 1 : 0,
                'color_yellow' => $data['color_yellow'] === 'true' ? 1 : 0,
            ]);

            Price::create([
                'product_id' => $newProduct->id,
                'price' => $data['price'],
                'total_price' => $data['priceWithDiscount'],
                'discount' => $data['discount'],
                'total_discount' => $data['totalDiscount'],
            ]);

            return redirect()->route('adminDashboardCategory.show', $newProduct->category->id);
        }

        return redirect()->route('adminDashboardCategory.show', $data['category']);
    }

    public function edit(Product $product)
    {
        $categories = Category::all();
        $images = $this->readdir();

        $parsedPrice = $this->parsePriceFromDb($product);

        return view('adminDashboardProduct.edit', compact('product', 'categories', 'images', 'parsedPrice'));
    }

    public function update(Product $product)
    {

        $data = request()->validate([
            'name'   => 'required',
            'description' => 'required',
            'category' => 'required',
            's-size' => 'required',
            'm-size' => 'required',
            'l-size' => 'required',
            'xl-size' => 'required',
            'color_white' => "required",
            'color_black' => "required",
            'color_green' => "required",
            'color_pink' => "required",
            'color_yellow' => "required",
            'img-1' => '',
            'img-2' => '',
            'img-3' => '',
            'img-4' => '',
            'rubles' => 'min: 1',
            'kopeks' => 'max:100|min:0',
            'discount' => 'max:100|min:0',
        ]);

        $priceValues = $this->validatePrice($data['rubles'], $data['kopeks'], $data['discount']);
        $data['price'] = $priceValues['price'];
        $data['priceWithDiscount'] = $priceValues['priceWithDiscount'];
        $data['totalDiscount'] = $priceValues['totalDiscount'];

        $data = array_map(function ($item) {
            return trim($item);
        }, $data);

        $product->update([
            'name' => $data['name'],
            'description' => $data['description'],
            'category_id' => $data['category'],
        ]);

        $product->sizes->update([
            's_size' => $data['s-size'] === 'true' ? 1 : 0,
            'm_size' => $data['m-size'] === 'true' ? 1 : 0,
            'l_size' => $data['l-size'] === 'true' ? 1 : 0,
            'xl_size' => $data['xl-size'] === 'true' ? 1 : 0,
        ]);

        $product->images->update([
            'img_1' => $data['img-1'],
            'img_2' => $data['img-2'],
            'img_3' => $data['img-3'],
            'img_4' => $data['img-4'],
        ]);

        $product->colors->update([
            'color_white' => $data['color_white'] === 'true' ? 1 : 0,
            'color_black' => $data['color_black'] === 'true' ? 1 : 0,
            'color_green' => $data['color_green'] === 'true' ? 1 : 0,
            'color_pink' => $data['color_pink'] === 'true' ? 1 : 0,
            'color_yellow' => $data['color_yellow'] === 'true' ? 1 : 0,
        ]);

        $product->prices->update([
            'price' => $data['price'],
            'total_price' => $data['priceWithDiscount'],
            'discount' => $data['discount'],
            'total_discount' => $data['totalDiscount'],
        ]);

        return redirect()->route('adminDashboardCategory.show', $product->category->id);
    }

    public function destroy(Product $product)
    {
        $category = $product->category;
        $product->delete();

        return redirect()->route('adminDashboardCategory.show', $category->id);
    }
}
