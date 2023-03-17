<?php

namespace App\Console\Commands;

use App\Models\Department;
use App\Models\ParentDepartment;
use Illuminate\Console\Command;

class ChangeDepartmentParentCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'department:parent';

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
        $department = Department::where('name', $this->choice('select department', Department::query()->pluck('name')->toArray()))->first();
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

        $department->update([
            'parent_department_id' => $parentDepartment->id
        ]);

        $department->refresh();
        $this->info("Department {$department->name} created!");

//        print department details
        $this->info("Department Details : ");
        $this->info("Name : {$department->name}");
        $this->info("Parent Department : {$department->parentDepartment->name}");

        return 0;
    }
}
