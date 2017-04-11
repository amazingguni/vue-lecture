<template>
  <div class="form-group">
      <label for="firstName">FirstName</label>
      <input
        type="text"
        id="firstName"
        class="form-control"
        v-model="firstName">
      <label for="lastName">LastName</label>
      <input
        type="text"
        id="lastName"
        class="form-control"
        v-model="lastName">
  </div>
</template>

<script>
    export default {
        data(){
          return {
              firstName:'',
              lastName:'',
          }
        },
        watch:{
          firstName:function(){
            this.nameChanged();
          },
          lastName:function(){
            this.nameChanged();
          }
        },
        computed:{
          fullName: function(){
            return this.firstName + ' ' + this.lastName;
          }
        },
        methods:{
          nameChanged(){
            this.$emit('input', this.fullName);
          }
        },
        props: ['value'],
    }
</script>

<style>

</style>
