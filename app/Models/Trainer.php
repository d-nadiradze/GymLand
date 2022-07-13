<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;


class Trainer extends Authenticatable
{
    use HasFactory;

    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'password',
    ];

    public function user() :HasMany
    {
        return $this->hasMany(User::class);
    }

    public function gym() :belongsTo
    {
        return $this->belongsTo(Gym::class);
    }


    public function trainingPlan (): HasMany
    {
        return $this->HasMany(TrainingPlan::class);
    }
}
