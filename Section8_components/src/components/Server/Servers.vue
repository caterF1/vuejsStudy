<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group" >
      <each-server 
        v-for="server in servers" 
        :server="server">
        </each-server>
    </ul>
  </div>
</template>

<script>
import { dataBus } from "../../main.js";
import EachServer from './EachServer.vue';

export default {
  components:{
      'each-server': EachServer
  },
  data: function() {
    return {
      servers: [
        { id: 1, status: "Normal"},
        { id: 2, status: "Critical"},
        { id: 3, status: "Unknown" },
        { id: 4, status: "Critical" },
        { id: 5, status: "Unknown" }
      ]
    };
  },
  methods: {
      
  }
};
</script>

<style>
</style>
