<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Machine extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'numeropatrimonio',
        'modelomaquina',
        'memoriaram',
        'hdmaquina',
        'sistemaoperacional',
        'softwarearcgis',
        'statusmaquina',
        'maquinaoperacional',
        'dataaquisicao',
    ];

    protected $table = "machine";

    public function machineloan(){
        return $this->belongsTo(MachineLoan::class, 'foreign_key');
    }
}
