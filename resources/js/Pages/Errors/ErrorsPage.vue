<template>
    <EmptyLayout>
        <v-layout class="fill-height" style="background-color: #cbd5e0" justify-center wrap>
            <v-flex shrink align-self-center>

                <H1 class="display-4">{{ errorStatus.code }}</H1>
                <H1>{{ errorStatus.message }}</H1>
                <div>{{ description }}</div>
                <v-img contain :aspect-ratio="16/9" width="300"
                       src="/storage/images/commons/site-logo_black.png"/>
            </v-flex>
            <v-flex xs12 class="d-flex justify-end">

                <small>Go To</small>
                <k-nav-link class="mx-1" v-if="authenticated" :url="route('dashboard')">
                    <h4>Dashboard</h4>
                </k-nav-link>
                <span v-if="authenticated">/</span>
                <k-nav-link class="mx-1" :url="route('welcome')">
                    <h4>Home</h4>
                </k-nav-link>
            </v-flex>
        </v-layout>

    </EmptyLayout>


</template>

<script>

import KNavLink from "../../Karajkom/KNavLink";
import EmptyLayout from "../../Layouts/EmptyLayout";

export default {
    components: {EmptyLayout, KNavLink, AppLayout},
    props: {
        status: Number,
        authenticated: Boolean,
    },
    computed: {
        errorStatus() {
            return {
                503: {
                    code: '503',
                    message: 'Service Unavailable',
                },
                500: {
                    code: '500',
                    message: 'Server Error'
                },
                404: {
                    code: '404',
                    message: 'Page Not Found'
                },
                403: {
                    code: '403',
                    message: 'Forbidden',
                }
            }[this.status]
        },
        description() {
            return {
                503: 'Sorry, we are doing some maintenance. Please check back soon.',
                500: 'Whoops, something went wrong on our servers.',
                404: 'Sorry, the page you are looking for could not be found.',
                403: 'Sorry, you are forbidden from accessing this page.',
            }[this.status]
        },
    },
}
</script>
