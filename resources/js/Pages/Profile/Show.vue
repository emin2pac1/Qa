<template>
    <AppLayout :isSideNav="false" >
        <update-profile-information-form :user="$page.props.user" v-if="$page.props.karajkom.canUpdateProfileInformation"/>
        <update-password-form  v-if="$page.props.karajkom.canUpdatePassword"  />

        <two-factor-authentication-form v-if="$page.props.karajkom.canManageTwoFactorAuthentication" />


        <logout-other-browser-sessions-form :sessions="sessions" />
    </AppLayout>
</template>{{sds}}

<script>
import AppLayout from "@/Layouts/AppLayout";
import UpdateProfileInformationForm from "./UpdateProfileInformationForm";
import UpdatePasswordForm from "./UpdatePasswordForm";
import TwoFactorAuthenticationForm from "./TwoFactorAuthenticationForm";
import LogoutOtherBrowserSessionsForm from "./LogoutOtherBrowserSessionsForm";

export default {
    name: "Show",
    metaInfo: {title: 'Profile'},

    components: {
        LogoutOtherBrowserSessionsForm,
        TwoFactorAuthenticationForm, UpdatePasswordForm, UpdateProfileInformationForm, AppLayout},
    props: ['sessions'],
    data() {
        return {}
    }
}
</script>
export default{
}
<style scoped>

</style>
