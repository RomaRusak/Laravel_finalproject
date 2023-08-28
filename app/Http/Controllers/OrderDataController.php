<?php

namespace App\Http\Controllers;

use App\Models\CartCustomer;
use App\Models\Category;
use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class OrderDataController extends Controller
{
    public function index()
    {
        $categories = Category::all();

        $userData = auth()->user() ? auth()->user()->toArray() : [];

        return view('order', compact('categories', 'userData'));
    }

    public function store(Request $request)
    {

        $validator = Validator::make($request->toArray(), [
            'name' => 'required|string|min:3',
            'email' => 'required|string',
            'city' => 'required|string|min:3',
            'street' => 'required|string|min:3',
            'home_number' => 'required|string',
            'apartment_number' => 'required|string',
            'phone_number' => 'required|string',
            'delivery' => 'required|string',
            'payment' => 'required|string',
        ]);

        if ($validator->fails()) {
            $messages = $validator->messages()->toArray();
            return response()->json(['errors' => $messages]);
        }

        $data = [
            'name' => $request['name'],
            'email' => $request['email'],
            'city' => $request['city'],
            'street' => $request['street'],
            'home_number' => $request['home_number'],
            'apartment_number' => $request['apartment_number'],
            'phone_number' => $request['phone_number'],
            'delivery' => $request['delivery'],
            'payment' => $request['payment'],

        ];

        $data = array_map(function ($item) {
            return trim($item);
        }, $data);

        $cart_id = $request->cookie('cart_id');

        $newCustomer = Customer::firstOrCreate([
            'name' => $data['name'],
            'email' => $data['email'],
            'city' => $data['city'],
            'street' => $data['street'],
            'home_number' => $data['home_number'],
            'apartment_number' => $data['apartment_number'],
            'phone_number' => $data['phone_number'],
            'delivery' => $data['delivery'],
            'payment' => $data['payment'],
        ], [
            'name' => $data['name'],
            'email' => $data['email'],
            'city' => $data['city'],
            'street' => $data['street'],
            'home_number' => $data['home_number'],
            'apartment_number' => $data['apartment_number'],
            'phone_number' => $data['phone_number'],
            'delivery' => $data['delivery'],
            'payment' => $data['payment'],
        ]);

        CartCustomer::create([
            'cart_id' => $cart_id,
            'customer_id' => $newCustomer->id,
        ]);



        return response(['message' => 'Success'])->withCookie(cookie('cart_id', 'true', -1));
    }
}
