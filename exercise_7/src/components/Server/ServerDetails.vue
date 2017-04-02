<template>
    <div class="col-xs-12 col-sm-6">
      <template v-if="server">
        <p>Server #{{ server.id }} : {{ server.status }}</p>
        <button @click="setNormal">Set server status to Normal</button>
      </template>
      <p v-else>Server Details are currently not updated</p>
    </div>

</template>

<script>
  import { eventBus } from '../../main.js'
  export default {
    data(){
      return {
        server:null
      }
    },
    methods:{
      setNormal: function(){
        eventBus.setNormal(this.server.id);
      }
    },
    created(){
      eventBus.$on('serverSelected', (server) => {
        this.server = server;
      });

    }
  }
</script>

<style>

</style>
