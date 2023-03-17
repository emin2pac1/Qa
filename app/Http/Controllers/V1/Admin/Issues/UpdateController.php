<?php

namespace App\Http\Controllers\V1\Admin\Issues;

use App\Actions\Karajkom\Admin\Issue\CreateAction;
use App\Actions\Karajkom\Admin\Issue\UpdateAction;
use App\Enums\IssueStatus;
use App\Http\Requests\Admin\Issue\StoreRequest;
use App\Http\Requests\Admin\Issue\UpdateRequest;
use App\Models\Issue;
use App\Notifications\IssueCreatedNotification;
use Illuminate\Support\Facades\Notification;

class UpdateController
{
    public function __invoke(UpdateRequest $request, Issue $issue, UpdateAction $action)
    {
        $issue = $action->handle(
            issue: $issue,
            data: [
                'title' => $request->title,
                'description' => $request->description,
                'priority' => $request->priority,
                'status' => $request->status,// it's finished lol what did I miss ?
                'department_id' => $request->department,
                'attachments' => $request->attachments,
                'deleted_attachments' => $request->deleted_attachments,
            ]);


        return redirect()->route('admin:issues');
    }
}
