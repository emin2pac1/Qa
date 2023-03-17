<?php

namespace Database\Factories;

use App\Models\ParentDepartment;
use Illuminate\Database\Eloquent\Factories\Factory;

class ParentDepartmentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name(),
        ];
    }
}
