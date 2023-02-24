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
        Schema::create('machine_loan', function (Blueprint $table) {
            $table->charset = 'utf8mb4';
            $table->id();
            $table->foreignId('idColaborador')->constrained('collaborators');
            $table->foreignId('idMaquina')->constrained('machine');
            $table->foreignId('idLocal')->constrained('place');
            $table->date('dataEmprestimo');
            $table->date('dataDevolucao');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('machine_loan');
    }
};
