<?php

namespace App\QueryFilters;

class SortBy extends Filter
{
    protected function applyFilter($builder)
    {
        return $builder->sortable(request($this->filterName()), $this->isSortDesc());
    }

    protected function filterName(): string
    {
        return 'sortBy';
    }

    protected function isSortDesc(): bool
    {
        return request()->has('sortDesc') && boolval(request('sortDesc'));
    }
}
