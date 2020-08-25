var coinMill = new Vue({
    el:"#coin",
    data:{
        message:"0",
        rate:"(USD)"
    },
    computed:{/*在意效能使用computed*/
        ratechange:function(){
            if(this.rate=="(USD)"){
                return (parseInt(this.message)/29.76).toFixed(5)
            }
            if(this.rate=="(JPY)"){
                return (parseInt(this.message)/0.2827).toFixed(5)
            }
            if(this.rate=="(KRW)"){
                return (parseInt(this.message)/0.02704).toFixed(5)
            }
            if(this.rate=="(CNY)"){
                return (parseInt(this.message)/4.3).toFixed(5)
            }
        }
    },
    methods:{/*需要每次更新用method*/
        cowrite: function(number){
            if(this.message==0){
                this.message=number
            }else{
                this.message += number
            }
        },

        ratewrite: function(c){/*切換至要換算的國家*/
             this.rate = c
        },

        Backspace: function(){/*刪除最後一位*/
          if(this.message.length == 1){
              this.message="0"
          }else{
             this.message = this.message.substring(0,this.message.length-1)
          }
        },
        AllClear: function(){/*全部清除*/
            this.message = '0'
        }       
    }
})

