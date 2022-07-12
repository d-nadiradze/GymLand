<?php

namespace Database\Seeders;

use App\Models\Gym;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GymSeeder extends Seeder
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
                'name' => 'Fitness Heroes',
                'location' => 'რუსთაველის გამზირი 24',
                'image' => './images/gyms/FitnessHeroes/img.png',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 2,
                'name' => 'Strength Center',
                'location' => 'ი.ჭავჭავაძის 9',
                'image' => './images/gyms/StrengthCenter/img.png',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 3,
                'name' => 'Body Sculpting Studio',
                'location' => 'რუსთაველის გამზირი 24',
                'image' => './images/gyms/BodySculptingStudio/img.png',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 4,
                'name' => 'Power, Fitness and Strength',
                'location' => 'ვ.ფშაველას 12ბ',
                'image' => './images/gyms/PowerFitnessAndStrength/img.png',
                'created_at' => now(),
                'updated_at' => now()
            ],

        ];

        Gym::insert($data);
    }
}
