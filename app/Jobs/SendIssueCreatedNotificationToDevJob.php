<?php

namespace App\Jobs;

use App\Models\Issue;
use App\Models\User;
use App\Notifications\IssueCreatedNotification;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class SendIssueCreatedNotificationToDevJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    private Issue $issue;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(Issue $issue)
    {
        $this->issue = $issue;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $users = User::query()->where('department_id', $this->issue->department_id)->get();

        foreach ($users as $user) {
            $user->notify(new IssueCreatedNotification($this->issue));
        }
    }
}
