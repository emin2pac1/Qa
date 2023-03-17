<?php

namespace App\Http\Controllers\V1\Developer\Issues;

use App\Actions\Karajkom\Developer\Issue\IndexAction;
use App\Enums\IssuePriority;
use App\Enums\IssueStatus;
use App\Helpers\PriorityIconHelper;
use App\Http\Controllers\Controller;
use App\Http\Resources\Department\DepartmentIndexResource;
use App\Http\Resources\Issues\IssueIndexResource;
use App\Models\Department;
use Inertia\Inertia;

class ViewController extends Controller
{
    public function __invoke(IndexAction $action)
    {
        return Inertia::render('Developer/Issues/Index', [
            'issues' => IssueIndexResource::collection($action->handle()),
            'statuses' => IssueStatus::getValues(),
            'priorities'=>IssuePriority::getValues(),
            'priority_icons'=>PriorityIconHelper::get(),
            'departments' => DepartmentIndexResource::collection(auth()->user()->department->parentDepartment->departments),
        ]);
    }
}
