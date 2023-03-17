<?php

namespace App\Http\Controllers\V1\Developer\Issues;

use App\Actions\Karajkom\Developer\Issue\UpdateAction;
use App\Enums\IssueStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\Developer\Issue\UpdateRequest;
use App\Models\Issue;

class UpdateController extends Controller
{
    public function __invoke(UpdateRequest $request, Issue $dev_issue, UpdateAction $action)
    {

        if ($dev_issue->canEdit()) {
            $action->handle($dev_issue, [
                'status' => $request->status,
                'milestone' => $request->milestone,
            ]);
        }

        return redirect()->route('dev:issues');
    }
}
