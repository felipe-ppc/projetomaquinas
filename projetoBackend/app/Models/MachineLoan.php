<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MachineLoan extends Model
{
    use HasFactory;
    protected $fillable =[
        'id',
        'dataEmprestimo',
        'dataDevolucao',
    ];

    public function collaborator(){
        return $this->hasOne(Collaborator::class, 'foreign_key');
    }
    
    public function machine(){
        return $this->hasOne(Machine::class, 'foreign_key');
    }

    public function place(){
        return $this->hasOne(Place::class, 'foreign_key');
    }
}

