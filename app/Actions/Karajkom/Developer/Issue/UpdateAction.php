<?php

namespace App\Actions\Karajkom\Developer\Issue;

use App\Enums\IssueStatus;
use App\Jobs\DeleteAttachementsAfterCompleteJob;
use App\Jobs\SendIssueCompletedNotificationForAdminJob;
use App\Models\Issue;

class UpdateAction
{
    public function handle(Issue $issue, array $data): void
    {
        $is_completed_now = false;
        if ($issue->status != IssueStatus::Completed && $data['status'] == IssueStatus::Completed) {
            $is_completed_now = true;
        }

        $issue->update([...$data,
            'completed_at' => $is_completed_now ? now() : null,
        ]);

        if ($is_completed_now) {
            dispatch(new SendIssueCompletedNotificationForAdminJob($issue));
            if ($issue->delete_files_after_complete) {
                dispatch(new DeleteAttachementsAfterCompleteJob($issue));
            }
        }

    }
}
