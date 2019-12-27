<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Please select a server</p>
        <p v-else>Server #{{server.id}}: {{server.status}}  </p>
        <button @click="backNormal" >Change to normal</button>    
    </div>

</template>

<script>
    import {dataBus} from '../../main.js'

    export default{
        data: function(){
            return {
                server: null
            }
        },
        methods: {
            backNormal(){
                this.server.status = 'Normal'
            }
        },
        created() {
            dataBus.$on('serverSelected', (server)=>{
                this.server = server;
            });
        }
       
    }
</script>

<style>

</style>
