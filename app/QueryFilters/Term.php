<?php

namespace App\QueryFilters;

class Term extends Filter
{
    protected function applyFilter($builder)
    {
        return $builder->search(request($this->filterName()));
    }
}
