<template>
    <div>
        <form class="form" @submit.prevent="onSubmit">
            <div class="input">
                <label for="email">Email</label>
                <input
                    :class="{ error: $v.email.$error }"
                    type="email"
                    id="email"
                    v-model.trim="email"
                    @input="$v.email.$touch()"
                />
                <div v-if="$v.email.$dirty">
                    <p class="error-message" v-if="!$v.email.email">
                        Please enter a valid email address
                    </p>
                    <p class="error-message" v-if="!$v.email.required">
                        Email must not be empty.
                    </p>
                </div>
            </div>
            <div class="input">
                <label for="firstName">First Name</label>
                <input
                    :class="{ error: $v.firstName.$error }"
                    type="text"
                    id="firstName"
                    v-model.trim="firstName"
                    @input="$v.firstName.$touch()"
                />
                <div v-if="$v.firstName.$dirty">
                    <p class="error-message" v-if="!$v.firstName.required">
                        First Name must not be empty.
                    </p>
                </div>
            </div>
            <div class="input">
                <label for="lastName">Last Name</label>
                <input
                    :class="{ error: $v.lastName.$error }"
                    type="text"
                    id="lastName"
                    v-model.trim="lastName"
                    @input="$v.lastName.$touch()"
                />
                <div v-if="$v.lastName.$dirty">
                    <p class="error-message" v-if="!$v.lastName.required">
                        Last Name must not be empty.
                    </p>
                </div>
            </div>
            <div class="input">
                <label for="password">Password</label>
                <input
                    :class="{ error: $v.password.$error }"
                    type="password"
                    id="password"
                    v-model.trim="password"
                    @input="$v.password.$touch()"
                />
                <div v-if="$v.password.$dirty">
                    <p class="error-message" v-if="!$v.password.required">
                        Password must not be empty.
                    </p>
                </div>
            </div>
            <div class="input">
                <label for="repeatedPassword">Repeated Password</label>
                <input
                    :class="{ error: $v.repeatedPassword.$error }"
                    type="password"
                    id="repeatedPassword"
                    v-model.trim="repeatedPassword"
                    @input="$v.repeatedPassword.$touch()"
                />
                <div v-if="$v.repeatedPassword.$dirty">
                    <p class="error-message" v-if="!$v.repeatedPassword.required">
                        Repeated Password must not be empty.
                    </p>
                    <p class="error-message" v-if="!$v.repeatedPassword.sameAsPassword">
                        Password must be identical.
                    </p>
                </div>
            </div>
            <button type="submit" :disabled="$v.$invalid">Submit</button>
            <div class="validators">
                <pre>{{ $v }}</pre>
            </div>
        </form>
    </div>
</template>

<script>
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators';

export default {
    data() {
        return {
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            repeatedPassword: ''
        };
    },
    methods: {
        onSubmit() {
            if (!this.$v.$invalid) {
                const user = {
                    email: this.email,
                    firstName: this.firstName,
                    lastName: this.lastName,
                    password: this.password,
                    repeatedPassword: this.repeatedPassword
                };
                // eslint-disable-next-line no-console
                console.log(user);
            }
        }
    },
    validations: {
        email: { required, email },
        firstName: { required },
        lastName: { required },
        password: { required, minLength: minLength(6) },
        repeatedPassword: {
            required,
            minLength: minLength(6),
            sameAsPassword: sameAs('password')
        }
    }
};
</script>

<style>
.form {
    display: inline-block;
    text-align: center;
    width: 49%;
}
.validators {
    display: inline-block;
    width: 49%;
    text-align: center;
    vertical-align: top;
}
.input {
    padding: 5px;
}

input:focus {
    outline: none;
}

.error {
    border: 1px solid red;
}

.error-message {
    color: red;
}
</style>
