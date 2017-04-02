<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <li
        class="list-group-item"
        v-for="server in servers"
        @click="selectServer(server)">
          Server #{{ server.id }}
      </li>
    </ul>
  </div>
</template>

<script>
  import { eventBus } from '../../main.js'
  export default {
    data(){
      return {
        servers:[
          {id:1, status:"Critical"},
          {id:2, status:"Critical"},
          {id:3, status:"Unknown"},
          {id:4, status:"Normal"},
          {id:5, status:"Normal"},
        ]
      }
    },
    methods:{
      selectServer(server){
        eventBus.selectServer(server);
      }
    },
    created(){
      eventBus.$on('statusChanged', (id) => {
        for(var i = 0 ; i< this.servers.length; i++){
          var server = this.servers[i];
          if (server.id === id){
            server.status = "Normal";
          }
        }
      });
    }

  }
</script>

<style>

</style>
