<?php

namespace Database\Seeders;

use App\Models\Admin;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
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
                'first_name' => 'Admin',
                'last_name' => 'Admin',
                'email' => 'admin@gymland.ge',
                'password' => Hash::make('Admin123!'),
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 2,
                'first_name' => 'superAdmin',
                'last_name' => 'superAdmin',
                'email' => 'superAdmin@gymland.ge',
                'password' => Hash::make('Admin123!'),
                'created_at' => now(),
                'updated_at' => now()
            ],

        ];

        Admin::insert($data);
    }
}
