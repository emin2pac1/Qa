<?php

namespace App\Traits;

use Illuminate\Support\Facades\Schema;

trait HasSortable
{
    public function scopeSortable($query, $sortBy = null, $sortDesc = false)
    {
        $formattedSortBy = $this->getSortableColumns($sortBy);
        return $query->when($formattedSortBy, function ($query) use ($formattedSortBy, $sortDesc) {
            return $sortDesc ? $query->orderByDesc($formattedSortBy) : $query->orderBy($formattedSortBy);
        });
    }


    protected function getSortableColumns($sortBy)
    {
        if ($sortBy == null) {
            return null;
        }

        if (Schema::hasColumn($this->getTable(), $sortBy)) {
            return $sortBy;
        }


        return $this->getMatchedColumn($sortBy);
    }


    /** return matched column name from sortable column name
     * @param $sortBy
     * @return string|null
     */
    protected function getMatchedColumn($sortBy): string|null
    {
        return match ($sortBy) {
            'department' => 'department_id',
            'time_left' => 'milestone',
            default => $sortBy,
        };
    }
}
