<?php

namespace Database\Seeders;

use App\Enums\UserRole;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class UserRoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->createRoles();
    }

    protected function createRoles()
    {
        Role::findOrCreate(UserRole::QaAdmin);
        Role::findOrCreate(UserRole::Developer);
    }
}
