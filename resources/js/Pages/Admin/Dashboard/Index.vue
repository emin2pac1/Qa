<template>
    <AppLayout>


        <v-layout wrap>
            <v-flex xs12 md8 grow order-1 order-md-0>
                <span class="font-weight-bold text-h5">Hi, {{ $page.props.user.name }}</span>
            </v-flex>
            <v-flex xs12 md4 shrink class="d-flex justify-end" order-0 order-md-1>
                <v-btn color="primary" @click="$inertia.visit(route('admin:issues.create'))">
                    <v-icon>add</v-icon>
                    Create Issue
                </v-btn>
            </v-flex>
        </v-layout>


        <v-layout wrap justify-center fill-height class="mt-3">
            <k-dashboard-card title="Completed Issues" icon="mdi-chart-pie" color="primary" :counter="completed_issues"
                              @click.native="$inertia.visit(route('admin:issues',{
                                status: 'COMPLETED'
                              }))"/>
            <k-dashboard-card title="Pending Issues" icon="mdi-chart-pie" color="primary" :counter="pending_issues"
                              @click.native="$inertia.visit(route('admin:issues',{
                                status: 'PENDING'
                              }))"/>
        </v-layout>
        <v-layout wrap>
            <v-flex xs12 class="mt-3">
                <v-card outlined>
                    <v-card-title>Summary</v-card-title>
                    <v-card-text>
                        <Doughnut
                            :chart-options="chartOptions2"
                            :chartData="chartData"
                        />
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>

    </AppLayout>
</template>

<script>
import AppLayout from "../../../Layouts/AppLayout";
import KDashboardCard from "../../../Karajkom/KDashboardCard";
import JSCharting from 'jscharting-vue';
import {Doughnut} from 'vue-chartjs/legacy';
import {
    Chart as ChartJs
    , Title,
    Tooltip,
    Legend,
    ArcElement,
    CategoryScale

} from 'chart.js'

ChartJs.register(Title, Tooltip, Legend, ArcElement, CategoryScale);
export default {
    name: "Index",
    metaInfo() {
        return {title: 'Dashboard'};
    },
    components: {KDashboardCard, AppLayout, Doughnut},
    props: {
        completed_issues: Number,
        pending_issues: Number,
        pie_chart_data: {type: Object | Array, default: () => [], required: false},
    },
    data() {
        return {
            chartData: {
                labels: this.getChartLabels(),
                datasets: [
                    {
                        backgroundColor: this.getRandomColorList(this.getChartData().length),
                        data: this.getChartValues()

                    }
                ]
            },
            chartOptions2: {
                responsive: true,
                maintainAspectRatio: false,
                onClick: this.onChartClick
            }
        }
    },
    methods: {
        getChartData() {
            let data = [];

            if (typeof this.pie_chart_data === 'object') {
                data = Object.keys(this.pie_chart_data).map(key => {
                    return {x: this.pie_chart_data[key]['status'], y: this.pie_chart_data[key]['count']}
                });
            } else {
                this.pie_chart_data.forEach(function (item) {
                    data.push({x: item.status, y: item.value});
                });
            }

            return data;

        },
        getChartLabels() {
            let labels = [];
            let data = this.getChartData();
            data.forEach(function (item) {
                labels.push(item.x);
            });
            return labels;
        },
        getRandomColorList(size) {
            let colors = [];
            for (let i = 0; i < size; i++) {
                colors.push('#' + Math.floor(Math.random() * 16777215).toString(16));
            }
            return colors;
        },
        getChartValues() {
            let values = [];
            let data = this.getChartData();
            data.forEach(function (item) {
                values.push(item.y);
            });
            return values;
        },
        onChartClick(point, event) {
            const item = event[0];
            this.$inertia.visit(route('admin:issues', {status: this.getChartLabels()[item.index]}));
        }
    }
}
</script>

<style scoped>


</style>
