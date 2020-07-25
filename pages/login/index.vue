<template>
    <div>
        <v-content>
            <v-container>
                <v-row align="center" justify="center" responsive>
                    <v-col align="center" justify="center" responsive>
                        <h2 class="font-weight-thin">Restricted Access</h2>
                    </v-col>
                </v-row>
                <hr size="1" width="100%" align="left" color="#E5E5E5">
                <v-row align="center" justify="center" responsive>
                    <v-col align="center" justify="center" responsive>
                        <v-progress-circular v-if="flag_progress" :rotate="360" :size="100" :width="15" :value="value" dark>
                            {{ value }}
                        </v-progress-circular>
                    </v-col>
                </v-row>
                <v-card class="mx-auto" max-width="500" flat>
                    <v-form  @keyup.native.enter="submit" >
                        <v-text-field v-model="email" :error-messages="emailErrors" :counter="10" label="Email" required @input="$v.email.$touch()" @blur="$v.email.$touch()" />
                        <v-text-field v-model="password" :error-messages="passwordErrors" :counter="10" label="Contraseña" type="password" required @input="$v.password.$touch()" @blur="$v.password.$touch()" />
                        <div class="text-center pt-8">
                            <v-btn color="primary" class="mr-4" @click="submit">Log in</v-btn>
                            <v-btn color="primary" @click="clear">Delete</v-btn>
                        </div>
                    </v-form>
                </v-card>
            </v-container>
        </v-content>
    </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email, minLength } from 'vuelidate/lib/validators'
export default {
    mixins: [validationMixin],
    validations: {
        email: { required, email },
        password: { required, minLength: minLength(6) },
    },
    data: () => ({
        email: '',
        password: '',
        verified: false,
        flag_progress: false,
        value: 0,
        interval: {},
    }),
    computed: {
        emailErrors() {
            const errors = []
            if (!this.$v.email.$dirty)
                return errors
                !this.$v.email.email && errors.push('Not a valid email') 
                !this.$v.email.required && errors.push('Email required')
            return errors
        },
        passwordErrors() {
            const errors = []
            if (!this.$v.password.$dirty)
                return errors
                !this.$v.password.minLength && errors.push('Password must has 6 chars') 
                !this.$v.password.required && errors.push('Password required')
            return errors
        },
    },
    beforeDestroy() {
        clearInterval(this.interval)
    },
    methods: {
        async submit() {
            this.flag_progress = true;
            this.interval = setInterval(() => {
                if (this.value === 100) {
                    return (this.value = 0)
                }
                this.value += 25
            }, 1000)
            this.$v.$touch()
            // eslint-disable-next-line no-unused-vars
            const payload = { email: this.email, password: this.password }
            try {
                //this.flag_progress = false;
                await this.$fireAuth.signInWithEmailAndPassword(payload.email, payload.password)
                this.flag_progress = false;
                this.$router.push('admin')
            } catch (err) {
                this.flag_progress = false;
                alert(err); 
            }
           
        },
        clear() {
            this.$v.$reset()
            this.email = ''
            this.password = ''
        },
             async sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
    },
}
</script>

<style scoped>
</style>