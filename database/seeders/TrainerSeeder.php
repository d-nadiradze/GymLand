<?php

namespace Database\Seeders;

use App\Models\Trainer;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class TrainerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            [
                'id' => 1,
                'first_name' => 'ashlie',
                'last_name' => 'thompson',
                'email' => 'trainer@mail.ru',
                'password' => Hash::make('Trainer123!'),
                'gym_id' => '1',
                'profession_info' => 'professionalTrainer',
                'image' => 'AshlieThompson.png',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 2,
                'first_name' => 'jemmy',
                'last_name' => 'watson',
                'email' => 'trainer2@mail.ru',
                'password' => Hash::make('Trainer123!'),
                'gym_id' => '1',
                'profession_info' => 'professionalTrainer',
                'image' => 'jemmyWatson.png',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 3,
                'first_name' => 'jeremy',
                'last_name' => 'white',
                'email' => 'trainer3@mail.ru',
                'password' => Hash::make('Trainer123!'),
                'gym_id' => '2',
                'profession_info' => 'professionalTrainer',
                'image' => 'JeremyWhite.png',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 4,
                'first_name' => 'trainer4',
                'last_name' => 'trainer4',
                'email' => 'trainer4@mail.ru',
                'password' => Hash::make('Trainer123!'),
                'gym_id' => '2',
                'profession_info' => 'professionalTrainer',
                'image' => 'JeremyWhite.png',
                'created_at' => now(),
                'updated_at' => now()
            ],

        ];

        Trainer::insert($data);
    }
}
