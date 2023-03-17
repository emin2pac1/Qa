<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class () extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('issues', function (Blueprint $table) {
            $table->snowflake()->primary();
            $table->string('title')->nullable();
            $table->longText('description')->nullable();
            $table->string('status')->nullable();
            $table->string('priority')->nullable();
            $table->string('type')->nullable();
            $table->string('project')->nullable();
            $table->string('email')->nullable();
            $table->date('milestone')->nullable();
            $table->date('completed_at')->nullable();
            $table->text('attachments')->nullable();
            $table->boolean('delete_files_after_complete')->default(true);
            $table->foreignSnowflake('assignee_id')->nullable()->index();
            $table->foreignSnowflake('department_id')->index();
            $table->foreignSnowflake('user_id')->index();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('issues');
    }
};
