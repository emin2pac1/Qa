<?php

namespace Database\Seeders;

use App\Enums\UserRole;
use App\Models\Department;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            UserRoleSeeder::class,
            DepartmentSeeder::class
        ]);


        $user = User::factory()->create(['email' => 'admin@me.com','password' => bcrypt('sitemasterqa')]);
        $user->syncRoles([UserRole::QaAdmin]);
        $user2 = User::factory()->developer()->create(['email' => 'dev@me.com', 'password' => bcrypt('sitemasterdev')]);
        $user2->syncRoles([UserRole::Developer]);
    }
}
