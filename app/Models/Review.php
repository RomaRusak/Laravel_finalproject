<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;
    protected $table = 'reviews';
    protected $guarded = false;

    protected function users() {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
}
