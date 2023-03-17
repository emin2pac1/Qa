<?php

namespace App\Actions\Karajkom\Admin\Issue;

use App\Jobs\SendIssueCreatedNotificationToDevJob;
use App\Models\Issue;

class DuplicateAction
{
    public function handle(Issue $issue, $departmentIDS): void
    {
        $newIssues = [];
        foreach ($departmentIDS as $departmentID) {
            if ($issue->department_id == $departmentID) {
                continue;
            }
            $newIssue = $issue->replicate();

            $newIssue->forceFill([
                'department_id' => $departmentID,
                'attachments' => [],
            ])->save();

            $newIssues[] = $newIssue;

            try {
                dispatch(new SendIssueCreatedNotificationToDevJob($newIssue));
            }catch (\Exception $e) {

            }


        }

        $issue->duplicateAttachments($newIssues);

    }
}
