<template>
    <div class="container">
        <home-header></home-header>
        <hr>
        <server-detail></server-detail>
        <hr>
        <home-footer></home-footer>
    </div>
</template>

<script>
import HomeHeader from './HomeHeader.vue';
import ServerDetail from './ServerDetail.vue';
import HomeFooter from './HomeFooter.vue';

export default {
  components:{
    'home-header': HomeHeader,
    'server-detail': ServerDetail,
    'home-footer': HomeFooter,
  }
}
</script>

<style>
</style>
