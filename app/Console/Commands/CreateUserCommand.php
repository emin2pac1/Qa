<?php

namespace App\Console\Commands;

use App\Enums\UserRole;
use App\Models\Department;
use App\Models\User;
use Illuminate\Console\Command;

class CreateUserCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'user:create';

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
        $name = $this->ask('Name : ');
        $email = $this->ask('email :');
        if (User::where('email', $email)->exists()) {
            $this->info('User already exists');
            return 1;
        }

        $password = $this->ask('password : ');
        $role = $this->choice('select Role', UserRole::getValues());
        $department = null;
//        check role is valid. if not show suggestions
        if (!in_array($role, UserRole::getValues())) {
            $this->info('Invalid role. Valid roles are: ' . implode(', ', UserRole::getValues()));
            return 1;
        }

        if ($role == UserRole::Developer) {
            $department = Department::where('name', $this->choice('Select department', Department::all()->pluck('name')->toArray()))->first();
        }


//        check user exists
        if (User::where('email', $email)->exists()) {
            $this->info('User already exists');
            return 1;
        }


        $user = User::create([
            'name' => $name,
            'email' => $email,
            'password' => bcrypt($password),
            'department_id' => $department ? $department->id : null,
        ]);

        $user->assignRole($role);

        $this->info('User created successfully.');
//        print user details like name, email, role and department name if exists
        $this->info('User details:');
        $this->info('Name: ' . $user->name);
        $this->info('Email: ' . $user->email);
        $this->info('Role: ' . $user->getRoleNames()[0]);
        if ($user->department) {
            $this->info('Department: ' . $user->department->name);
        }
        return 0;
    }
}
