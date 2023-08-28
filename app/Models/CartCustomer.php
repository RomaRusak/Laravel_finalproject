<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CartCustomer extends Model
{
    use HasFactory;
    protected $table = 'cart_customers';
    protected $guarded = false;
}
