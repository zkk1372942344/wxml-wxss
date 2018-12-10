<template>
    <div class="toTop" @click="toTop" v-show="flag">
        返回<br>顶部
    </div>
</template>
<script>
    export default{
        data(){
            return{
                flag:false
            }
        },
        created(){
            window.addEventListener("scroll",()=>{
                var st=document.body.scrollTop||document.documentElement.scrollTop;
                
                    this.flag=st>100;
                
            })
        },
        methods:{
            toTop(){
                document.body.scrollTop=0
                document.documentElement.scrollTop=0
            }
        }
    }
</script>
<style>
    .toTop{
        width:50px;
        height:50px;
        background:#a00303;
        color:white;
        position:fixed;
        bottom:20px;
        right:20px;
        font-size:12px;
        text-align:center;
        line-height:25px;
        cursor:pointer
    }
</style>