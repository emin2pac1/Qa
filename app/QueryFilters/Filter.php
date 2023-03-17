<?php

namespace App\QueryFilters;

use Closure;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Str;

abstract class Filter
{
    public function handle(Builder $builder, Closure $next)
    {
        if (!request()->has($this->filterName())) {
            return $next($builder);
        }
        return $this->applyFilter($next($builder));
    }

    abstract protected function applyFilter($builder);

    protected function filterName(): string
    {
        return Str::snake(class_basename($this));
    }
}
