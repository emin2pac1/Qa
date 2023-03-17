<?php

namespace App\Http\Controllers\V1\Developer\Dashboard;

use App\Enums\IssueStatus;
use App\Models\Issue;
use Inertia\Inertia;

class ViewController
{
    public function __invoke()
    {
        return Inertia::render('Developer/Dashboard/Index', [
            'completed_issues' => Issue::query()->inCurrentDepartment()->inStatus(IssueStatus::Completed)->count(),
            'pending_issues' => Issue::query()->inCurrentDepartment()->inStatus(IssueStatus::Pending)->count(),
        ]);
    }
}
