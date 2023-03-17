<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Snowflake\SnowflakeCast;
use Snowflake\Snowflakes;

class Department extends Model
{
    use HasFactory;
    use Snowflakes;

    protected $fillable = ['name', 'parent_department_id'];
    protected $casts = [
        'id' => SnowflakeCast::class,
        'parent_department_id' => SnowflakeCast::class,
    ];

    public function parentDepartment(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(ParentDepartment::class, 'parent_department_id');
    }
}
