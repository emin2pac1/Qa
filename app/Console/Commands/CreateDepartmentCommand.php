<?php

namespace App\Console\Commands;

use App\Models\Department;
use App\Models\ParentDepartment;
use Illuminate\Console\Command;

class CreateDepartmentCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'department:create {name}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Creates a new department';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $name = ucwords($this->argument('name'));
        if (Department::where('name', $name)->exists()) {
            $this->error('Department already exists');
            return 1;
        }
        $parent_create = $this->choice('Parent Department ', [
            'NEW', 'EXISTING'
        ]);
        $parentDepartment = null;
        if ($parent_create == 'NEW') {
            $parentDepartment_name = $this->ask('Parent Department Name : ');
            $parentDepartment_name = ucwords($parentDepartment_name);
            $parentDepartment = ParentDepartment::query()->firstOrCreate(['name' => $parentDepartment_name], ['name' => $parentDepartment_name]);
        } elseif ($parent_create == 'EXISTING') {
            $parentDepartment = ParentDepartment::query()->where('name', ucwords($this->choice('Parent Department Name : ', ParentDepartment::query()->pluck('name')->toArray())))->first();
        }
        if (!$parentDepartment) {
            $this->error('Parent Department not found');
            return 1;
        }
        $department = Department::query()->create([
            'name' => $name,
            'parent_department_id' => $parentDepartment->id
        ]);

        $this->info("Department {$name} created!");

//        print department details
        $this->info("Department Details : ");
        $this->info("Name : {$department->name}");
        $this->info("Parent Department : {$department->parentDepartment->name}");


        return 0;
    }
}
