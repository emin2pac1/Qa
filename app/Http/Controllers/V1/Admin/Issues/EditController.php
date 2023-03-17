<?php

namespace App\Http\Controllers\V1\Admin\Issues;

use App\Enums\IssuePriority;
use App\Enums\IssueStatus;
use App\Helpers\PriorityIconHelper;
use App\Http\Controllers\Controller;
use App\Http\Resources\Department\DepartmentIndexResource;
use App\Http\Resources\Issues\IssueResource;
use App\Models\Department;
use App\Models\Issue;
use Inertia\Inertia;
use Inertia\Response;

class EditController extends Controller
{
    public function __invoke(Issue $issue): Response
    {
        return Inertia::render('Admin/Issues/Edit', [
            'statuses' => IssueStatus::getValues(), // in here we didn't store statuses in db so we getting it from our enum
            'issue' => IssueResource::make($issue),
            'departments' => DepartmentIndexResource::collection(Department::all()),
            'priorities' => IssuePriority::getValues(),
            'priority_icons' => PriorityIconHelper::get(),
        ]);
    }
}
