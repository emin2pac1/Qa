<?php

namespace App\Models;

use App\Enums\IssueStatus;
use App\Traits\HasIssueAttachments;
use App\Traits\HasSearch;
use App\Traits\HasSortable;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Snowflake\SnowflakeCast;
use Snowflake\Snowflakes;

class Issue extends Model
{
    use HasFactory;
    use Snowflakes;
    use HasIssueAttachments;
    use HasSortable;
    use HasSearch;

    protected string $search_field = 'title';

    protected $fillable = [
        'title',
        'description',
        'status',
        'priority',
        'type',
        'project',
        'email',
        'assignee_id',
        'department_id',
        'user_id',
        'milestone',
        'completed_at',
        'delete_files_after_complete',
    ];

    /**
     *
     * @var array<string,mixed>
     */
    protected $casts = [
        'id' => SnowflakeCast::class,
        'user_id' => SnowflakeCast::class,
        'assignee_id' => SnowflakeCast::class,
        'department_id' => SnowflakeCast::class,
        'delete_files_after_complete' => 'boolean',
    ];


    public static function scopeFiltered($query)
    {
        return app(\Illuminate\Pipeline\Pipeline::class)
            ->send($query)
            ->through(array_filter([
                \App\QueryFilters\Term::class,
                \App\QueryFilters\SortBy::class,

            ]))
            ->thenReturn();
    }


    public function user(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function department(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Department::class, 'department_id');
    }

    protected static function boot()
    {
        parent::boot();
        static::creating(function ($model) {
            $model->user_id = auth()->user()->id;
        });
    }

    /*
     * Get issues according to users department
     */
    public function scopeInCurrentDepartment(Builder $query): Builder
    {
        return $query->where('department_id', auth()->user()->department_id);
    }

    public function scopeInParentDepartment(Builder $query): Builder
    {
        return $query->whereIn('department_id', auth()->user()->department->parentDepartment->departments()->pluck('id')->toArray());
    }

    public function canEdit(): bool
    {
        return $this->department_id === auth()->user()->department_id && $this->status !== IssueStatus::Completed;
    }
    public function inDepartment(): bool
    {
        return $this->department_id === auth()->user()->department_id ;
    }

    public function scopeInStatus(Builder $query, $status): Builder
    {
        return $query->where('status', $status);
    }
}
