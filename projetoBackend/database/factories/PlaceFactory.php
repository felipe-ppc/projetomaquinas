<?php

namespace Database\Factories;
use App\Models\Place;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Place>
 */
class PlaceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

     protected $model = Place::class;

    public function definition()
    {
        return [
            'nomeLocal'=> $this->faker->words(3, true),
            'numSala' => $this->faker->sentence
        ];
    }
}
