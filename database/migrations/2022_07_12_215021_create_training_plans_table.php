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
        Schema::create('training_plans', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->integer('day');
            $table->foreignId('trainer_id')->constrained('trainers')->cascadeOnDelete();
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->tinyText('breakfast');
            $table->tinyText('lunch');
            $table->tinyText('dinner');
            $table->tinyText('supper')->nullable();
            $table->tinyText('training')->nullable();
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
        Schema::dropIfExists('training_plans');
    }
};
