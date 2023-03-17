<?php

namespace App\Http\Requests\Admin\Issue;

use App\Enums\IssuePriority;
use App\Enums\IssueStatus;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [

            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'delete_files_after_complete' => 'required|boolean',
            'department' => 'required|exists:departments,id',
            'priority' => ['required', Rule::in(IssuePriority::getValues())],// now goto editController
            'status' => ['required', Rule::in(IssueStatus::getValues())],
            'attachments' => 'nullable|array',
            'deleted_attachments' => 'nullable|array',
            'attachments.*' => 'nullable|file|mimes:jpeg,png,jpg,gif,svg,pdf,doc,docx,xls,xlsx,ppt,pptx,zip,rar,mp4,webm|max:'
                . config('karajkom.max_file_size', '100000'),


        ];
    }
}
