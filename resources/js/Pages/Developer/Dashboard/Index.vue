<template>
    <AppLayout>

        <span class="font-weight-bold text-h3 basil--text">Hi, {{$page.props.user.name}}</span>
        <v-layout wrap justify-center fill-height class="mt-3">
            <k-dashboard-card title="Completed Issues" icon="mdi-chart-pie" color="primary" :counter="completed_issues"
                              @click.native="$inertia.visit(route('dev:issues',{
                                status: 'COMPLETED'
                              }))"/>
            <k-dashboard-card title="Pending Issues" icon="mdi-chart-pie" color="primary" :counter="pending_issues"
                              @click.native="$inertia.visit(route('dev:issues',{
                                status: 'PENDING'
                              }))"/>
        </v-layout>
    </AppLayout>
</template>

<script>
import AppLayout from "../../../Layouts/AppLayout";
import KDashboardCard from "../../../Karajkom/KDashboardCard";

export default {
    name: "Index",
    metaInfo() {
        return {title: 'Dashboard'};
    },
    components: {KDashboardCard, AppLayout},
    props: {
        completed_issues: Number,
        pending_issues: Number,
    }
}
</script>

<style scoped>

</style>
