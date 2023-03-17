<?php

namespace Database\Factories;

use App\Models\ParentDepartment;
use Illuminate\Database\Eloquent\Factories\Factory;

class DepartmentFactory extends Factory
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
            'parent_department_id' => ParentDepartment::factory(),
        ];
    }
}
