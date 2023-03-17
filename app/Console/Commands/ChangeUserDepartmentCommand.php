<?php

namespace App\Console\Commands;

use App\Enums\UserRole;
use App\Models\Department;
use App\Models\User;
use Illuminate\Console\Command;

class ChangeUserDepartmentCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'user:department';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $user = User::where('email', $this->ask('Enter the email'))->first();
        if (!$user) {
            $this->error('User not found');
            return 1;
        }

        if ($user->getRoleNames()->contains(UserRole::Developer)) {
            $this->info("Name: {$user->name}\nEmail: {$user->email}\nDepartment: {$user->department->name}");
            $department = Department::where('name', $this->choice('Enter the department name', Department::pluck('name')->toArray()))->firstOrFail();
            $user->department_id = $department->id;
            $user->save();

            $user->refresh();

            $this->info("Department changed\n");

            $this->info("Name: {$user->name}\nEmail: {$user->email}\nDepartment: {$user->department->name}");
        } else {
            $this->error('User is not developer');
        }
    }
}
