<?php

namespace App\Http\Controllers\V1\Admin\Issues;

use App\Actions\Karajkom\Admin\Issue\CreateAction;
use App\Enums\IssueStatus;
use App\Http\Requests\Admin\Issue\StoreRequest;
use App\Jobs\SendIssueCreatedNotificationToDevJob;
use App\Notifications\IssueCreatedNotification;
use Illuminate\Support\Facades\Notification;

class StoreController
{
    public function __invoke(StoreRequest $request, CreateAction $action)
    {
        $issue = $action->handle([
            'title' => $request->title,
            'description' => $request->description,
            'priority' => $request->priority,
            'status' => IssueStatus::Pending,
            'department_id' => $request->department,
            'attachments' => $request->attachments,
        ]);


        dispatch(new SendIssueCreatedNotificationToDevJob($issue));

        return redirect()->route('admin:issues.create');
    }
}
