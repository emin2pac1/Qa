<?php

namespace App\Notifications;
// never got this
//must be brokeeen or sth that shit works local, SG issue? not sure, support? later t didn't had my dinner yet oh fk
// ok tom we move to prod. add to git app ok
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class AdminIssueCreatedDailySummeryNotification extends Notification
{
    use Queueable;

    private $issues;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($issues)
    {
        //
        $this->issues = $issues;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param mixed $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param mixed $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->subject('Issue Created Daily Report')
            ->markdown('mail.issue.daily', ['issues' => $this->issues]);
    }

    /**
     * Get the array representation of the notification.
     *
     * @param mixed $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
