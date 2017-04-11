<template>
    <div class="container">
        <form v-if="!isSubmitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                  <app-fullname v-model="userData.fullName"></app-fullname>

                  <div class="form-group">
                      <label for="email">Email</label>
                      <input
                        type="text"
                        id="email"
                        class="form-control"
                        v-model="userData.email">
                  </div>

                  <div class="form-group">
                      <label for="password">Password</label>
                      <input
                        type="password"
                        id="password"
                        class="form-control"
                        v-model="userData.password"
                        >
                  </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="yes">
                        <input
                            type="radio"
                            id="yes"
                            value="yes"
                            v-model="storedata"> Yes
                    </label>
                    <label for="no">
                        <input
                            type="radio"
                            id="no"
                            value="no"
                            v-model="storedata"> No
                    </label>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <button
                            class="btn btn-primary"
                            @click.prevent="submitted">Submit!
                    </button>
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ userData.fullName }}</p>
                        <p>Mail: {{ userData.email }}</p>
                        <p>Password: {{ userData.password }}</p>
                        <p>Store in Database?: {{ storedata }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullName from './FullName.vue';
    export default {
      data(){
        return {
          userData:{
            fullName: '',
            email:'',
            password: '',
          },
          isSubmitted : false,
          storedata: 'no',
        };
      },
      methods : {
        submitted(){
          this.isSubmitted = true;
        }
      },
      components:{
        appFullname: FullName
      }

    }
</script>

<style>
</style>
