<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('machine', function (Blueprint $table) {
            $table->charset = 'utf8mb4';
            $table->id();
            $table->string('numeropatrimonio', 100)->unique()->nullable();
            $table->string('modelomaquina', 100)->nullable();
            $table->string('hdmaquina', 100)->nullable();
            $table->string('memoriaram', 100)->nullable();
            $table->string('sistemaoperacional', 100)->nullable();
            $table->string('softwarearcgis');
            $table->enum('statusmaquina', ['uso', 'desuso']);
            $table->string('maquinaoperacional');
            $table->date('dataaquisicao');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('machine');
    }
};
