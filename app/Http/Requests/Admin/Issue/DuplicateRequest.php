<?php

namespace App\Http\Requests\Admin\Issue;

use App\Enums\IssuePriority;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class DuplicateRequest extends FormRequest
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
            'department' => 'array|required|min:1',
            'department.*' => 'required|integer|exists:departments,id',
        ];
    }
}
