<?php

namespace App\Http\Resources\Issues;

use Illuminate\Http\Resources\Json\JsonResource;

class IssueResource extends JsonResource
{
    public function toArray($request)
    {
        return [

            'id' => $this->id,
            'title' => $this->title,
            'department' => $this->department,
            'department_id' => $this->department_id,
            'description' => $this->description,
            'priority' => $this->priority,
            'status' => $this->status,
            'milestone' => $this->milestone,
            'attachments' => $this->attachments,
            'delete_files_after_complete' => $this->delete_files_after_complete,
            'attachments_formatted' => $this->getAttchmentsFormatted(),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
