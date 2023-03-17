<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Snowflake\SnowflakeCast;
use Snowflake\Snowflakes;

class ParentDepartment extends Model
{
    use HasFactory;
    use Snowflakes;

    protected $fillable = ['name'];
    protected $casts = [
        'id' => SnowflakeCast::class,
    ];

    public function departments(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Department::class, 'parent_department_id');
    }
}
