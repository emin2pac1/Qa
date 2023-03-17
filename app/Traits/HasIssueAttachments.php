<?php

namespace App\Traits;

use App\Models\Issue;
use Illuminate\Support\Carbon;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

trait HasIssueAttachments
{
    /**
     * Get the issue's attachments.
     */
    public function updateAttachments(UploadedFile ...$attachments): void
    {
        tap($this->attachments, function ($previous) use ($attachments) {
            $newAttachments = [];
            if ($previous == null) {
                $previous = [];
            }

            foreach ($attachments as $attachment_item) {
                $file_name = str_replace(' ', '_', $attachment_item->getClientOriginalName());
                $newAttachments[] = $attachment_item->storeAs(
                    'issues/' . $this->id . '/' . '/attachments/',
                    Carbon::now()->getPreciseTimestamp(3) . $file_name,
                    ['disk' => $this->attachmentDisk()]
                );
            }

            $this->forceFill([
                'attachments' => array_merge($previous, $newAttachments),
            ])->save();
        });
    }

    public function duplicateAttachments(array $target = []): void
    {
        $attachments = $this->attachments;
        if ($attachments == null) {
            $attachments = [];
        }

        foreach ($target as $issue) {
            $newAttachments = [];
            foreach ($attachments as $attachment) {
                Storage::disk($this->attachmentDisk())->copy($attachment, 'issues/' . $issue->id . '/attachments/' . basename($attachment));
                $newAttachments[] = 'issues/' . $issue->id . '/attachments/' . basename($attachment);

            }
            $issue->forceFill([
                'attachments' => $newAttachments,
            ])->save();
        }
    }


//    delete attachments

    public function deleteAttachments(?array $attachments)
    {
        $previousAttachments = $this->attachments;

        if ($previousAttachments == null) {
            $previousAttachments = [];
        }

        foreach ($attachments as $attachment) {

//            check attachment is in the previous attachments
            if (in_array($attachment, $previousAttachments)) {
                Storage::disk($this->attachmentDisk())->delete($attachment);
                $previousAttachments = array_diff($previousAttachments, [$attachment]);
            }

        }
        $this->forceFill([
            'attachments' => $previousAttachments,
        ])->save();


    }


    public function purgeAttachments(): void
    {
        if ($this->attachments == null) return;

        foreach ($this->attachments as $attachment) {
            Storage::disk($this->attachmentDisk())->delete($attachment);
        }
        $this->forceFill([
            'attachments' => [],
        ])->save();

    }

    public function getAttachmentDownload(string $attachment = null)
    {
        if (Storage::disk($this->attachmentDisk())->exists($this->attachments[$attachment])) {
            return Storage::disk($this->attachmentDisk())->download($this->attachments[$attachment]);
        } else {
            return abort(404);
        }
    }

    public function getAttachmentPreview(string $attachment = null)
    {
        if (Storage::disk($this->attachmentDisk())->exists($this->attachments[$attachment])) {
            return response()->file(Storage::disk($this->attachmentDisk())->path($this->attachments[$attachment]));
        } else {
            return abort(404);
        }
    }

    protected function attachmentDisk(): string
    {
        return config('karajkom.issue_attachment_disk', 'public');
    }

    public function getAttachmentsAttribute($value)
    {
        return json_decode($value);
    }

    public function setAttachmentsAttribute($value): void
    {
        $this->attributes['attachments'] = json_encode($value);
    }

    public function getAttchmentsFormatted()
    {
        $data = [];
        $attachments = $this->attachments;
        if ($attachments == null) {
            return [];
        }
        foreach ($this->attachments as $key => $attachment) {

            $file_type = Storage::disk($this->attachmentDisk())->path($attachment);
//            get extension
            $extension = pathinfo($file_type, PATHINFO_EXTENSION);


            $data[] = (object)[
                'attachment' => $attachment,
                'link' => $file_type,
                'extension' => $extension,
                'index' => $key
            ];
        }

        return $data;
    }


}
