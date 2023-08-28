<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use App\Models\ProductReview;
use App\Models\Review;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProductPageConrtoller extends Controller
{
    public function show($category, $id)
    {

        $product = Product::find($id);
        $categories = Category::all();

        $images = [
            $product->images->img_1,
            $product->images->img_2,
            $product->images->img_3,
            $product->images->img_4,
        ];

        $images = array_filter($images, function ($item) {
            return $item;
        });

        $reviews = $product->reviews->sortDesc()->toArray();

        if (count($reviews)) {
            $reviews = array_map(function ($review) {

                $description = [];

                foreach ($review as $key => $value) {

                    if ($key === 'created_at') {
                        $timeStamp = strtotime($value);

                        $date = date("d.m.y H:i:s", $timeStamp);

                        $description[$key] = $date;
                        continue;
                    };

                    $description[$key] = $value;
                };

                $description['user'] = User::find($description['user_id'])->name;

                return $description;
            }, $reviews);
        }

        $ratingRemainder = null;
        if ($product->rating)  $ratingRemainder = $product->rating - floor($product->rating);

        return view('product', compact('categories', 'category', 'product', 'images', 'reviews', 'ratingRemainder'));
    }

    public function store($category, $id)
    {

        $data = request()->validate([
            'rating' => 'required',
            'detail' => 'required',
        ]);

        $data = array_map(function ($item) {
            return trim($item);
        }, $data);

        $currentProduct = Product::find($id);
        $reviewsCurrentCounter = $currentProduct->reviews->count();
        $ratingArr = $currentProduct->reviews->toArray();
        $ratingSumCurrent = array_reduce($ratingArr, function ($accum, $item) {
            return $accum += $item['rating'];
        }, 0);

        if (is_null($currentProduct->rating)) {
            $currentProduct->update([
                "rating" => +$data['rating'],
            ]);
        } else {
            $currentProduct->update([
                "rating" => round(($ratingSumCurrent + +$data['rating']) / ($reviewsCurrentCounter + 1), 2),
            ]);
        };

        $newReview = Review::create([
            'detail' => $data['detail'],
            'rating' => $data['rating'],
            'user_id' => auth()->id(),
        ]);

        ProductReview::create([
            'product_id' => $id,
            'review_id' => $newReview->id,
        ]);

        return redirect()->route('product.show', [$category, $id]);
    }
}
