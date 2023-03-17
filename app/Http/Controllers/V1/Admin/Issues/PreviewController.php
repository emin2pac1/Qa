<?php

namespace App\Http\Controllers\V1\Admin\Issues;

use App\Http\Controllers\Controller;
use App\Models\Issue;

class PreviewController extends Controller
{
    public function __invoke(Issue $issue, $attachment)
    {
        return $issue->getAttachmentPreview($attachment);
    }
}
