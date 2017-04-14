export const textUtils = {
  data(){
    return {
      computedText:'',
    }
  },
  computed:{
    reversedText:function(){
      return this.computedText.split('').reverse().join('');
    },
    textWithCount: function(){
      return this.computedText + ' (' + this.computedText.length +')';
    }
  },
};
