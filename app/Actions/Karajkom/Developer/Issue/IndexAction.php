<?php

namespace App\Actions\Karajkom\Developer\Issue;

use App\Enums\IssueStatus;
use App\Models\Issue;

class IndexAction
{
    public function handle()
    {
        return Issue::query()
            ->filtered()
            ->when(request()->query('status'), function ($query) {
                $query->where('status', request()->query('status'));
            }, function ($query) {
                $query->when(!(bool)request()->query('show_completed'), function ($query) {
                    $query->where('status','!=' ,IssueStatus::Completed);
                });
            })
            ->when(request()->query('department'), function ($query, $department) {
                if (ucwords($department) != ucwords('all')) {
                    $query->where('department_id', $department);
                } else {
                    $query->inParentDepartment();
                }
            }, function ($query) {
                $query->inCurrentDepartment();
            })
            ->when(request()->query('priority'), function ($query) {
                $query->where('priority', request()->query('priority'));
            })
            ->paginate(request()->input('itemsPerPage', 10));
    }
}
