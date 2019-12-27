<template>
  <li class="list-group-item" 
    style="cursor: pointer"
    @click="serverSelected"
    >Server #{{server.id}}</li>
</template>

<script>
import { dataBus } from "../../main.js";

export default {
  props: ['server'],
  methods: {
    serverSelected(){
      dataBus.$emit('serverSelected',this.server);
    }
  },
 created(){
 }
};
</script>

<style>
</style>
