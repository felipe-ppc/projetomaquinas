<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Place extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'nomeLocal',
        'numeroSala',
    ];

    protected $table = "place";

    public function machineloan(){
        return $this->belongsTo(MachineLoan::class, 'foreign_key');
    }
}
