<?php

namespace App\Http\Resources\Department;

use Illuminate\Http\Resources\Json\JsonResource;

class DepartmentIndexResource extends JsonResource
{
    public function toArray($request)
    {
        return [

            'id' => $this->id,
            'name' => $this->name,
        ];
    }
}
