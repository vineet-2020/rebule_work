<template>
    <div class="">
        <div class="row bg-black">
            <div class="col bg-primary flex flex-column q-pa-sm">
                <div class="column justify-between" style="width: 100%;">
                    <div class="row align-center items-center text-white text-center q-mb-lg">
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
                    <div class="q-mt-xl items-center">
                        <div class="column " style="padding: 0% 20%;">
                            <div class="text-h4 text-weight-bold text-white q-mb-lg">
                                Sign up for free
                            </div>
                            <div class="column q-my-sm">
                                <div class="text-white q-mb-xs">Name*</div>
                                <q-input v-model="text" class="text-white q-px-sm" dense
                                    style="width: 100%;   border-radius: 8px; border: 0.25px solid rgba(175, 183, 194, 0.45); box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);"
                                    placeholder="Enter your name" />


                            </div>
                            <div class="column q-my-sm">
                                <div class="text-white q-mb-xs">Email*</div>
                                <q-input v-model="text" class="text-white q-px-sm" dense
                                    style="width: 100%;   border-radius: 8px; border: 0.25px solid rgba(175, 183, 194, 0.45); box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);"
                                    placeholder="Enter your name" />


                            </div>
                            <div class="column q-my-sm">
                                <div class="text-white q-mb-xs">Password*</div>
                                <q-input v-model="text" class="text-white q-px-sm" dense
                                    style="width: 100%;   border-radius: 8px; border: 0.25px solid rgba(175, 183, 194, 0.45); box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);"
                                    placeholder="Enter your name" />
                                <span class="q-mt-sm text-weight-thin" style="color: #667085;">
                                    Must be atleast 8 characters
                                </span>
                            </div>
                            <div>
                                <q-btn no-caps class="q-mt-sm text-white" label="Get Started"
                                    style="width: 100%; background-color: #176BF8;   border-radius: 8px;">

                                </q-btn>
                            </div>
                            <div class="text-white flex justify-center q-mt-md ">
                                Already have an account? <span class="text-[##176BF8] q-ml-sm" style="color: #176BF8;">Log
                                    In </span>
                            </div>
                        </div>
                    </div>
                    <div class="text-white">
                        <div class="" style="margin-top: -2%;">
                            <span class=" q-mr-sm" style="color: #D7DFEF;">2023 </span> © <span class=" q-ml-sm"
                                style="color: #176BF8;">Redblue </span>

                        </div>

                    </div>
                </div>
            </div>

            <div class="col-7 bg-black flex flex-column  q-pa-md ">
                <div class="column justify-between" style="width: 100%;">
                    <div class="row align-center items-center text-white text-center">

                    </div>
                    <!-- Center Column -->
                    <div class="q-mt-lg ">
                        <div class="column ">
                            <div class="row">
                                <div class="col ">
                                    <div class="q-pa-lg q-mr-xs text-white flex items-center"
                                        style="width: 227.088px; height: 184.334px; flex-shrink: 0; border-radius: 6px; background: #191D24; ">
                                        <q-img class=" q-mr-sm" src="elements.svg" width="20px" height="20px" />

                                        <span class="text-bold">
                                            Your disclosure completeness score is 72%
                                        </span>
                                        <span class="text-weight-light">
                                            You are placed 2nd out of five peer companies.

                                        </span>
                                    </div>
                                    <div class="q-pl-md q-pa-md q-mt-md text-white flex items-center"
                                        style="width: 204.42px; height: 294.54px; flex-shrink: 0; border-radius: 6px; background: #191D24; ">

                                        <span class="text-bold q-mb-lg">
                                            Materiality
                                        </span>
                                        <span class="q-mb-lg text-weight-light">
                                            Compare your org’s materiality issues with global, sectoral materiality issues

                                        </span>
                                        <div class="" style="overflow: hidden;">
                                            <q-img class=" q-mr-sm"
                                                style="background: url('../../public/data.png'); width: 360px; height: 120px; flex-shrink: 0; overflow: hidden;" />

                                        </div>

                                    </div>
                                </div>
                                <div class="col-8 " style="margin-top: -5%;">
                                    <span class="text-weight-bolder text-h3 text-white ">
                                        AI boost to your
                                        ESG efforts
                                    </span>
                                    <div class="flex q-mt-md">
                                        <div class="q-pl-md q-pa-md q-mt-sm q-mr-md text-white flex items-center"
                                            style="width: 204.42px; height: 284.54px; flex-shrink: 0; border-radius: 6px; border: 0.25px solid rgba(175, 183, 194, 0.45); background: #191D24; ">

                                            <span class="text-medium q-mb-lg">
                                                Sustainability Report Assessment
                                            </span>
                                            <span class="q-mb-lg text-weight-light">
                                                12 improvement areas identified

                                            </span>
                                            <div class="" style="margin-top: -30%; margin-left: -6%;">
                                                <q-img class="" src="chart.svg" style=" width: 204px; height: 204px; " />

                                            </div>

                                        </div>
                                        <div class=" text-white flex "
                                            style="width: 204.42px; height: 284.54px; flex-shrink: 0; border-radius: 6px; background: #191D24; ">

                                            <q-img class="" src="chats.png" style=" width: 204px; height: 27    0px; " />
                                           

                                        </div>
                                    </div>
                                    <div>
                                        <div class="column justify-center q-pa-md text-white q-mt-md "
                                            style="width: 204.42px; height: 59px;  border-radius: 6px; background: #191D24; ">
                                            <q-img class="q-mr-sm item-center" src="sync.svg" width="24px" height="24px" /> 

                                            <span class="text-medium q-mb-lg flex item-center">
                                                Peer, Sectoral and Global Benchmarking
                                            </span>
                                            
                                           

                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                    <div class="text-white">
                        <div class="" style="margin-top: -2%; text-align: right;">
                            <q-img class=" q-mr-sm" src="mail-01.svg" width="16px" height="16px" /> <span
                                class="q-mt-sm text-weight-thin" style="color: #667085;">
                                help@reblue.ai
                            </span>

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
        return {};
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
.q-field--dense input::placeholder {
    color: white;
}
</style>