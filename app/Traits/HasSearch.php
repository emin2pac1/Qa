<?php

namespace App\Traits;

use Illuminate\Support\Facades\Schema;

trait HasSearch
{
    public function scopeSearch($query, $term = null)
    {
        return $query->when($term, function ($query, $term) {
            $query->where($this->search_field, 'LIKE', '%' . trim($term) . '%');
        });
    }
}
