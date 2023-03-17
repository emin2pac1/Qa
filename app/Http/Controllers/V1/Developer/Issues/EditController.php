<?php

namespace App\Http\Controllers\V1\Developer\Issues;

use App\Enums\IssueStatus;
use App\Helpers\PriorityIconHelper;
use App\Http\Controllers\Controller;
use App\Http\Resources\Issues\IssueResource;
use App\Models\Issue;
use Inertia\Inertia;

class EditController extends Controller
{
    public function __invoke(Issue $issue)
    {
        return Inertia::render('Developer/Issues/Edit', [
            'issue' => IssueResource::make($issue),
            'statuses' => IssueStatus::getValues(),
            'can_edit' => $issue->canEdit(),
            'in_department' => $issue->inDepartment(),
            'priority_icons'=>PriorityIconHelper::get(),
        ]);
    }
}
