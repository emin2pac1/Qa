<?php

namespace App\Actions\Karajkom\Admin\Issue;

use App\Enums\IssueStatus;
use App\Models\Issue;

class IndexAction
{
    public function handle(): \Illuminate\Contracts\Pagination\LengthAwarePaginator
    {
        return Issue::query()
            ->filtered()
            ->when(request()->query('only_overdue'), function ($query) {
                $query->whereDate('milestone', '<', now()->format('Y-m-d'))
                    ->where('status', '!=', IssueStatus::Completed);
            })
            ->when(request()->query('status'), function ($query) {
                $query->where('status', request()->query('status'));
            }, function ($query) {
                $query->when(!(bool)request()->query('show_completed'), function ($query) {
                    $query->where('status', '!=', IssueStatus::Completed);
                });
            })->when(request()->query('priority'), function ($query) {
                $query->where('priority', request()->query('priority'));
            })
            ->when(request()->query('department'), function ($query, $department) {
                $query->where('department_id', $department);

            })
            ->when(request()->query('reportedBy'), function ($query, $reportedBy) {
                if ($reportedBy === 'ME') {
                    $query->where('user_id', auth()->id());
                } elseif ($reportedBy === 'OTHERS') {
                    $query->where('user_id', '!=', auth()->id());
                }
            })
            ->paginate(request()->input('itemsPerPage', 10));
    }
}
