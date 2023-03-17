<template>
    <profile-form-layout>
        <template v-slot:title>
            Update Profile Information
        </template>
        <template v-slot:description>
            Update your profile information.
        </template>
        <template v-slot:content>

            <template v-if="$page.props.karajkom.managesProfilePhotos">
                <v-row justify="center" no-gutters>
                    <v-avatar
                        v-if="photoPreview"
                        size="200"
                    >
                        <v-img :src="photoPreview">

                        </v-img>

                    </v-avatar>
                </v-row>
                <v-row justify="center" class="mt-1" no-gutters>

                    <v-btn icon color="primary" @click="openProfilePicATTACHMENTDialog">

                        <v-icon>attach_file</v-icon>
                    </v-btn>
                    <v-btn icon color="error" v-if="user.profile_photo_url" @click.native.prevent="deletePhoto">
                        <v-icon>delete</v-icon>
                    </v-btn>
                </v-row>
                <v-file-input type="file" class="d-none" accept="image/*"
                              ref="photo"
                              v-model="form.photo"
                              @change="updatePhotoPreview"/>
            </template>



            <label for="name">Name</label>
            <v-text-field
                id="name"
                dense
                outlined
                v-model="form.name"
                :error-messages="form.errors['name']"
            />

            <label for="email">Email</label>
            <v-text-field
                id="email"
                dense
                outlined
                v-model="form.email"
                :error-messages="form.errors['email']"/>

            <action-message :on="form.recentlySuccessful">
                Done.
            </action-message>
        </template>

        <template v-slot:actions>
            <v-spacer/>
            <v-btn color="accent" @click="updateProfileInformation" class="text-capitalize" :loading="form.processing" :disabled="!form.isDirty || form.processing">save</v-btn>
        </template>
    </profile-form-layout>
</template>

<script>
import ProfileFormLayout from "./ProfileFormLayout";
import ActionMessage from "./ActionMessage";

export default {
    name: "UpdateProfileInformationForm",
    components: {ActionMessage, ProfileFormLayout},
    props: ['user'],
    data() {
        return {
            form: this.$inertia.form({
                _method: 'PUT',
                name: this.user.name,
                email: this.user.email,
                photo: null,
            }),
            photoPreview: null,
        }
    },
    mounted() {
        this.updatePhotoPreview();
    },

    methods: {
        updateProfileInformation() {
            this.form.post(route('user-profile-information.update'), {
                errorBag: 'updateProfileInformation',
                preserveScroll: true
            });
        },
        updatePhotoPreview() {

            if (this.form.photo) {
                const reader = new FileReader();

                reader.onload = (e) => {
                    this.photoPreview = e.target.result;
                };
                reader.readAsDataURL(this.form.photo);

            } else {
                this.photoPreview = this.user.profile_photo_url
            }

        },

        deletePhoto() {
            this.$inertia.delete(route('user:current-user-photo.destroy'), {
                preserveScroll: true,
                onSuccess: () => (this.photoPreview = null),
            });
        },
        openProfilePicATTACHMENTDialog() {
            this.$refs.photo.$refs.input.click();
        },
    },
}
</script>

<style scoped>

</style>
