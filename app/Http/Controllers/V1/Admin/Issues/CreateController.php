<?php

namespace App\Http\Controllers\V1\Admin\Issues;

use App\Enums\IssuePriority;
use App\Helpers\PriorityIconHelper;
use App\Http\Resources\Department\DepartmentIndexResource;
use App\Models\Department;
use Inertia\Inertia;

class CreateController
{
    public function __invoke()
    {
        return Inertia::render('Admin/Issues/Create', [
            'departments' => DepartmentIndexResource::collection(Department::all()),
            'priorities'=>IssuePriority::getValues(),
            'priority_icons'=>PriorityIconHelper::get(),
        ]);
    }
}
