<?php

namespace Database\Seeders;

use App\Models\Department;
use App\Models\ParentDepartment;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DepartmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            (object)['name' => 'IOS', 'parent' => 'All Mobile'],
            (object)['name' => 'Android', 'parent' => 'All Mobile'],
            (object)['name' => 'Web', 'parent' => 'All Web'],
        ];

        foreach ($data as $item) {
            Department::factory()->create([
                'name' => ucwords($item->name),
                'parent_department_id' => ParentDepartment::query()->firstOrCreate(['name' => ucwords($item->parent)], ['name' => ucwords($item->parent)])->id,
            ]);
        }
    }
}
