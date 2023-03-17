<?php

namespace App\Actions\Karajkom\Admin\Issue;

use App\Models\Issue;

class CreateAction
{
    public function handle(array $data): Issue
    {
        $issue = Issue::query()->create($data);

        $issue->updateAttachments(...$data['attachments']);

        return $issue;
    }
}
