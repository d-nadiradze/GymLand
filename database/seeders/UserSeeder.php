<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
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
                'first_name' => 'user',
                'last_name' => 'userSurname',
                'email' => 'user@mail.ru',
                'password' => Hash::make('User123!'),
                'trainer_id' => '1',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 2,
                'first_name' => 'user2',
                'last_name' => 'userSurname2',
                'email' => 'user2@mail.ru',
                'password' => Hash::make('User123!'),
                'trainer_id' => '2',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 3,
                'first_name' => 'user3',
                'last_name' => 'userSurname3',
                'email' => 'user3@mail.ru',
                'password' => Hash::make('User123!'),
                'trainer_id' => '3',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 4,
                'first_name' => 'user4',
                'last_name' => 'userSurname4',
                'email' => 'user4@mail.ru',
                'password' => Hash::make('User123!'),
                'trainer_id' => '4',
                'created_at' => now(),
                'updated_at' => now()
            ],

        ];

        User::insert($data);
    }
}
