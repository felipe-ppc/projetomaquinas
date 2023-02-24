<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Collaborator extends Model
{
    use HasFactory;

    protected $fillable = [
        'nome',
        'email',
        'telefone',
    ];
    
    public function machineloan(){
        return $this->belongsTo(MachineLoan::class);
    }
}
