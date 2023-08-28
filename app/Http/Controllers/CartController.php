<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\CartProduct;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function index() {

        $categories = Category::all();
        
        return view('cart', compact('categories'));
    }

    public function getProductsInCart(Request $request) {

        $cart_id = $request->cookie('cart_id');

        if ($cart_id) {
            $productsInCart = CartProduct::where('cart_id', $cart_id)->get()->map(function (object $product) {

                $product->product->images;
                $product->product->prices;
    
                return $product;
            });
        } else {
            $productsInCart = [];
        }

        return response()->json($productsInCart);
    }

    public function addToCart(Request $request) { 
        

        $data = request()->validate([
            'id' => 'required',
            'size' => 'required',
            'color' => 'required',
        ]);
        
        $cart_id = $request->cookie('cart_id');
        
        if (empty($cart_id)) {
            $cart = Cart::create();
            $cart_id = $cart->id;
        } else {
            $cart = Cart::findOrFail($cart_id);
        }

        $id = $this->checkCart(CartProduct::where('cart_id', $cart_id)->get()->toArray(), $data);  
        
        if (!$id) {
            CartProduct::create([
                'cart_id' => $cart_id,
                'product_id' => $data['id'],
                'quantity' => 1,
                'color' => $data['color'],
                'size' => $data['size'],
            ]);
        } else {
            $currentProduct = CartProduct::where('product_id', $id)->first();
            $currentProduct->update([
                'quantity' => $currentProduct['quantity'] + 1,
            ]);
        }
        
        $productsInCart = CartProduct::where('cart_id', $cart_id)->get()->map(function (object $product) {
            $product->product->prices;

            return $product;
        });

        return response()->json($productsInCart)->withCookie(cookie('cart_id', $cart_id, 525600));
    }

    protected function checkCart($products, $data) {
       
        $id = null;

        foreach($products as $product) {
            if (($product['product_id'] == $data['id']) && $product['color'] == $data['color'] && $product['size'] == $data['size']) $id = $product['product_id'];
        }

        return $id;
    }

    public function getCartData(Request $request) {

        $cart_id = $request->cookie('cart_id');

        if ($cart_id) {
            $productsInCart = CartProduct::where('cart_id', $cart_id)->get()->map(function (object $product) {
                $product->product->prices;
    
                return $product;
            });
        } else {
            $productsInCart = [];
        }

        return response()->json($productsInCart);
    }

    public function incProductInCart(Request $request) {
        $data = request()->validate([
            'id' => 'required',
        ]);

        if ($data['id']) {
            $currentProduct = CartProduct::find($data['id']);

            $currentProduct->update([
                'quantity' => $currentProduct['quantity'] + 1,
            ]);
        }

        return redirect()->route('getProductsInCart');
    }

    public function decProductInCart(Request $request) {
        $data = request()->validate([
            'id' => 'required',
        ]);

        if ($data['id']) {
            $currentProduct = CartProduct::find($data['id']);

            $currentProduct->update([
                'quantity' => $currentProduct['quantity'] - 1,
            ]);

            if (!$currentProduct['quantity']) $currentProduct->delete();
        }

        return redirect()->route('getProductsInCart');
    }

    public function delProductInCart() {
        $data = request()->validate([
            'id' => 'required',
        ]);

        if ($data['id']) {
            $currentProduct = CartProduct::find($data['id']);
            $currentProduct->delete();
        }

        return redirect()->route('getProductsInCart');
    }
}
