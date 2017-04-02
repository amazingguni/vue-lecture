new Vue({
  el: '#exercise',
  data: {
    isHighlight: true,
    fontColor: 'red-font',
    color: 'blue',
    isItalic: true,
    size: 'small',
    hidden: 'false',
    boxSize: 20,
    progressWidth: 0,
  },
  computed:{
    isHidden: function(){
      return this.hidden === 'true';
    },
    myStyle: function(){
      return {
        width: this.boxSize + 'px',
        height: this.boxSize + 'px',
      }
    },
    progressStyle: function(){
      return {
        height: '10px',
        width: this.progressWidth + 'px',
      }
    }
  },
  methods: {
    startEffect: function() {
      var vm = this;
      setInterval(function(){
        vm.isHighlight = !vm.isHighlight;
      }, 500);
    },
    startProgress: function(){
      var vm = this;
      var id = setInterval(function(){
        vm.progressWidth += 2
        if(vm.progressWidth == 100)
          clearInterval(id);
      }, 30);
    }
  }
});
