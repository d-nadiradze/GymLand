<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Trainee extends Model
{
    use HasFactory;

    protected $fillable = [
        'first_name',
        'last_name',
        'trainer_id'
    ];

    public function trainer (): BelongsTo
    {
        return $this->belongsTo(Trainer::class);
    }

}
