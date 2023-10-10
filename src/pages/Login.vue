<template>
    <div class="">
        <div class=" " style="background: #181A20; height: 100vh;">
            <div class=" q-pa-sm">
                <div class="justify-between items-center ">
                    <div class="row align-center justify-center items-center text-white text-center q-mb-lg">
                        <div class="">
                            <q-img src="icon.svg" width="62.19px" height="22px"></q-img>
                        </div>
                        <div class=" q-mt-sm q-mx-sm" style="width: 1px; height: 16px; background: #667085;">

                        </div>
                        <div class=" q-mt-md flex items-center text-center text-bold">
                            <span class="text-weight-light">
                                AI
                            </span> <span class="text-green font-bold q-px-sm"> ESG</span><span class="">
                                Navigator
                            </span>
                        </div>
                    </div>
                    <!-- Center Column -->
                    <div class="q-mt-xl flex items-center justify-center " style="">
                        <div class="column justify-center " style="width: 400px;">
                            <div class=" flex  justify-center text-white q-mb-lg">
                                <div>
                                    <q-img src="login.svg" width="56px" height="56px" class="q-mb-md"></q-img>
                                </div>
                                <span class="text-h4 text-weight-bold">
                                    Log in to your account
                                </span> <br>
                                <span class="text-weight-thin text-body2 q-mt-sm   text-h6 ">
                                    Welcome back! Please enter your details.
                                </span>
                            </div>
                            <div class="column q-my-md">
                                <div class="text-white q-mb-xs">Email*</div>
                                <q-input v-model="email" class="text-white q-px-sm" dense
                                    style="width: 100%;  background-color: #151515; border-radius: 8px; border: 0.25px solid rgba(175, 183, 194, 0.45); box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);"
                                    placeholder="Enter your name" />


                            </div>
                            <div class="column q-mt-md">
                                <div class="text-white q-mb-xs">Password*</div>
                                <q-input v-model="password" type="password" :type="isPwd ? 'password' : 'text'"
                                    class="text-white q-px-sm" dense
                                    style="width: 100%; background-color: #151515;  border-radius: 8px; border: 0.25px solid rgba(175, 183, 194, 0.45); box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);"
                                    placeholder="Enter your name">
                                    <template v-slot:append>
                                        <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer"
                                            @click="isPwd = !isPwd" />
                                    </template>
                                </q-input>


                            </div>
                            <div class="q-my-md flex justify-between">
                                <div class="" style="color: #667085;">
                                    <q-checkbox dense v-model="remember_me" class="q-mr-sm " color="" /> Remember me for 30
                                    days
                                </div>
                                <div class="text-weight-medium text-right" style="color: #176BF8;">
                                    Forgot Password ?
                                </div>
                            </div>
                            <div>
                                <q-btn no-caps class=" text-white" label="Sign in"
                                    style="width: 100%; background-color: #176BF8;   border-radius: 8px;">

                                </q-btn>
                            </div>
                            <div class="text-white flex justify-center q-mt-md ">
                                Don’t have an account? <span
                                    class="text-[##176BF8] q-ml-sm cursor-pointer text-weight-medium" @click="'/signup'"
                                    style="color: #176BF8;">Sign
                                    up </span>
                            </div>
                        </div>
                    </div>
                    <div class="text-white q-mt-lg">

                        <div class="text-white">
                            <div class="" style=" text-align: right;">
                                <q-img class=" q-mr-sm" src="mail-01.svg" width="16px" height="16px" /> <span
                                    class="q-mt-sm text-weight-reular" style="color: #667085;">
                                    help@reblue.ai
                                </span>

                            </div>

                        </div>

                    </div>
                </div>
            </div>


        </div>
    </div>
</template>
  
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
    name: "LoginPage",
    setup() {
        return {
            remember_me: ref(false),
            password: ref(''),
            isPwd: ref(true),
        };
    },
    methods: {
        // preventSomeKeys(e) {
        //     let keyCode = e.keyCode;
        //     if ([188, 190].includes(keyCode)) {
        //         e.preventDefault();
        //     }
        // },
    },
});
</script>

<style scoped>
/* Set the placeholder color to white */

.q-field--outlined .q-field__control:after {
    border: 0.2px solid #9ca0bb !important;
}

.q-field--dark .q-field__native,
.q-field--dark .q-field__prefix,
.q-field--dark .q-field__suffix,
.q-field--dark .q-field__input {
    color: white !important;
}

/* .q-table__top {
 border-bottom: 0.5px solid #9ca0bb !important;
}

.q-checkbox__svg {
 color: #9ca0bb !important;
}

.q-table__card--dark, .q-table--dark {
 border-color: #9ca0bb !important;
} */
</style>