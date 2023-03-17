<?php

namespace App\Http\Controllers\V1\Admin\Issues;

use App\Http\Controllers\Controller;
use App\Models\Issue;

class DeleteController extends Controller
{
    public function __invoke(Issue $issue)
    {
        $issue->purgeAttachments();
        $issue->delete();

        return redirect()->back();
    }
}
