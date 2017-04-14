<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <input v-model="text">
                <h4>Exercise 1</h4>
                <p>{{ text | reverse }}</p>
                <h4>Exercise 2</h4>
                <p>{{ text | addCharCount }}</p>
                <hr>
                <h4>Exercise 3</h4>
                <input v-model="computedText">
                <p>{{ reversedText }}</p>
                <p>{{ textWithCount }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import { textUtils } from './textUtils';

    export default {
      mixins:[textUtils],
      data(){
        return {
          text:''
        }
      },
      filters:{
        reverse: function(value){
          return value.split('').reverse().join('');
        },
      },
    }
</script>

<style>
</style>
