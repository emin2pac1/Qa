<?php

namespace App\Actions\Karajkom\Admin\Issue;

use App\Models\Issue;

class UpdateAction
{
    public function handle(Issue $issue, array $data): Issue
    {
        $issue->update($data);

        $issue->deleteAttachments($data['deleted_attachments']);
        $issue->updateAttachments(...$data['attachments']);

        return $issue;
    }
}
